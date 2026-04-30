<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useNav } from '@slidev/client'

const { total, currentSlideNo } = useNav()

// ── Timer global ──
const elapsedSec = ref(0)
let timer: number | undefined

const search = new URLSearchParams(window.location.search)
const totalMinutesParam = Number(search.get('time') ?? '40') || 40
const totalSeconds = totalMinutesParam > 0 ? totalMinutesParam * 60 : 0

onMounted(() => {
  const start = Date.now()
  timer = window.setInterval(() => {
    elapsedSec.value = Math.floor((Date.now() - start) / 1000)
  }, 1000)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})

const slideProgress = computed(() =>
  total.value > 0 ? currentSlideNo.value / total.value : 0,
)

const timeProgress = computed(() =>
  totalSeconds > 0 ? Math.min(elapsedSec.value / totalSeconds, 1) : 0,
)

const ahead = computed(() => slideProgress.value - timeProgress.value)

const statusText = computed(() => {
  if (!totalSeconds) return 'Sans objectif de temps'
  const diffPercent = Math.round(Math.abs(ahead.value) * 100)
  if (ahead.value > 0.05) return `En avance (+${diffPercent}%)`
  if (ahead.value < -0.05) return `En retard (${diffPercent}%)`
  return 'Dans le rythme'
})

// ── Phases du talk : 3 actes + intro/final ──
const phases = [
  { label: 'Intro',          start: 1,  end: 4,  color: '#9ca3af' },
  { label: 'Construction',   start: 5,  end: 10, color: '#00d9ff' },
  { label: 'Déconstruction', start: 11, end: 21, color: '#ff8c00' },
  { label: 'Reconstruction', start: 22, end: 29, color: '#ff2e9a' },
  { label: 'Final',          start: 30, end: 32, color: '#a855f7' },
]

const currentPhaseIndex = computed(() => {
  const s = currentSlideNo.value
  const idx = phases.findIndex(p => s >= p.start && s <= p.end)
  return idx >= 0 ? idx : 0
})

const currentPhaseColor = computed(() => phases[currentPhaseIndex.value]?.color ?? '#9ca3af')
</script>

<template>
  <!-- ── Widget haut-droite : timer + progression ── -->
  <div
    class="fixed right-4 top-3 z-50 flex items-center gap-3 px-3 py-1.5 rounded-full pointer-events-none"
    style="background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.06);"
  >
    <!-- Temps écoulé -->
    <div class="flex items-center gap-1.5 text-xs text-gray-400">
      <div class="i-pixelarticons-clock w-3 h-3" :style="{ color: currentPhaseColor }" />
      <span class="font-mono tabular-nums">
        {{ Math.floor(elapsedSec / 60) }}:{{ String(elapsedSec % 60).padStart(2, '0') }}
      </span>
      <span v-if="totalSeconds" class="text-gray-600 text-[10px]">/ {{ totalMinutesParam }}min</span>
    </div>

    <!-- Séparateur -->
    <div class="w-px h-3 bg-white/10"></div>

    <!-- Barres de progression slides vs temps -->
    <div class="hidden sm:flex items-center gap-2">
      <div class="flex items-center gap-1">
        <div class="i-pixelarticons-play w-2.5 h-2.5" :style="{ color: currentPhaseColor }" />
        <div class="w-14 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500"
            :style="{ width: (slideProgress * 100).toFixed(0) + '%', backgroundColor: currentPhaseColor }"
          />
        </div>
      </div>
      <div class="flex items-center gap-1">
        <div class="i-pixelarticons-hourglass w-2.5 h-2.5 text-gray-500" />
        <div class="w-14 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            class="h-full rounded-full bg-gray-500 transition-all duration-500"
            :style="{ width: (timeProgress * 100).toFixed(0) + '%' }"
          />
        </div>
      </div>
    </div>

    <!-- Message d'état -->
    <span class="hidden md:inline text-[10px] text-gray-500">
      {{ statusText }}
    </span>
  </div>

  <!-- ── Barre de progression par phases en bas ── -->
  <div class="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">

    <!-- Label de phase + numéro de slide -->
    <div class="flex items-center justify-between px-4 mb-1">
      <div
        class="text-[10px] font-bold tracking-wider uppercase font-orbitron"
        :style="{ color: currentPhaseColor }"
      >
        {{ phases[currentPhaseIndex]?.label }}
      </div>
      <div class="flex items-center gap-1 text-[11px]">
        <span class="font-bold font-mono" :style="{ color: currentPhaseColor }">
          {{ currentSlideNo }}
        </span>
        <span class="text-gray-600">/</span>
        <span class="text-gray-600">{{ total }}</span>
      </div>
    </div>

    <!-- Barre de phases -->
    <div class="flex h-1">
      <div
        v-for="(phase, i) in phases"
        :key="i"
        class="flex-1 transition-all duration-500"
        :style="{
          backgroundColor: i <= currentPhaseIndex ? phase.color : 'rgba(255,255,255,0.04)',
          opacity: i <= currentPhaseIndex ? 1 : 0.3,
        }"
      />
    </div>

  </div>
</template>
