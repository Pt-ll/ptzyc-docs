<script setup lang="ts">
import type { SnippetRecord } from '../../../data/cpp-snippets.data'

defineProps<{ snippet: SnippetRecord; selected?: boolean }>()
defineEmits<{ select: [snippet: SnippetRecord] }>()
</script>

<template>
  <article class="snippet-card" :class="{ selected }">
    <h3><button class="vp-link" type="button" @click="$emit('select', snippet)">{{ snippet.meta.title }}</button></h3>
    <p><code>{{ snippet.prefix }}</code> · {{ snippet.meta.category }}</p>
    <p>{{ snippet.description }}</p>
    <div class="tag-list">
      <span v-for="tag in snippet.meta.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
    <div class="snippet-card-code" aria-label="代码预览" v-html="snippet.highlightedHtml" />
    <button type="button" @click="$emit('select', snippet)">查看完整代码与操作</button>
  </article>
</template>
