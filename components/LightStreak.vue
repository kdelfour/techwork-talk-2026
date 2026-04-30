<script setup>
defineProps({
  color: { type: String, default: '#00d9ff' },
  count: { type: Number, default: 5 },
})
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      v-for="n in count"
      :key="n"
      class="light-streak"
      :style="{
        '--streak-color': color,
        top: `${(n / (count + 1)) * 100}%`,
        width: `${30 + (n * 20) % 60}vw`,
        animationDuration: `${2.5 + (n * 0.7) % 2}s`,
        animationDelay: `${(n * 0.6) % 3}s`,
      }"
    />
  </div>
</template>
