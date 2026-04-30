<script setup>
defineProps({
  color: { type: String, default: '#00d9ff' },
  thickness: { type: Number, default: 1 },
  width: { type: String, default: '100%' },
})
</script>

<template>
  <div
    class="rounded-full"
    :style="{
      height: `${thickness}px`,
      width: width,
      background: color,
      boxShadow: `0 0 12px ${color}, 0 0 4px ${color}`,
    }"
  />
</template>
