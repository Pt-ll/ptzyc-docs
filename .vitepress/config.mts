
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',

  title: 'Pt.ll Docs',
  description: 'Personal Technical Documentation',

  cleanUrls: true,

  themeConfig: {
    siteTitle: 'PT.ZYC',

    nav: [
      { text: '首页', link: '/' },
      { text: 'OI', link: '/oi/' },
      { text: '编程', link: '/programming/' },
      { text: '使用指南', link: '/guide/' },
      { text: 'Blog', link: 'https://blog.ptzyc.cn' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '文档指南',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '编写规范', link: '/guide/conventions' },
            { text: '如何编写文档', link: '/guide/writing' }
          ]
        }
      ],

      '/oi/': [
        {
          text: 'OI',
          items: [
            { text: '概览', link: '/oi/' },
            { text: '算法', link: '/oi/algorithms/' },
            { text: '代码模板', link: '/oi/templates/' }
          ]
        }
      ],

      '/programming/': [
        {
          text: 'Programming',
          items: [
            { text: '概览', link: '/programming/' },
            { text: 'C++', link: '/programming/cpp/' },
            { text: 'Go', link: '/programming/go/' },
            { text: '开发工具', link: '/programming/tools/git' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Pt-ll/ptzyc-docs'
      }
    ],

    footer: {
      message: 'Built with VitePress.',
      copyright: 'Copyright © 2026 Pt.ll'
    }
  }
})
