<template>
	<ControlField>
		<div class="control-group">
			<div class="label-row">
				<span class="label-text">{{ label }}</span>
				<input
					type="number"
					v-model.number="model"
					@focus="onInputFocus"
					@blur="clampValue"
					class="stealth-input"
					:step="step"
					:min="min"
					:max="max"
				/>
			</div>
			<input
				type="range"
				v-model.number="model"
				:min="min"
				:max="max"
				:step="step"
				class="custom-slider"
			/>
		</div>
	</ControlField>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ControlField from './ControlField.vue'

const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void
}>()

const props = defineProps<{
	label: string
	modelValue: number
	min: number
	max: number
	step?: number
}>()

const model = computed({
	get: () => props.modelValue,
	set: (value: number) => emit('update:modelValue', value),
})

const step = computed(() => props.step ?? 0.01)

const clampValue = () => {
	const value = Number(model.value)
	if (Number.isNaN(value)) return
	const clamped = Math.min(Math.max(value, props.min), props.max)
	if (clamped !== value) {
		model.value = clamped
	}
}

const onInputFocus = (event: FocusEvent) => {
	const target = event.target as HTMLInputElement | null
	if (target) {
		target.select()
	}
}
</script>

<style scoped>

.control-group {
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.label-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
}

.label-text {
	font-size: 0.8rem;
	font-weight: 500;
	color: var(--text-color);
	opacity: 0.9;
}

.stealth-input {
	background: transparent;
	border: none;
	border-bottom: 1px solid transparent;
	color: var(--text-color);
	text-align: right;
	width: 56px;
	font-family: inherit;
	font-size: 0.8rem;
	outline: none;
	padding: 0 2px;
	transition: all 0.2s ease;
}

.stealth-input:hover,
.stealth-input:focus {
	border-bottom: 1px solid var(--accent-color);
	background: rgba(255, 255, 255, 0.05);
}

.stealth-input::-webkit-outer-spin-button,
.stealth-input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.stealth-input[type='number'] {
	-moz-appearance: textfield;
}

.custom-slider {
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
}

.custom-slider {
	font-size: 1.5rem;
	width: 100%;
}

.custom-slider {
	color: var(--accent-color);
	--thumb-height: 0.8em;
	--track-height: 0.125em;
	--track-color: #cbd5e1;
	--brightness-hover: 120%;
	--brightness-down: 80%;
	--clip-edges: 0.125em;
}

.custom-slider {
	position: relative;
	background: #fff0;
	overflow: hidden;
}

.custom-slider:active {
	cursor: grabbing;
}

.custom-slider,
.custom-slider::-webkit-slider-runnable-track,
.custom-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	transition: all ease 100ms;
	height: var(--thumb-height);
}

.custom-slider::-webkit-slider-runnable-track,
.custom-slider::-webkit-slider-thumb {
	position: relative;
}

.custom-slider::-webkit-slider-thumb {
	--thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
	--clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
	--clip-bottom: calc(var(--thumb-height) - var(--clip-top));
	--clip-further: calc(100% + 1px);
	--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;

	width: var(--thumb-width, var(--thumb-height));
	background: linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--track-height) + 1px);
	background-color: currentColor;
	box-shadow: var(--box-fill);
	border-radius: var(--thumb-width, var(--thumb-height));

	filter: brightness(100%);
	clip-path: polygon(
		100% -1px,
		var(--clip-edges) -1px,
		0 var(--clip-top),
		-100vmax var(--clip-top),
		-100vmax var(--clip-bottom),
		0 var(--clip-bottom),
		var(--clip-edges) 100%,
		var(--clip-further) var(--clip-further)
	);
}

.custom-slider:hover::-webkit-slider-thumb {
	filter: brightness(var(--brightness-hover));
	cursor: grab;
}

.custom-slider:active::-webkit-slider-thumb {
	filter: brightness(var(--brightness-down));
	cursor: grabbing;
}

.custom-slider::-webkit-slider-runnable-track {
	background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px);
}
</style>
