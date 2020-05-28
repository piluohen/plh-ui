const { nav, sidebar } = require('./plugin/router')

const baseMap = {
  dev: '/',
  prod: '/plh-ui/'
}

module.exports = {
  base: baseMap[process.env.ENV],
  dest: 'dist',
  title: 'plh-ui',
  description: ' ',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    logo: '/images/piluohen.jpg',
    nav: nav,
    sidebar: sidebar,
    lastUpdated: '最后更新'
  },
  markdown: {
    anchor: { permalink: true }
  },
  extendMarkdown: md => {
    // 使用更多的 markdown-it 插件!
    md.use(require('markdown-it-checkbox')).use(require('markdown-it-kbd'))
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', 'demo-block', require('./plugin/copyright/index.js')],
  serviceWorker: true
}
