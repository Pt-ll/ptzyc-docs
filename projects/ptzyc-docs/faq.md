# FAQ

## 如何新增一个代码片段？

在 `public/snippets/cpp.json` 中添加原生 VS Code Snippet 对象，并在 `data/snippets-meta.ts` 中添加同名元数据，最后运行 `npm run docs:build`。

## 为什么不直接在 Markdown 中复制代码？

原始代码只有一个数据源，避免页面副本与 `cpp.json` 逐渐不一致。

## 构建时出现元数据警告怎么办？

为警告中列出的 Key 补充 `snippetsMeta` 配置。未配置的模板仍会降级为 `uncategorized`，但应在正式发布前补全。
