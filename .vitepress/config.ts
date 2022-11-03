import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mog Official Blog',
  description: 'The official blog for the Mog project',
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { property: 'og:title', content: "Mog Official Blog" }],
    ['meta', { property: 'og:description', content: "The offical blog for the Mog project" }],
    ['meta', { property: 'og:url', content: "https://mog.js.org" }],
    ['meta', { property: 'og:image', content: "https://mog.js.org/logo.svg" }],
    ['meta', { name: 'twitter:title', content: "Mog" }],
    ['meta', { name: 'twitter:description', content: "The offical blog for the Mog project" }],
    ['meta', { name: 'twitter:image', content: "https://mog.js.org/logo.svg" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['script', { async: "", defer: "", 'data-website-id': 'db355c05-e3d6-4e4c-a813-fccbc15e39b0', src: 'https://umami.iucky.cn/umami.js' }],
    
  ],
})
