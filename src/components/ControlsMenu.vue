<template>
	<div class="ito-controls-menu">
		<Transition name="ito-menu-transition" mode="out-in">
			<div v-show="showControls" class="ito-controls-menu-content">
				<div class="ito-controls-menu-header">
					<button
						class="ito-visibility-button"
						@click="toggleOverlayVisible"
						:title="overlayVisible ? 'Hide overlay' : 'Show overlay'"
					>
						<svg
							v-if="overlayVisible"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ito-visibility-icon"
						>
							<path
								d="M1.5 12C3.9 7.2 7.5 5 12 5C16.5 5 20.1 7.2 22.5 12C20.1 16.8 16.5 19 12 19C7.5 19 3.9 16.8 1.5 12Z"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6" />
						</svg>
						<svg
							v-else
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ito-visibility-icon"
						>
							<path
								d="M3 12C5.4 7.2 9 5 12 5C15 5 18.6 7.2 21 12"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 12C5.4 16.8 9 19 12 19C15 19 18.6 16.8 21 12"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4 4L20 20"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
							/>
						</svg>
					</button>
					<SettingsMenu />
				</div>
				<slot />

				<div class="ito-controls-menu-content-footer">
					<slot name="footer" />
				</div>
			</div>
		</Transition>

		<div
			:class="['ito-controls-menu-activator', { 'ito-controls-menu-activator--active': showControls }]"
			tabindex="0"
			@click="toggleShowControls"
		></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useControls } from '../composables/useControls'
import SettingsMenu from './SettingsMenu.vue'

const { showControls, toggleShowControls, overlayVisible, toggleOverlayVisible } = useControls()

function isTypingTarget(target: EventTarget | null): boolean {
	if (!(target instanceof HTMLElement)) return false
	const tag = target.tagName.toLowerCase()
	if (tag === 'input' || tag === 'textarea' || tag === 'select') return true
	return target.isContentEditable
}

function onGlobalKeydown(event: KeyboardEvent) {
	if (!event.altKey || event.key.toLowerCase() !== 'v') return
	if (event.isComposing || isTypingTarget(event.target)) return
	if (event.repeat) return
	if (event.ctrlKey || event.metaKey || event.shiftKey) return

	event.preventDefault()
	toggleOverlayVisible()
}

onMounted(() => {
	window.addEventListener('keydown', onGlobalKeydown)
})

onUnmounted(() => {
	window.removeEventListener('keydown', onGlobalKeydown)
})
</script>

<style scoped>
.ito-controls-menu {
	display: flex;
	flex-direction: column;
	pointer-events: auto;
	position: absolute;
	bottom: 32px;
	right: 32px;
}

.ito-controls-menu-activator {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 48px;
	border-radius: 24px;
	cursor: pointer;
	background-color: var(--button-bg);
	color: var(--button-text);
	outline: var(--menu-outline) solid 4px;
	background-image: url('../assets/icon.png');
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center center;
	transition:
		background-color 150ms,
		outline 150ms;
}

.ito-controls-menu-activator:hover {
	background-color: var(--button-hover-bg);
}

.ito-controls-menu-activator--active {
	background-color: var(--panel-bg);
	outline: var(--menu-active-outline) solid 4px;
}

.ito-controls-menu-activator--active:hover {
	background-color: var(--secondary-bg);
}

.ito-controls-menu-activator--active:focus {
	background-color: var(--panel-bg);
}

.ito-controls-menu-content {
	position: absolute;
	right: -16px;
	bottom: -16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 248px;
	transform-origin: calc(100% - 40px) calc(100% - 40px);
	padding: 16px 16px 80px;
	border-radius: 24px;
	background-color: var(--panel-bg);
	outline: var(--panel-outline) solid 4px;
	box-shadow: var(--panel-shadow);
	backdrop-filter: var(--panel-blur);
}

.ito-controls-menu-header {
	display: flex;
	justify-content: space-between;
	padding: 0;
	margin: 0 0 8px 0;
	align-items: center;
}

.ito-visibility-button {
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

.ito-visibility-button:hover {
	background-color: var(--button-hover-bg);
	color: var(--button-text);
	transform: scale(1.1);
}

.ito-visibility-button:active {
	transform: scale(0.95);
}

.ito-visibility-icon {
	width: 100%;
	height: 100%;
}

.ito-controls-menu-content-footer {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 56px;
	bottom: 12px;
	left: 16px;
	right: 80px;
}

.ito-menu-transition-enter-active,
.ito-menu-transition-leave-active {
	transition:
		transform 200ms,
		opacity 150ms,
		background-color 150ms;
}

.ito-menu-transition-enter-from,
.ito-menu-transition-leave-to {
	opacity: 0;
	transform: scale(0, 0);
	background-color: var(--panel-bg);
}
</style>
