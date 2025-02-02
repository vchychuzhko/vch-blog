import { defineConfig } from 'vitepress'
import 'dotenv/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VCH Blog',
  description: 'Vladyslav Chychuzhko Personal Blog',
  head: [
    ['meta', { property: 'og:title', content: 'VCH Blog' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'VCH Blog' }],
    ['meta', { property: 'og:description', content: 'Vladyslav Chychuzhko Personal Blog' }],
    ['meta', { property: 'og:url', content: process.env.BASE_URL + '/' }],
    ['meta', { property: 'og:image', content: process.env.BASE_URL + '/og.jpg' }],
    ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
    ['meta', { property: 'og:image:height', content: '200' }],
    ['meta', { property: 'og:image:width', content: '200' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png', sizes: '180x180' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ],
  transformPageData({ title, description, frontmatter }) {
    if (!title || !description) return

    frontmatter.head ??= []
    frontmatter.head.push(
      ['meta', { property: 'og:title', content: title + ' | VCH Blog' }],
      ['meta', { property: 'og:description', content: description }],
    )
  },
  srcExclude: ['**/README.md', '**/LICENSE.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },

    nav: [
      // { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/in/vchychuzhko' },
      { icon: 'github', link: 'https://github.com/vchychuzhko' },
    ],

    sidebar: [
      { text: 'Introduction', link: '/introduction' },
      {
        text: 'Posts',
        base: '/post',
        items: [
          { text: 'document.forms', link: '/forms' },
        ],
      },
    ],

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/vchychuzhko/vch-blog/blob/master/:path',
      text: 'View this page on GitHub',
    },

    lastUpdated: true,

    footer: {
      copyright: 'Copyright © Vladyslav Chychuzhko',
    },
  }
})
