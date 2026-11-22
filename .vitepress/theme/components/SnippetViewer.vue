<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SnippetRecord } from '../../../data/cpp-snippets.data'
import CopyButton from './CopyButton.vue'

const props = defineProps<{ snippet: SnippetRecord }>()
const preservePlaceholders = ref(false)
const copyCode = computed(() => {
  if (preservePlaceholders.value) return props.snippet.rawCode
  return props.snippet.rawCode
    .replace(/\$\{\d+:([^}]+)\}/g, '$1')
    .replace(/\$\d+/g, '')
})
const rawJson = computed(() => JSON.stringify({
  [props.snippet.key]: {
    prefix: props.snippet.prefix,
    body: props.snippet.body,
    description: props.snippet.description
  }
}, null, 2))
</script>

<template>
  <section class="snippet-viewer" :id="`snippet-${snippet.key}`">
    <header class="snippet-viewer-header">
      <div>
        <strong>{{ snippet.meta.title }}</strong>
        <div><code>{{ snippet.prefix }}</code> · {{ snippet.meta.category }}</div>
      </div>
      <div class="snippet-viewer-actions">
        <CopyButton :text="copyCode" label="复制 C++" />
        <CopyButton :text="rawJson" label="复制 JSON" />
        <a href="/snippets/cpp.json" download="cpp.json"><button type="button">下载 cpp.json</button></a>
        <a href="https://github.com/Pt-ll/ptzyc-docs/blob/main/public/snippets/cpp.json" target="_blank" rel="noreferrer"><button type="button">查看原文件</button></a>
      </div>
    </header>
    <div class="snippet-meta">
      <p>{{ snippet.description }}</p>
      <div class="tag-list"><span v-for="tag in snippet.meta.tags" :key="tag" class="tag">#{{ tag }}</span></div>
      <dl>
        <template v-if="snippet.meta.standard"><dt>标准</dt><dd>{{ snippet.meta.standard }}</dd></template>
        <template v-if="snippet.meta.complexity"><dt>复杂度</dt><dd>{{ snippet.meta.complexity }}</dd></template>
        <template v-if="snippet.meta.dependencies?.headers?.length"><dt>头文件</dt><dd>{{ snippet.meta.dependencies.headers.map((h) => `<${h}>`).join('、') }}</dd></template>
        <template v-if="snippet.meta.dependencies?.types?.length"><dt>类型</dt><dd>{{ snippet.meta.dependencies.types.join('、') }}</dd></template>
        <template v-if="snippet.meta.dependencies?.globals?.length"><dt>全局量</dt><dd>{{ snippet.meta.dependencies.globals.join('、') }}</dd></template>
        <template v-if="snippet.meta.dependencies?.snippets?.length"><dt>前置模板</dt><dd><a v-for="dependency in snippet.meta.dependencies.snippets" :key="dependency" class="dependency-badge" :href="`/snippets/?id=${dependency}`">{{ dependency }}</a></dd></template>
      </dl>
      <label><input v-model="preservePlaceholders" type="checkbox" /> 复制时保留 VS Code 占位符</label>
    </div>
    <div v-html="snippet.highlightedHtml" />
  </section>
</template>
