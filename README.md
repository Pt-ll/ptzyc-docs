# Pt.ll Docs

Pt.ll Docs 是一个基于 VitePress 的个人代码片段与项目技术文档站。

## 本地开发

```bash
npm ci
npm run docs:dev
```

生产构建：

```bash
npm run docs:build
npm run docs:preview
```

`public/snippets/cpp.json` 保存完整的 VS Code Snippet 原始配置。数据加载器会保留每个模板的 `prefix` 与 `body` 原样，并在构建期合并展示元数据与语法高亮结果。
