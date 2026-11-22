# 架构

```text
public/snippets/cpp.json
        │
        ▼
data/cpp-snippets.data.ts  ── Shiki 构建期高亮、元数据合并
        │
        ▼
SnippetExplorer / SnippetViewer  ── 搜索、筛选、复制、URL 状态
        │
        ▼
VitePress 静态页面 ── .vitepress/dist
```

`.vitepress/theme` 注册全局 Vue 组件；Markdown 页面负责内容和路由；`public` 中的文件在构建后按原路径发布。
