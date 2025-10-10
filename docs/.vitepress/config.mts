import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/boyfriend-vs-tetrapod",
  title: "中々テトラポットに登れないボーイフレンド",
  description: "あ～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Android', link: '/android/' },
      { text: 'Elixir', link: '/elixir/' },
      { text: 'Android', link: '/android/' },
      { text: 'IDE', link: '/ide/' },
      { text: 'Diary', link: '/diary/' }

    ],
    sidebar: {
      "/examples/": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      "/android/": [
        {
          text: 'Android',
          items: [
            { text: 'test01', link: '/android/test01' },
          ]
        }
      ],
      "/elixir/": [
        {
          text: 'Elixir',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        }
      ],
      "/ide/": [
        {
          text: 'IDE',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        }
      ],
      "/diary/": [
        {
          text: '日記',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        }
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
