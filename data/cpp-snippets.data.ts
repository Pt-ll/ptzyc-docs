import fs from 'node:fs'
import path from 'node:path'
import { createHighlighter } from 'shiki'
import { defineLoader } from 'vitepress'
import { snippetsMeta, type SnippetCategory, type SnippetMeta } from './snippets-meta'

export interface SnippetRecord {
  key: string
  prefix: string
  body: string[]
  rawCode: string
  description: string
  highlightedHtml: string
  meta: SnippetMeta
}

const fallbackMeta = (key: string, description = ''): SnippetMeta => ({
  title: key,
  category: 'uncategorized' as SnippetCategory,
  description: description || '尚未配置说明。',
  tags: []
})

export default defineLoader({
  watch: ['public/snippets/cpp.json'],
  async load(): Promise<SnippetRecord[]> {
    const file = path.resolve(process.cwd(), 'public/snippets/cpp.json')
    const source = fs.readFileSync(file, 'utf8')
    const json = JSON.parse(source) as Record<string, { prefix?: string; body?: string[]; description?: string }>
    const highlighter = await createHighlighter({ themes: ['github-light', 'github-dark'], langs: ['cpp'] })
    const result: SnippetRecord[] = []
    for (const [key, entry] of Object.entries(json)) {
      const body = Array.isArray(entry.body) ? entry.body : []
      const rawCode = body.join('\n')
      const meta = snippetsMeta[key] ?? fallbackMeta(key, entry.description)
      if (!snippetsMeta[key]) console.warn(`[WARN] Missing snippet metadata: ${key}`)
      result.push({
        key,
        prefix: entry.prefix ?? key,
        body,
        rawCode,
        description: entry.description ?? meta.description,
        highlightedHtml: highlighter.codeToHtml(rawCode, { lang: 'cpp', themes: { light: 'github-light', dark: 'github-dark' } }),
        meta
      })
    }
    highlighter.dispose()
    return result
  }
})
