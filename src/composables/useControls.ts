import { ref } from 'vue'

const showControls = ref(false)
const isAttached = ref(false)
const overlayVisible = ref(true)

const opacity = ref(0.7)
const scale = ref(1)
const rotation = ref(0)

function toggleShowControls() {
	showControls.value = !showControls.value
}

function toggleOverlayVisible() {
	overlayVisible.value = !overlayVisible.value
}

function resetControls() {
	opacity.value = 0.7
	scale.value = 1
	rotation.value = 0
}

export function useControls() {
	return {
		opacity,
		scale,
		rotation,
		isAttached,
		showControls,
		overlayVisible,
		resetControls,
		toggleShowControls,
		toggleOverlayVisible,
	}
}
