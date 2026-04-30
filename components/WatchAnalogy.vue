<script setup>
defineProps({
  leftLabel: { type: String, default: 'Mécanique' },
  rightLabel: { type: String, default: 'Quartz' },
  leftColor: { type: String, default: '#00d9ff' },
  rightColor: { type: String, default: '#ff8c00' },
  bridge: { type: String, default: '' }, // la traduction code
  bridgeColor: { type: String, default: '#a855f7' },
})
</script>

<template>
  <div class="grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch">

    <!-- Mécanique -->
    <div
      class="rounded-2xl p-5 border backdrop-blur-sm relative"
      :style="{
        backgroundColor: `${leftColor}10`,
        borderColor: `${leftColor}50`,
      }"
    >
      <div class="flex items-center gap-2 mb-3">
        <div class="i-tabler-clock-cog text-2xl" :style="{ color: leftColor }" />
        <div
          class="text-xs font-bold tracking-widest uppercase font-orbitron"
          :style="{ color: leftColor }"
        >
          {{ leftLabel }}
        </div>
      </div>
      <div class="text-base">
        <slot name="left" />
      </div>
    </div>

    <!-- Bridge central -->
    <div class="flex flex-col items-center justify-center px-2">
      <div
        class="h-full w-px"
        :style="{ background: bridgeColor, boxShadow: `0 0 8px ${bridgeColor}` }"
      />
      <div
        v-if="bridge"
        class="absolute py-1 px-3 rounded-full bg-black border text-[10px] font-mono whitespace-nowrap"
        :style="{ borderColor: bridgeColor, color: bridgeColor }"
      >
        {{ bridge }}
      </div>
    </div>

    <!-- Quartz -->
    <div
      class="rounded-2xl p-5 border backdrop-blur-sm relative"
      :style="{
        backgroundColor: `${rightColor}10`,
        borderColor: `${rightColor}50`,
      }"
    >
      <div class="flex items-center gap-2 mb-3">
        <div class="i-tabler-cpu text-2xl" :style="{ color: rightColor }" />
        <div
          class="text-xs font-bold tracking-widest uppercase font-orbitron"
          :style="{ color: rightColor }"
        >
          {{ rightLabel }}
        </div>
      </div>
      <div class="text-base">
        <slot name="right" />
      </div>
    </div>

  </div>

  <div v-if="$slots.code" class="mt-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
    <div class="text-[10px] tracking-widest uppercase text-gray-500 mb-1 font-orbitron">→ Dans notre métier</div>
    <div class="text-lg">
      <slot name="code" />
    </div>
  </div>
</template>
