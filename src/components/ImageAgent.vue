<template>
	<ControlField label="Image Fetch" :error="errorMessage">
		<div class="ito-image-agent-controls column">
			<input
				v-model="customWord"
				type="text"
				:placeholder="customWord ? 'Press enter or click Search' : 'Type a word here...'"
				class="ito-input-control full-width"
				@input="onManualInput"
				@focus="isInputFocused = true"
				@blur="isInputFocused = false"
				@keydown.enter="searchImage"
				:disabled="isLoading"
			/>

			<div class="ito-button-row">
				<button
					class="ito-agent-btn"
					@click="searchImage"
					:disabled="isLoading"
				>
					{{ isLoading ? 'Fetching...' : '🔍 Search' }}
				</button>

				<div class="ito-nav-group">
					<button class="ito-nav-btn left" @click="navigateImage(-1)" :disabled="currentResults.length===0">◀</button>
					<button class="ito-nav-btn right" @click="navigateImage(1)" :disabled="currentResults.length===0">▶</button>
					<span class="ito-nav-counter" v-if="currentResults.length">{{ currentIndex + 1 }} / {{ currentResults.length }}</span>
				</div>
			</div>
		</div>
		<div v-if="statusMessage" class="ito-status-message">
			{{ statusMessage }}
		</div>
	</ControlField>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { loadFileUrl } from '../utils/file'
import ControlField from './ControlField.vue'

const emit = defineEmits<{
	(e: 'change', imageUrl: string): void
}>()

const isLoading = ref(false)
const errorMessage = ref('')
const statusMessage = ref('')
const customWord = ref('')
const lastDetectedWord = ref('')
let detectedWordInterval: number | undefined
const isInputFocused = ref(false)
const manualEditUntil = ref(0)
const searchFilledWord = ref('')
const manualClearUntil = ref(0)

const currentResults = ref<string[]>([])
const currentIndex = ref<number>(0)

function getVisibleText(element: Element | null): string {
	if (!element || !element.isConnected) return ''
	const htmlElement = element as HTMLElement
	const style = window.getComputedStyle(htmlElement)
	if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return ''
	if (htmlElement.offsetParent === null && style.position !== 'fixed') return ''
	return htmlElement.textContent?.trim() || ''
}

function normalizeWord(text: string): string {
	return text.replace(/_/g, '').replace(/\s\s+/g, ' ').trim()
}

function getSkribblWord(): string | null {
	const wordElement = document.querySelector('.word')
	const wordText = normalizeWord(getVisibleText(wordElement))
	if (wordText) return wordText

	const currentWordElement = document.querySelector('#currentWord')
	const currentWordText = normalizeWord(getVisibleText(currentWordElement))
	if (currentWordText) return currentWordText

	const dataWordElement = document.querySelector('[data-word]') as HTMLElement | null
	if (dataWordElement && dataWordElement.dataset.word) {
		const dataWord = normalizeWord(dataWordElement.dataset.word)
		if (dataWord) return dataWord
	}

	return null
}

function navigateImage(step: number) {
	if (!currentResults.value || currentResults.value.length === 0) return
	const len = currentResults.value.length
	currentIndex.value = (currentIndex.value + step + len) % len
	const newUrl = currentResults.value[currentIndex.value]
	if (!newUrl) return
	loadFileUrl(newUrl)
		.then(() => {
			emit('change', newUrl)
			statusMessage.value = `${currentIndex.value + 1} / ${len}`
			setTimeout(() => (statusMessage.value = ''), 1500)
		})
		.catch(() => {
			errorMessage.value = 'Failed to load selected image.'
		})
}

function syncDetectedWord() {
	const detectedWord = getSkribblWord()
	const now = Date.now()
	const trimmedCustom = customWord.value.trim()

	if (!detectedWord) {
		if (searchFilledWord.value && trimmedCustom === searchFilledWord.value) {
			customWord.value = ''
			searchFilledWord.value = ''
			lastDetectedWord.value = ''
			return
		}
		if (!trimmedCustom && !isInputFocused.value && now > manualEditUntil.value) {
			customWord.value = ''
			searchFilledWord.value = ''
			lastDetectedWord.value = ''
		}
		return
	}

	if (
		!trimmedCustom &&
		!isInputFocused.value &&
		now > manualEditUntil.value &&
		now > manualClearUntil.value
	) {
		customWord.value = detectedWord
		searchFilledWord.value = detectedWord
		lastDetectedWord.value = detectedWord
	}
}

function onManualInput() {
	const now = Date.now()
	manualEditUntil.value = now + 2000
	searchFilledWord.value = ''
	if (!customWord.value.trim()) {
		manualClearUntil.value = now + 5000
		lastDetectedWord.value = ''
	}
}

onMounted(() => {
	syncDetectedWord()
	detectedWordInterval = window.setInterval(syncDetectedWord, 500)
	window.addEventListener('ito:clear-image', resetAgentState)
})

onUnmounted(() => {
	if (detectedWordInterval !== undefined) {
		window.clearInterval(detectedWordInterval)
	}
	window.removeEventListener('ito:clear-image', resetAgentState)
})

function resetAgentState() {
	currentResults.value = []
	currentIndex.value = 0
	statusMessage.value = ''
	customWord.value = ''
	lastDetectedWord.value = ''
	searchFilledWord.value = ''
	manualClearUntil.value = 0
	errorMessage.value = ''
}

async function searchImage() {
	errorMessage.value = ''
	statusMessage.value = ''

	const manualWord = customWord.value.trim()
	const liveWord = getSkribblWord()
	let word = ''
	if (manualWord) {
		const isSearchFilled = searchFilledWord.value && manualWord === searchFilledWord.value
		if (!isSearchFilled || liveWord) {
			word = manualWord
		}
	}
	if (!word && liveWord) {
		word = liveWord
	}

	if (!word) {
		errorMessage.value = 'Could not detect word. Type it manually.'
		return
	}

	isLoading.value = true

	try {
		const apiUrl = `https://agent.typo.rip/${encodeURIComponent(word)}`
		const response = await fetch(apiUrl)

		if (!response.ok) {
			throw new Error(`API returned ${response.status}`)
		}

		const data = await response.json()
		const results: string[] = []
		if (Array.isArray(data)) {
			for (const item of data) {
				if (!item) continue
				if (typeof item === 'string') results.push(item)
				else if (typeof item === 'object') results.push(item.url || item.src)
			}
		} else if (typeof data === 'object') {
			const arr = data.results || data.images || data.data
			if (Array.isArray(arr)) {
				for (const item of arr) {
					if (!item) continue
					if (typeof item === 'string') results.push(item)
					else if (typeof item === 'object') results.push(item.url || item.src)
				}
			} else if (data.url || data.src) {
				results.push(data.url || data.src)
			}
		}

		const filtered = results.filter(Boolean)
		if (filtered.length === 0) {
			errorMessage.value = 'No images found for this word'
			return
		}

		currentResults.value = filtered
		currentIndex.value = 0
		const firstUrl = currentResults.value[0]
		await loadFileUrl(firstUrl)
		emit('change', firstUrl)
		statusMessage.value = `1 / ${currentResults.value.length}`
		setTimeout(() => {
			statusMessage.value = ''
		}, 2000)
	} catch (err) {
		errorMessage.value = 'Failed to fetch image. Try another word.'
	} finally {
		isLoading.value = false
	}
}
</script>

<style scoped>
.ito-image-agent-controls {
	display: flex;
	gap: 6px;
	align-items: center;
}

.ito-agent-btn {
	appearance: none;
	padding: 4px 10px;
	margin: 0;
	font-size: 12px;
	border-radius: 8px;
	border: none;
	outline: none;
	box-shadow: none;
	background-color: var(--accent-color);
	color: var(--accent-text);
	cursor: pointer;
	white-space: nowrap;
	font-weight: 500;
	transition: all 0.2s;
	flex-shrink: 0;
}

.ito-agent-btn:focus,
.ito-agent-btn:focus-visible,
.ito-agent-btn:active {
	outline: none;
	box-shadow: none;
}

.ito-agent-btn:hover:not(:disabled) {
	background-color: color-mix(in srgb, var(--accent-color) 80%, black);
	box-shadow: 0 2px 4px rgba(6, 182, 212, 0.3);
}

.ito-agent-btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.ito-input-control {
	appearance: none;
	padding: 4px 8px;
	margin: 0;
	font-size: 12px;
	border-radius: 8px;
	height: auto;
	border: 1px solid #cbd5e1;
	background-color: var(--main-bg);
	width: 100%;
	flex: 1;
}

.ito-input-control:focus:not(:disabled) {
	outline: none;
	box-shadow: inset 0 0 0 1px var(--accent-color);
	border-color: var(--accent-color);
}

.ito-input-control:disabled {
	opacity: 0.7;
	background-color: #f1f5f9;
}

.ito-input-control::placeholder {
	color: #64748b;
}

.ito-nav-btn {
	appearance: none;
	border: none;
	padding: 6px 8px;
	margin-left: 4px;
	border-radius: 6px;
	color: white;
	cursor: pointer;
	font-weight: 600;
}

.ito-nav-btn.left {
	background: #ff4d4d;
}

.ito-nav-btn.right {
	background: #2ecc71;
}

.ito-nav-btn:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.ito-nav-counter {
	font-size: 11px;
	color: #64748b;
	margin-left: 8px;
}

.ito-image-agent-controls.column {
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
}

.ito-input-control.full-width {
	width: 100%;
	box-sizing: border-box;
}

.ito-button-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	width: 100%;
}

.ito-nav-group {
	display: flex;
	align-items: center;
	gap: 6px;
}

.ito-status-message {
	font-size: 11px;
	color: #10b981;
	margin-top: 4px;
	animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
