<script setup>
defineProps({
  act: { type: String, default: 'I' }, // 'I', 'II', 'III'
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  color: { type: String, default: '#00d9ff' },
})
</script>

<template>
  <div class="relative w-full h-full">
    <TronGrid :color="color" :opacity="0.22" intensity="strong" />
    <LightStreak :color="color" :count="6" />

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center">

      <div
        class="text-xs font-bold tracking-[0.4em] uppercase mb-6 font-orbitron"
        :style="{ color: color }"
      >
        Acte {{ act }}
      </div>

      <h1
        class="font-orbitron font-black text-7xl tracking-wider glow-pulse"
        :style="{ '--glow-color': color, color: color }"
      >
        {{ title }}
      </h1>

      <div
        v-if="subtitle"
        class="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed"
      >
        {{ subtitle }}
      </div>

      <div class="mt-12 flex items-center gap-4">
        <div class="h-px w-24" :style="{ background: color, boxShadow: `0 0 10px ${color}` }" />
        <div class="w-2 h-2 rounded-full" :style="{ background: color, boxShadow: `0 0 15px ${color}` }" />
        <div class="h-px w-24" :style="{ background: color, boxShadow: `0 0 10px ${color}` }" />
      </div>

    </div>
  </div>
</template>
