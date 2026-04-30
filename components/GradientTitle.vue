<script setup>
defineProps({
  size: { type: String, default: '5xl' },
  variant: { type: String, default: 'tron' }, // 'tron' (cyan→orange→magenta), 'cyan', 'orange', 'magenta'
})
</script>

<template>
  <h1 :class="[`text-${size}`, 'font-black', 'font-orbitron', 'tracking-wider', 'text-center', `gradient-${variant}`]">
    <slot />
  </h1>
</template>

<style scoped>
.gradient-tron {
  background: linear-gradient(
    270deg,
    #00d9ff,
    #ff8c00,
    #ff2e9a,
    #a855f7,
    #00d9ff
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 6s ease infinite;
}

.gradient-cyan {
  background: linear-gradient(135deg, #00d9ff, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-orange {
  background: linear-gradient(135deg, #ff8c00, #ff2e9a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-magenta {
  background: linear-gradient(135deg, #ff2e9a, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
