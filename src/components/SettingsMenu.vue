<template>
	<div class="ito-settings-menu">
		<button class="ito-settings-button" @click="showSettings = !showSettings" title="Settings">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ito-settings-icon">
				<path d="M8 2H12V4H14V5L16 6V8H18V12H16V14L14 15V16H12V18H8V16H6V15L4 14V12H2V8H4V6L6 5V4H8V2ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z" fill="currentColor"/>
			</svg>
		</button>

		<Transition name="ito-settings-transition">
			<div v-if="showSettings" class="ito-settings-panel">
				<div class="ito-settings-header">
					<div class="ito-settings-tabs">
						<button
							:class="['ito-settings-tab', { 'ito-settings-tab--active': activeTab === 'general' }]"
							@click="activeTab = 'general'"
							type="button"
						>
							General
						</button>
						<button
							:class="['ito-settings-tab', { 'ito-settings-tab--active': activeTab === 'appearance' }]"
							@click="activeTab = 'appearance'"
							type="button"
						>
							Appearance
						</button>
					</div>
					<button class="ito-settings-close" @click="showSettings = false">×</button>
				</div>

				<div class="ito-settings-content" v-if="activeTab === 'general'">
					<div class="ito-color-field">
						<label for="main-bg-color">Main Background</label>
						<div class="ito-color-input-wrapper">
							<input
								id="main-bg-color"
								type="color"
								v-model="mainBgColor"
								@input="updateMainBg"
								class="ito-color-input"
							/>
							<input
								id="main-bg-hex"
								type="text"
								v-model="mainBgInput"
								@input="onMainBgInput"
								@blur="updateMainBgFromInput"
								@keydown.enter.prevent="updateMainBgFromInput"
								class="ito-color-text-input"
								placeholder="#FFFFFF"
								maxlength="7"
								inputmode="text"
								autocapitalize="characters"
							/>
						</div>
					</div>

					<div class="ito-color-field">
						<label for="accent-color">Accent Color</label>
						<div class="ito-color-input-wrapper">
							<input
								id="accent-color"
								type="color"
								v-model="accentColor"
								@input="updateAccentColor"
								class="ito-color-input"
							/>
							<input
								id="accent-hex"
								type="text"
								v-model="accentInput"
								@input="onAccentInput"
								@blur="updateAccentFromInput"
								@keydown.enter.prevent="updateAccentFromInput"
								class="ito-color-text-input"
								placeholder="#00BCD4"
								maxlength="7"
								inputmode="text"
								autocapitalize="characters"
							/>
						</div>
					</div>

					<button class="ito-settings-reset" @click="resetColors">Reset to Default</button>
				</div>

				<div class="ito-settings-content" v-else>
					<div class="ito-theme-section">
						<div class="ito-theme-section-title">UI Themes</div>
						<div class="ito-theme-options">
							<button
								v-for="theme in uiThemes"
								:key="theme.id"
								:class="['ito-theme-option', { 'ito-theme-option--active': activeUiTheme === theme.id }]"
								@click="setUiTheme(theme.id)"
								type="button"
							>
								{{ theme.label }}
							</button>
						</div>
					</div>

					<div class="ito-theme-divider"></div>

					<div class="ito-theme-manager">
						<div class="ito-theme-section-title">Custom Presets</div>
						<label for="ito-theme-name">New Preset Name</label>
						<div class="ito-theme-row">
							<input
								id="ito-theme-name"
								type="text"
								v-model="newPresetName"
								class="ito-theme-input"
								placeholder="My theme"
							/>
							<button
								class="ito-theme-save"
								@click="savePreset"
								:disabled="!newPresetName.trim()"
								type="button"
							>
								Save Current
							</button>
						</div>

						<div class="ito-theme-list">
							<div v-if="presets.length === 0" class="ito-theme-empty">
								No presets yet.
							</div>
							<div v-for="preset in presets" :key="preset.name" class="ito-theme-item">
								<span class="ito-theme-name">{{ preset.name }}</span>
								<div class="ito-theme-actions">
									<button class="ito-theme-load" @click="loadPreset(preset)" type="button">Load</button>
									<button class="ito-theme-delete" @click="deletePreset(preset.name)" type="button">
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showSettings = ref(false)
type UiThemeId = 'default' | 'neon' | 'glass'

const activeTab = ref<'general' | 'appearance'>('general')
const mainBgColor = ref('#ffffff')
const accentColor = ref('#06b6d4')
const mainBgInput = ref('#ffffff')
const accentInput = ref('#06b6d4')
const newPresetName = ref('')
const presets = ref<Array<{ name: string; mainBg: string; accentColor: string }>>([])
const activeUiTheme = ref<UiThemeId>('default')

const uiThemes: Array<{ id: UiThemeId; label: string }> = [
	{ id: 'default', label: 'Default' },
	{ id: 'neon', label: 'Neon' },
	{ id: 'glass', label: 'Glass' },
]

const presetStorageKey = 'ito-theme-presets'
const activePresetStorageKey = 'ito-last-active-preset'
const uiThemeStorageKey = 'ito-ui-theme'

const getContrastColor = (hexcolor: string): string => {
	if (!hexcolor) return '#333333'
	const r = parseInt(hexcolor.slice(1, 3), 16)
	const g = parseInt(hexcolor.slice(3, 5), 16)
	const b = parseInt(hexcolor.slice(5, 7), 16)
	return (r * 299 + g * 587 + b * 114) / 1000 >= 150 ? '#333333' : '#ffffff'
}

const handleColorChange = (variable: string, value: string) => {
	document.documentElement.style.setProperty(variable, value)
}

const normalizeHex = (value: string) => {
	const trimmed = value.trim().toUpperCase()
	if (!trimmed) return null
	let normalized = trimmed.startsWith('#') ? trimmed : `#${trimmed}`
	if (/^#[0-9A-F]{3}$/.test(normalized)) {
		normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
	}
	if (!/^#[0-9A-F]{6}$/.test(normalized)) return null
	return normalized
}

const formatHexInput = (value: string) => {
	const trimmed = value.trim().toUpperCase()
	if (!trimmed) return ''
	return trimmed.startsWith('#') ? trimmed : `#${trimmed}`
}

const updateAccentText = () => {
	handleColorChange('--accent-text', getContrastColor(accentColor.value))
}

const updateMainBg = () => {
	handleColorChange('--main-bg', mainBgColor.value)
	if (activeUiTheme.value === 'default') {
		const textColor = getContrastColor(mainBgColor.value)
		handleColorChange('--text-color', textColor)
	}
	mainBgInput.value = mainBgColor.value.toUpperCase()
}

const updateAccentColor = () => {
	handleColorChange('--accent-color', accentColor.value)
	updateAccentText()
	accentInput.value = accentColor.value.toUpperCase()
}

const updateMainBgFromInput = () => {
	const normalized = normalizeHex(mainBgInput.value)
	if (!normalized) {
		mainBgInput.value = mainBgColor.value.toUpperCase()
		return
	}
	mainBgColor.value = normalized
	updateMainBg()
}

const updateAccentFromInput = () => {
	const normalized = normalizeHex(accentInput.value)
	if (!normalized) {
		accentInput.value = accentColor.value.toUpperCase()
		return
	}
	accentColor.value = normalized
	updateAccentColor()
}

const onMainBgInput = () => {
	mainBgInput.value = formatHexInput(mainBgInput.value).slice(0, 7)
}

const onAccentInput = () => {
	accentInput.value = formatHexInput(accentInput.value).slice(0, 7)
}

const applyTheme = (mainBg: string, accent: string) => {
	mainBgColor.value = mainBg
	accentColor.value = accent
	handleColorChange('--main-bg', mainBg)
	handleColorChange('--accent-color', accent)
	if (activeUiTheme.value === 'default') {
		handleColorChange('--text-color', getContrastColor(mainBg))
	}
	updateAccentText()
	mainBgInput.value = mainBg.toUpperCase()
	accentInput.value = accent.toUpperCase()
}

const savePresetsToStorage = () => {
	try {
		localStorage.setItem(presetStorageKey, JSON.stringify(presets.value))
	} catch (err) {
	}
}

const getStoredActivePreset = (): Promise<string | null> => {
	const chromeStorage =
		typeof window !== 'undefined'
			? (window as Window & { chrome?: { storage?: { local?: any }; runtime?: { lastError?: unknown } } }).chrome
					?.storage?.local
			: undefined
	if (chromeStorage) {
		return new Promise((resolve) => {
			try {
				chromeStorage.get([activePresetStorageKey], (result: Record<string, unknown>) => {
					const chromeRuntime = (window as Window & { chrome?: { runtime?: { lastError?: unknown } } }).chrome
					if (chromeRuntime?.runtime?.lastError) {
						resolve(null)
						return
					}
					const value = result?.[activePresetStorageKey]
					resolve(typeof value === 'string' ? value : null)
				})
			} catch (err) {
				resolve(null)
			}
		})
	}

	try {
		const value = localStorage.getItem(activePresetStorageKey)
		return Promise.resolve(value || null)
	} catch (err) {
		return Promise.resolve(null)
	}
}

const getStoredUiTheme = (): Promise<UiThemeId | null> => {
	const chromeStorage =
		typeof window !== 'undefined'
			? (window as Window & { chrome?: { storage?: { local?: any }; runtime?: { lastError?: unknown } } }).chrome
					?.storage?.local
			: undefined
	if (chromeStorage) {
		return new Promise((resolve) => {
			try {
				chromeStorage.get([uiThemeStorageKey], (result: Record<string, unknown>) => {
					const chromeRuntime = (window as Window & { chrome?: { runtime?: { lastError?: unknown } } }).chrome
					if (chromeRuntime?.runtime?.lastError) {
						resolve(null)
						return
					}
					const value = result?.[uiThemeStorageKey]
					resolve(typeof value === 'string' ? (value as UiThemeId) : null)
				})
			} catch (err) {
				resolve(null)
			}
		})
	}

	try {
		const value = localStorage.getItem(uiThemeStorageKey)
		return Promise.resolve((value as UiThemeId) || null)
	} catch (err) {
		return Promise.resolve(null)
	}
}

const setStoredUiTheme = async (themeId: UiThemeId) => {
	const chromeStorage =
		typeof window !== 'undefined'
			? (window as Window & { chrome?: { storage?: { local?: any } } }).chrome?.storage?.local
			: undefined
	if (chromeStorage) {
		try {
			chromeStorage.set({ [uiThemeStorageKey]: themeId })
		} catch (err) {
		}
		return
	}

	try {
		localStorage.setItem(uiThemeStorageKey, themeId)
	} catch (err) {
	}
}

const setUiTheme = (themeId: UiThemeId) => {
	activeUiTheme.value = themeId
	const root = document.documentElement
	if (themeId === 'default') {
		root.removeAttribute('data-theme')
		const textColor = getContrastColor(mainBgColor.value)
		handleColorChange('--text-color', textColor)
	} else {
		root.setAttribute('data-theme', themeId)
		root.style.removeProperty('--text-color')
	}
	void setStoredUiTheme(themeId)
}

const setStoredActivePreset = async (name: string | null) => {
	const chromeStorage =
		typeof window !== 'undefined'
			? (window as Window & { chrome?: { storage?: { local?: any } } }).chrome?.storage?.local
			: undefined
	if (chromeStorage) {
		try {
			if (name) {
				chromeStorage.set({ [activePresetStorageKey]: name })
			} else {
				chromeStorage.remove(activePresetStorageKey)
			}
		} catch (err) {
		}
		return
	}

	try {
		if (name) {
			localStorage.setItem(activePresetStorageKey, name)
		} else {
			localStorage.removeItem(activePresetStorageKey)
		}
	} catch (err) {
	}
}

const loadPresetsFromStorage = () => {
	try {
		const stored = localStorage.getItem(presetStorageKey)
		if (!stored) return
		const parsed = JSON.parse(stored)
		if (Array.isArray(parsed)) {
			presets.value = parsed.filter((preset) => preset?.name && preset?.mainBg && preset?.accentColor)
		}
	} catch (err) {
	}
}

const applyStoredPreset = async () => {
	const storedName = await getStoredActivePreset()
	if (!storedName) return
	const match = presets.value.find(
		(preset) => preset.name.toLowerCase() === storedName.toLowerCase()
	)
	if (match) {
		applyTheme(match.mainBg, match.accentColor)
		return
	}
	resetColors()
}

const savePreset = () => {
	const name = newPresetName.value.trim()
	if (!name) return
	const existingIndex = presets.value.findIndex((preset) => preset.name.toLowerCase() === name.toLowerCase())
	const entry = {
		name,
		mainBg: mainBgColor.value,
		accentColor: accentColor.value,
	}
	if (existingIndex >= 0) {
		presets.value.splice(existingIndex, 1, entry)
	} else {
		presets.value.unshift(entry)
	}
	newPresetName.value = ''
	savePresetsToStorage()
	void setStoredActivePreset(name)
}

const loadPreset = (preset: { name: string; mainBg: string; accentColor: string }) => {
	applyTheme(preset.mainBg, preset.accentColor)
	void setStoredActivePreset(preset.name)
}

const deletePreset = async (name: string) => {
	presets.value = presets.value.filter((preset) => preset.name !== name)
	savePresetsToStorage()
	const storedName = await getStoredActivePreset()
	if (storedName && storedName.toLowerCase() === name.toLowerCase()) {
		await setStoredActivePreset(null)
	}
}

const resetColors = () => {
	mainBgColor.value = '#ffffff'
	accentColor.value = '#06b6d4'
	handleColorChange('--main-bg', '#ffffff')
	handleColorChange('--accent-color', '#06b6d4')
	if (activeUiTheme.value === 'default') {
		handleColorChange('--text-color', '#333333')
	}
	updateAccentText()
	mainBgInput.value = '#FFFFFF'
	accentInput.value = '#06B6D4'
}

onMounted(() => {
	const mainBg = getComputedStyle(document.documentElement).getPropertyValue('--main-bg').trim()
	const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim()

	if (mainBg) mainBgColor.value = mainBg
	if (accent) accentColor.value = accent
	if (mainBg) {
		handleColorChange('--text-color', getContrastColor(mainBg))
	}
	if (accent || accentColor.value) {
		updateAccentText()
	}
	mainBgInput.value = (mainBg || mainBgColor.value).toUpperCase()
	accentInput.value = (accent || accentColor.value).toUpperCase()

	loadPresetsFromStorage()
	void applyStoredPreset()
	void getStoredUiTheme().then((storedTheme) => {
		const match = uiThemes.find((theme) => theme.id === storedTheme)
		setUiTheme(match?.id ?? 'default')
	})
})
</script>

<style scoped>
.ito-settings-menu {
	position: relative;
}

.ito-settings-button {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 28px;
	width: 28px;
	border-radius: 6px;
	cursor: pointer;
	background-color: var(--button-ghost-bg);
	color: var(--button-ghost-text);
	border: 1px solid var(--button-border);
	padding: 4px;
	transition: all 0.2s;
	flex-shrink: 0;
}

.ito-settings-button:hover {
	background-color: var(--button-hover-bg);
	color: var(--button-text);
	transform: scale(1.1);
}

.ito-settings-button:active {
	transform: scale(0.95);
}

.ito-settings-icon {
	width: 100%;
	height: 100%;
}

.ito-settings-panel {
	position: absolute;
	top: calc(100% + 8px);
	right: 0;
	background-color: var(--panel-bg);
	border: 1px solid var(--panel-border);
	border-radius: 8px;
	padding: 12px;
	min-width: 240px;
	box-shadow: var(--panel-shadow);
	backdrop-filter: var(--panel-blur);
	z-index: 10000;
}

:root[data-theme='glass'] .ito-settings-panel {
	background-color: rgba(20, 20, 20, 0.95);
}

.ito-settings-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
	padding-bottom: 8px;
	border-bottom: 1px solid var(--panel-border);
	text-shadow: var(--panel-text-shadow);
}

.ito-settings-tabs {
	display: flex;
	gap: 12px;
	align-items: center;
}

.ito-settings-tab {
	background: none;
	border: none;
	color: var(--text-color);
	font-size: 13px;
	font-weight: 600;
	padding: 0 0 4px;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	text-shadow: var(--panel-text-shadow);
}

.ito-settings-tab--active {
	border-bottom-color: var(--accent-color);
}

.ito-settings-close {
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
	color: var(--text-color);
	padding: 0;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.2s;
}

.ito-settings-close:hover {
	transform: scale(1.2);
}

.ito-settings-content {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.ito-theme-manager {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.ito-theme-section {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 16px;
}

.ito-theme-section-title {
	font-size: 11px;
	font-weight: 600;
	color: var(--text-color);
	text-transform: uppercase;
	letter-spacing: 0.06em;
	text-shadow: var(--panel-text-shadow);
}

.ito-theme-options {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.ito-theme-option {
	padding: 6px 10px;
	border-radius: 8px;
	border: 1px solid var(--panel-border);
	background-color: var(--panel-bg);
	color: var(--text-color);
	font-size: 10px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s;
	text-shadow: var(--panel-text-shadow);
	min-width: 72px;
	text-align: center;
}

.ito-theme-option:hover {
	border-color: var(--button-border);
	box-shadow: var(--shadow-soft);
}

.ito-theme-option--active {
	border-color: var(--button-border);
	border-width: 2px;
	background-color: var(--button-hover-bg);
	color: var(--button-text);
	box-shadow: var(--button-shadow);
}

.ito-theme-divider {
	height: 1px;
	width: 100%;
	background-color: var(--panel-border);
	margin: 6px 0 14px;
}

.ito-theme-manager label {
	font-size: 11px;
	font-weight: 500;
	color: var(--text-color);
}

.ito-theme-row {
	display: flex;
	gap: 8px;
}

.ito-theme-input {
	flex: 1;
	padding: 6px 8px;
	font-size: 12px;
	border-radius: 4px;
	border: 1px solid var(--input-border);
	background-color: var(--input-bg);
	color: var(--text-color);
}

.ito-theme-save {
	padding: 6px 10px;
	font-size: 11px;
	font-weight: 600;
	border-radius: 4px;
	border: 1px solid var(--button-border);
	background-color: var(--button-bg);
	color: var(--button-text);
	cursor: pointer;
}

.ito-theme-save:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.ito-theme-list {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.ito-theme-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 8px;
	border-radius: 4px;
	border: 1px solid var(--panel-border);
}

.ito-theme-name {
	font-size: 12px;
	color: var(--text-color);
}

.ito-theme-actions {
	display: flex;
	gap: 6px;
}

.ito-theme-load,
.ito-theme-delete {
	font-size: 11px;
	padding: 4px 6px;
	border-radius: 4px;
	border: 1px solid var(--button-border);
	background-color: transparent;
	color: var(--text-color);
	cursor: pointer;
}

.ito-theme-load:hover {
	background-color: var(--button-hover-bg);
	color: var(--button-text);
}

.ito-theme-delete:hover {
	background-color: var(--danger-color);
	border-color: var(--danger-color);
	color: var(--danger-text);
}

.ito-theme-empty {
	font-size: 11px;
	color: var(--text-color);
	opacity: 0.8;
}

.ito-color-field {
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.ito-color-field label {
	font-size: 11px;
	font-weight: 500;
	color: var(--text-color);
	-webkit-user-select: none;
	user-select: none;
}

.ito-color-input-wrapper {
	display: flex;
	gap: 6px;
	align-items: center;
}

.ito-color-input {
	width: 40px;
	height: 32px;
	border: 1px solid var(--input-border);
	border-radius: 4px;
	cursor: pointer;
	transition: box-shadow 0.2s;
}

.ito-color-input:hover {
	box-shadow: var(--shadow-soft);
}

.ito-color-input:focus {
	outline: none;
	box-shadow: 0 0 0 2px var(--focus-ring);
}

.ito-color-text-input {
	flex: 1;
	padding: 6px 8px;
	border-radius: 4px;
	border: 1px solid var(--input-border);
	background-color: var(--input-bg);
	color: var(--text-color);
	font-size: 11px;
	font-family: monospace;
	text-transform: uppercase;
}

.ito-color-text-input:focus {
	outline: none;
	box-shadow: 0 0 0 2px var(--focus-ring);
}

.ito-color-value {
	font-size: 11px;
	font-family: monospace;
	padding: 4px 6px;
	background-color: var(--input-bg);
	border-radius: 3px;
	flex: 1;
	text-align: center;
	color: var(--text-color);
}

.ito-settings-reset {
	padding: 6px 10px;
	font-size: 11px;
	font-weight: 500;
	background-color: transparent;
	border: 1px solid var(--button-border);
	border-radius: 4px;
	cursor: pointer;
	color: var(--text-color);
	transition: all 0.2s;
}

.ito-settings-reset:hover {
	background-color: var(--button-hover-bg);
	color: var(--button-text);
	border-color: var(--button-border);
}

.ito-settings-transition-enter-active,
.ito-settings-transition-leave-active {
	transition: all 0.2s ease;
}

.ito-settings-transition-enter-from,
.ito-settings-transition-leave-to {
	opacity: 0;
	transform: translateY(-4px);
}
</style>
