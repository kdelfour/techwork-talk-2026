<script setup>
defineProps({
  color: { type: String, default: '#ff2e9a' },
  size: { type: String, default: '6xl' }, // 5xl, 6xl, 7xl
  align: { type: String, default: 'center' },
})
</script>

<template>
  <div class="relative w-full h-full">
    <TronGrid :color="color" :opacity="0.08" />

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full px-12"
      :class="align === 'center' ? 'text-center' : 'text-left'"
    >
      <div
        class="punchline-text glow-pulse leading-tight max-w-5xl"
        :class="`text-${size}`"
        :style="{ '--glow-color': color, color: '#ffffff' }"
      >
        <slot />
      </div>

      <div class="mt-12">
        <div
          class="h-1 w-32 rounded-full"
          :style="{ background: color, boxShadow: `0 0 20px ${color}` }"
        />
      </div>
    </div>
  </div>
</template>
