<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ text: string; label?: string }>()
const copied = ref(false)
const failed = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    failed.value = false
  } catch {
    failed.value = true
  }
  window.setTimeout(() => { copied.value = false; failed.value = false }, 1800)
}
</script>

<template>
  <button type="button" @click="copy">
    {{ copied ? '已复制' : failed ? '复制失败' : (label || '复制') }}
  </button>
</template>
