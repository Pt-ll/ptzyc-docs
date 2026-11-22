import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Pt.ll Docs',
  description: 'Personal Code Snippets & Project Documentation',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '代码片段', link: '/snippets/' },
      { text: '项目文档', link: '/projects/' },
      { text: '使用指南', link: '/guides/' },
      { text: '关于', link: '/about/' },
      { text: 'Blog', link: 'https://blog.ptzyc.cn' }
    ],
    sidebar: {
      '/snippets/': [
        {
          text: '代码片段',
          items: [
            { text: '总览', link: '/snippets/' },
            { text: 'C++ / Base', link: '/snippets/cpp/base' },
            { text: 'C++ / Graph', link: '/snippets/cpp/graph' },
            { text: 'C++ / Math', link: '/snippets/cpp/math' },
            { text: 'C++ / Data Structures', link: '/snippets/cpp/data-structures' }
          ]
        },
        {
          text: 'VS Code',
          items: [{ text: '安装代码片段', link: '/snippets/vscode/installation' }]
        }
      ],
      '/projects/': [
        { text: '项目文档', items: [{ text: '总览', link: '/projects/' }] },
        {
          text: 'Pt.ll Docs',
          items: [
            { text: '项目介绍', link: '/projects/ptzyc-docs/' },
            { text: '安装', link: '/projects/ptzyc-docs/installation' },
            { text: '快速开始', link: '/projects/ptzyc-docs/quick-start' },
            { text: '配置', link: '/projects/ptzyc-docs/configuration' },
            { text: '架构', link: '/projects/ptzyc-docs/architecture' },
            { text: 'FAQ', link: '/projects/ptzyc-docs/faq' },
            { text: 'Changelog', link: '/projects/ptzyc-docs/changelog' }
          ]
        },
        {
          text: 'Verdict Judge',
          items: [
            { text: '项目介绍', link: '/projects/verdict-judge/' },
            { text: '安装', link: '/projects/verdict-judge/installation' },
            { text: '快速开始', link: '/projects/verdict-judge/quick-start' },
            { text: '配置', link: '/projects/verdict-judge/configuration' },
            { text: '完整使用说明', link: '/projects/verdict-judge/usage' },
            { text: 'FAQ', link: '/projects/verdict-judge/faq' }
          ]
        }
      ],
      '/guides/': [
        {
          text: '使用指南',
          items: [
            { text: '指南总览', link: '/guides/' },
            { text: '使用与维护代码片段', link: '/guides/snippets' },
            { text: '编写和维护文档', link: '/guides/writing' },
            { text: '本地开发', link: '/guides/development' },
            { text: 'Cloudflare Pages 部署', link: '/guides/deployment' }
          ]
        }
      ],
      '/about/': [{ text: '关于本站', items: [{ text: 'Pt.ll Docs', link: '/about/' }] }]
    },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    editLink: { pattern: 'https://github.com/Pt-ll/ptzyc-docs/edit/main/:path', text: '在 GitHub 上编辑此页' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Pt-ll/ptzyc-docs' }],
    footer: { message: 'Built with VitePress', copyright: '© Pt.ll' }
  }
})
