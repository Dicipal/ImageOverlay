<template>
	<div id="ImageTracerOverlayContainer" :class="[isAttached ? 'ito-attached-container' : 'ito-fixed-container']">
		<TracerImage v-if="imageSrc" :src="imageSrc" />
	</div>

	<div class="ito-fixed-container">
		<ControlsMenu>
			<ControlFieldGroup>
				<ImagePicker @change="imageSrc = $event" />
				<ImageFetcher @change="imageSrc = $event" />
				<ImageAgent @change="imageSrc = $event" />
			</ControlFieldGroup>

			<ControlFieldGroup>
				<SwitchField label="Lock image position" v-model="isAttached" />
			</ControlFieldGroup>

			<ControlFieldGroup>
				<RangeField label="Opacity" :min="0" :max="1" :step="0.01" v-model="opacity" />
				<RangeField label="Scale" :min="0.1" :max="5" :step="0.01" v-model="scale" />
				<RangeField label="Rotate" :min="0" :max="360" :step="1" v-model="rotation" />
			</ControlFieldGroup>

			<ControlFieldGroup v-if="imageSrc">
				<div class="ito-text-buttons-group">
					<TextButton label="Clear image" @click="clearImage" />
					<TextButton
						label="Reset image"
						title="Reset position, opacity, scale and rotation"
						@click="resetImage"
					/>
				</div>
			</ControlFieldGroup>

			<template #footer>
				<div class="ito-menu-helper">
					Tips: Position the image by dragging. Ctrl+Scroll to zoom. Shift+Scroll to rotate. Alt+V to toggle visibility.
				</div>
			</template>
		</ControlsMenu>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ControlsMenu from './components/ControlsMenu.vue'
import ControlFieldGroup from './components/ControlFieldGroup.vue'
import TracerImage from './components/TracerImage.vue'
import ImagePicker from './components/ImagePicker.vue'
import ImageFetcher from './components/ImageFetcher.vue'
import ImageAgent from './components/ImageAgent.vue'
import RangeField from './components/RangeField.vue'
import TextButton from './components/TextButton.vue'
import SwitchField from './components/SwitchField.vue'
import { useControls } from './composables/useControls'
import { useElementDrag } from './composables/useElementDrag'
import { positionAttachedElementContainer } from './utils/dom'

const { opacity, scale, resetControls, rotation, isAttached } = useControls()
const { resetElementDrag } = useElementDrag()

const imageSrc = ref<string | undefined>(undefined)

function clearImage() {
	imageSrc.value = undefined
	try {
		window.dispatchEvent(new CustomEvent('ito:clear-image'))
	} catch (err) {
	}
}

function resetImage() {
	resetControls()
	resetElementDrag()
}

watch(isAttached, () => {
	if (isAttached.value) {
		positionAttachedElementContainer()
	}
})
</script>

<style>
#ImageTracerOverlayMount {
	display: block !important;
	color: var(--text-color);
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		'Noto Sans',
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		'Noto Color Emoji';
}

#ImageTracerOverlayMount * {
	box-sizing: border-box;
	line-height: 16px;
}

:root {
	--image-tracer-overlay-attached-x: 0px;
	--image-tracer-overlay-attached-y: 0px;
	--main-bg: #ffffff;
	--secondary-bg: #f8f9fa;
	--accent-color: #06b6d4;
	--accent-text: #ffffff;
	--text-color: #333333;
}
</style>

<style scoped>
.ito-fixed-container {
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999999999;
}

.ito-attached-container {
	position: absolute;
	top: var(--image-tracer-overlay-attached-x);
	left: var(--image-tracer-overlay-attached-y);
	width: 100%;
	height: 100%;
	z-index: 9999999999;
	pointer-events: none;
}

.ito-menu-helper {
	font-size: 10px;
	color: var(--text-color);
	opacity: 0.8;
}

.ito-text-buttons-group {
	display: flex;
	justify-content: space-evenly;
}
</style>
