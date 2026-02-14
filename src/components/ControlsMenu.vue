<template>
	<div class="ito-controls-menu">
		<Transition name="ito-menu-transition" mode="out-in">
			<div v-show="showControls" class="ito-controls-menu-content">
				<div class="ito-controls-menu-header">
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
import { useControls } from '../composables/useControls'
import SettingsMenu from './SettingsMenu.vue'

const { showControls, toggleShowControls } = useControls()
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
	background-color: var(--accent-color);
	color: white;
	outline: #99a1bc4a solid 4px;
	background-image: url('../assets/icon.png');
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center center;
	transition:
		background-color 150ms,
		outline 150ms;
}

.ito-controls-menu-activator:hover {
	background-color: color-mix(in srgb, var(--accent-color) 80%, black);
}

.ito-controls-menu-activator--active {
	background-color: var(--main-bg);
	outline: #cbd5e1 solid 4px;
}

.ito-controls-menu-activator--active:hover {
	background-color: var(--secondary-bg);
}

.ito-controls-menu-activator--active:focus {
	background-color: var(--main-bg);
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
	background-color: var(--main-bg);
	outline: #99a1bc4a solid 4px;
}

.ito-controls-menu-header {
	display: flex;
	justify-content: flex-end;
	padding: 0;
	margin: 0 0 8px 0;
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
	background-color: var(--main-bg);
}
</style>
