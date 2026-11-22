# Cloudflare Pages 部署

Cloudflare Pages 项目连接 GitHub 仓库 `Pt-ll/ptzyc-docs`，Production Branch 使用 `main`。

| 设置 | 值 |
| --- | --- |
| Build command | `npm run docs:build` |
| Build output directory | `.vitepress/dist` |
| Root directory | `/` |
| Node.js | 由根目录 `.node-version` 指定 |

首次部署后，在 Custom Domains 中绑定 `docs.ptzyc.cn`。DNS 的 CNAME Target 以 Cloudflare Pages 实际分配的 `*.pages.dev` 域名为准。
