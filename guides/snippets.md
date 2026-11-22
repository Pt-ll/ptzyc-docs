# 使用与维护代码片段

代码原始数据位于 `public/snippets/cpp.json`，展示元数据位于 `data/snippets-meta.ts`。新增模板时保留 VS Code 原始 `prefix` 和 `body`，并补充对应元数据。

数据加载器在构建期读取 JSON，并使用 Shiki 生成亮色和暗色主题的 HTML。浏览器端只负责筛选、复制和 URL 状态同步。

修改后运行：

```bash
npm run docs:build
```
