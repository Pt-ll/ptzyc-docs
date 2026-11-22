<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { data as snippetData } from '../../../data/cpp-snippets.data'
import type { SnippetRecord } from '../../../data/cpp-snippets.data'
import SnippetCard from './SnippetCard.vue'
import SnippetViewer from './SnippetViewer.vue'

const props = withDefaults(defineProps<{ initialCategory?: string }>(), { initialCategory: '' })
const query = ref('')
const category = ref(props.initialCategory)
const selectedId = ref('')
const categories = computed(() => Array.from(new Set(snippetData.map((item) => item.meta.category))))
const selected = computed(() => snippetData.find((item) => item.key === selectedId.value))
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return snippetData.filter((item) => {
    const categoryMatch = !category.value || item.meta.category === category.value
    const text = [item.key, item.prefix, item.description, item.meta.title, ...item.meta.tags, item.rawCode].join(' ').toLowerCase()
    return categoryMatch && (!q || text.includes(q))
  })
})

function syncUrl() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()
  if (category.value) params.set('category', category.value)
  if (query.value) params.set('q', query.value)
  if (selectedId.value) params.set('id', selectedId.value)
  const next = `${window.location.pathname}${params.toString() ? `?${params}` : ''}`
  window.history.replaceState({}, '', next)
}
function reset() { query.value = ''; category.value = ''; selectedId.value = ''; syncUrl() }
function select(item: SnippetRecord) { selectedId.value = item.key; syncUrl() }
function onKeydown(event: KeyboardEvent) {
  if (event.key === '/' && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
    event.preventDefault(); document.querySelector<HTMLInputElement>('#snippet-search')?.focus()
  }
}
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  category.value = params.get('category') || props.initialCategory
  query.value = params.get('q') || ''
  selectedId.value = params.get('id') || ''
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', onKeydown)
})
watch([query, category, selectedId], syncUrl)
</script>

<template>
  <div class="snippet-explorer">
    <div class="snippet-toolbar">
      <input id="snippet-search" v-model="query" type="search" placeholder="搜索名称、Prefix、标签或代码…（按 / 聚焦）" aria-label="搜索代码片段" />
      <select v-model="category" aria-label="按分类筛选">
        <option value="">全部分类</option>
        <option v-for="item in categories" :key="item" :value="item">{{ item }}</option>
      </select>
      <a href="/snippets/cpp.json" download="cpp.json"><button type="button">下载 cpp.json</button></a>
    </div>
    <div class="snippet-stats">共 {{ filtered.length }} 个模板（全部 {{ snippetData.length }} 个）</div>
    <div class="snippet-category-links">
      <a v-for="item in categories" :key="item" :href="`/snippets/cpp/${item}`">{{ item }}（{{ snippetData.filter((s) => s.meta.category === item).length }}）</a>
    </div>
    <div v-if="filtered.length" class="snippet-grid">
      <SnippetCard v-for="item in filtered" :key="item.key" :snippet="item" :selected="item.key === selectedId" @select="select" />
    </div>
    <div v-else class="empty-state">没有匹配的模板。<button type="button" @click="reset">重置筛选</button></div>
    <SnippetViewer v-if="selected" :snippet="selected" />
  </div>
</template>
