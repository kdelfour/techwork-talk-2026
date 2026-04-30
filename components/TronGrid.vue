<script setup>
defineProps({
  color: { type: String, default: '#00d9ff' },
  opacity: { type: Number, default: 0.12 },
  intensity: { type: String, default: 'normal' }, // 'subtle', 'normal', 'strong'
})
</script>

<template>
  <div
    class="tron-grid"
    :style="{
      '--grid-color': color,
      '--grid-opacity': intensity === 'strong' ? 0.25 : intensity === 'subtle' ? 0.06 : opacity,
    }"
  />
</template>
