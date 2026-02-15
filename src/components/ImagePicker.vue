<template>
	<ControlField label="Upload image">
		<div class="ito-upload-button" @click="openFilePicker">Browse</div>
		<input ref="inputRef" type="file" accept="image/*" style="display: none" @change="onFileUpload" />
	</ControlField>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loadFileAsUrl } from '../utils/file'
import ControlField from './ControlField.vue'

const emit = defineEmits<{
	(e: 'change', fileUrl: string): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

async function onFileUpload(event: Event) {
	const target = event.target as HTMLInputElement
	const files = target.files || []
	const [file] = files

	try {
		const fileUrl = await loadFileAsUrl(file)
		emit('change', fileUrl)
		target.value = ''
	} catch (err) {
	}
}

function openFilePicker() {
	inputRef.value?.click()
}
</script>

<style scoped>
.ito-upload-button {
	padding: 8px 12px;
	font-size: 12px;
	background-color: var(--accent-color);
	border-radius: 8px;
	color: var(--accent-text);
	font-weight: 700;
	text-align: center;
	cursor: pointer;
}

.ito-upload-button:hover {
	background-color: color-mix(in srgb, var(--accent-color) 80%, black);
}
</style>
