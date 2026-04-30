<script setup>
defineProps({
  color: { type: String, default: 'cyan' },
  glow: { type: Boolean, default: false }
})

const colors = {
  cyan:    { bg: 'rgba(0,217,255,0.08)',  border: 'rgba(0,217,255,0.35)',  shadow: '0 0 30px rgba(0,217,255,0.18)' },
  orange:  { bg: 'rgba(255,140,0,0.08)',  border: 'rgba(255,140,0,0.35)',  shadow: '0 0 30px rgba(255,140,0,0.18)' },
  magenta: { bg: 'rgba(255,46,154,0.08)', border: 'rgba(255,46,154,0.35)', shadow: '0 0 30px rgba(255,46,154,0.18)' },
  violet:  { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.35)', shadow: '0 0 30px rgba(168,85,247,0.18)' },
  emerald: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.3)',  shadow: '0 0 30px rgba(16,185,129,0.15)' },
  red:     { bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.3)',   shadow: '0 0 30px rgba(239,68,68,0.15)' },
  amber:   { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.3)',  shadow: '0 0 30px rgba(245,158,11,0.15)' },
  gray:    { bg: 'rgba(156,163,175,0.06)', border: 'rgba(156,163,175,0.25)', shadow: '0 0 30px rgba(156,163,175,0.1)' },
}
</script>

<template>
  <div
    class="rounded-2xl p-4 border backdrop-blur-sm transition-all duration-300"
    :style="{
      backgroundColor: colors[color]?.bg,
      borderColor: colors[color]?.border,
      boxShadow: glow ? colors[color]?.shadow : 'none'
    }"
  >
    <slot />
  </div>
</template>
