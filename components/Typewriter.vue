<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  speed: { type: Number, default: 30 },   // ms par caractère
  delay: { type: Number, default: 150 },   // pause avant de commencer
  jitter: { type: Boolean, default: false }, // rythme irrégulier (frappe humaine)
})

const shown = ref('')
const typing = ref(true)
let timer = null

onMounted(() => {
  let i = 0
  const step = () => {
    shown.value = props.text.slice(0, i)
    if (i < props.text.length) {
      i++
      const d = props.jitter ? props.speed * (0.45 + Math.random() * 1.1) : props.speed
      timer = setTimeout(step, d)
    } else {
      typing.value = false
    }
  }
  timer = setTimeout(step, props.delay)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <span class="whitespace-pre-wrap">{{ shown }}<span v-show="typing" class="tw-caret">▋</span></span>
</template>
