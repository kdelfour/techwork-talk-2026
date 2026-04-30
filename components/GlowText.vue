<script setup>
defineProps({
  color: { type: String, default: '#00d9ff' },
  font: { type: String, default: 'inherit' }, // 'inherit', 'orbitron'
})
</script>

<template>
  <span
    class="glow-pulse font-bold"
    :class="{ 'font-orbitron': font === 'orbitron' }"
    :style="{ '--glow-color': color, color: color }"
  >
    <slot />
  </span>
</template>
