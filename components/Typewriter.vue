<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  speed: { type: Number, default: 30 },    // ms par caractère
  delay: { type: Number, default: 150 },    // pause avant de commencer
  thinking: { type: Number, default: 0 },   // durée des "3 points qui pulsent" avant la frappe
  jitter: { type: Boolean, default: false }, // rythme irrégulier (frappe humaine)
})

const shown = ref('')
const typing = ref(true)
const isThinking = ref(props.thinking > 0)
let timers = []

onMounted(() => {
  let i = 0
  const step = () => {
    shown.value = props.text.slice(0, i)
    if (i < props.text.length) {
      i++
      const d = props.jitter ? props.speed * (0.45 + Math.random() * 1.1) : props.speed
      timers.push(setTimeout(step, d))
    } else {
      typing.value = false
    }
  }
  const startTyping = () => {
    isThinking.value = false
    timers.push(setTimeout(step, props.delay))
  }
  if (props.thinking > 0) {
    timers.push(setTimeout(startTyping, props.thinking))
  } else {
    startTyping()
  }
})

onUnmounted(() => timers.forEach(clearTimeout))
</script>

<template>
  <span v-if="isThinking" class="tw-dots" aria-label="…">
    <span></span><span></span><span></span>
  </span>
  <span v-else class="whitespace-pre-wrap">{{ shown }}<span v-show="typing" class="tw-caret">▋</span></span>
</template>
