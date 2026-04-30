<script setup>
defineProps({
  name: { type: String, required: true },
  humanLimit: { type: String, required: true },
  color: { type: String, default: '#ff8c00' },
})
</script>

<template>
  <div
    class="rounded-2xl p-4 border backdrop-blur-sm relative overflow-hidden"
    :style="{
      backgroundColor: `${color}0a`,
      borderColor: `${color}40`,
    }"
  >
    <!-- Ligne décorative en fond -->
    <div
      class="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
      :style="{ background: color }"
    />

    <!-- Nom du standard -->
    <div class="relative z-10">
      <div class="text-[10px] tracking-widest uppercase mb-1 font-orbitron" :style="{ color: color }">
        Standard
      </div>
      <div class="font-mono font-bold text-2xl mb-3" :style="{ color: '#fff' }">
        {{ name }}
      </div>

      <!-- Flèche descendante -->
      <div class="flex items-center gap-2 mb-2">
        <div class="i-tabler-arrow-down text-base" :style="{ color: color }" />
        <span class="text-[10px] tracking-widest uppercase text-gray-500 font-orbitron">Compense</span>
      </div>

      <!-- Limite humaine -->
      <div class="text-base text-gray-300 leading-relaxed">
        {{ humanLimit }}
      </div>
    </div>
  </div>
</template>
