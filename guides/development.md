# 本地开发

环境建议使用 Node.js 20 LTS、npm 和 Git。

```bash
git clone https://github.com/Pt-ll/ptzyc-docs.git
cd ptzyc-docs
npm ci
npm run docs:dev
```

开发服务器默认地址为 `http://localhost:5173`。生产构建使用 `npm run docs:build`，输出目录为 `.vitepress/dist`。
