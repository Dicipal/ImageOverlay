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
	--panel-bg: var(--main-bg);
	--panel-border: #cbd5e1;
	--panel-outline: #99a1bc4a;
	--panel-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	--shadow-soft: 0 2px 4px rgba(0, 0, 0, 0.1);
	--panel-blur: none;
	--panel-text-shadow: none;
	--button-bg: var(--accent-color);
	--button-text: var(--accent-text);
	--button-border: var(--accent-color);
	--button-hover-bg: color-mix(in srgb, var(--accent-color) 80%, black);
	--button-shadow: 0 2px 4px rgba(6, 182, 212, 0.3);
	--button-ghost-bg: transparent;
	--button-ghost-text: var(--text-color);
	--input-bg: var(--main-bg);
	--input-border: #cbd5e1;
	--input-placeholder: #64748b;
	--input-disabled-bg: #f1f5f9;
	--muted-text: #64748b;
	--error-color: #cc0000;
	--danger-color: #b91c1c;
	--danger-hover: #991b1b;
	--danger-text: #ffffff;
	--success-color: #10b981;
	--nav-left-bg: #ff4d4d;
	--nav-right-bg: #2ecc71;
	--switch-off-bg: #cbd5e1;
	--switch-off-border: #cbd5e1;
	--switch-knob-bg: var(--main-bg);
	--menu-outline: #99a1bc4a;
	--menu-active-outline: #cbd5e1;
	--slider-track-color: #cbd5e1;
	--field-hover-bg: rgba(255, 255, 255, 0.05);
	--focus-ring: rgba(6, 182, 212, 0.2);
}

:root[data-theme='neon'] {
	--secondary-bg: #0f172a;
		--shadow-soft: 0 0 6px color-mix(in srgb, var(--accent-color) 60%, transparent);
	--panel-bg: #0a0a0b;
	--panel-border: var(--accent-color);
	--panel-outline: color-mix(in srgb, var(--accent-color) 45%, transparent);
	--panel-shadow: 0 0 10px color-mix(in srgb, var(--accent-color) 70%, transparent);
	--panel-text-shadow: 0 0 6px color-mix(in srgb, var(--accent-color) 70%, transparent);
	--button-shadow: 0 0 8px color-mix(in srgb, var(--accent-color) 70%, transparent);
	--input-bg: #0b0b0d;
	--input-border: var(--accent-color);
	--input-placeholder: #94a3b8;
	--input-disabled-bg: #0f172a;
	--text-color: #e2e8f0;
	--muted-text: #94a3b8;
	--menu-outline: color-mix(in srgb, var(--accent-color) 45%, transparent);
	--menu-active-outline: color-mix(in srgb, var(--accent-color) 65%, transparent);
	--slider-track-color: color-mix(in srgb, var(--accent-color) 35%, #111827);
	--field-hover-bg: rgba(15, 23, 42, 0.6);
}

:root[data-theme='glass'] {
	--secondary-bg: rgba(255, 255, 255, 0.14);
		--shadow-soft: 0 6px 18px rgba(0, 0, 0, 0.2);
	--panel-bg: rgba(255, 255, 255, 0.1);
	--panel-border: rgba(255, 255, 255, 0.25);
	--panel-outline: rgba(255, 255, 255, 0.2);
	--panel-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
	--panel-blur: blur(10px);
	--input-bg: rgba(255, 255, 255, 0.08);
	--input-border: rgba(255, 255, 255, 0.3);
	--input-placeholder: rgba(248, 250, 252, 0.7);
	--text-color: #f8fafc;
	--muted-text: rgba(248, 250, 252, 0.7);
	--menu-outline: rgba(255, 255, 255, 0.2);
	--menu-active-outline: rgba(255, 255, 255, 0.3);
	--slider-track-color: rgba(255, 255, 255, 0.35);
	--field-hover-bg: rgba(255, 255, 255, 0.12);
	--switch-off-bg: rgba(255, 255, 255, 0.2);
	--switch-off-border: rgba(255, 255, 255, 0.3);
	--switch-knob-bg: rgba(255, 255, 255, 0.8);
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
