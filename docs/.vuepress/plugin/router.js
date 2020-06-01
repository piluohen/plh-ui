const path = require('path')
const fs = require('fs')

/**
 * 生成nav，sidebar数据
 * @param {*} url
 * @param {*} link
 */
const getNavSideBar = url => {
  const file = path.join(__dirname, `../public/json/${url}.json`)
  const sidebar = [...JSON.parse(fs.readFileSync(file, 'utf-8'))]
  const nav = [...sidebar].map(item => {
    const items = item.children.map(v => {
      return {
        text: v.split('/')[1],
        link: `/docs/${v}`
      }
    })
    return {
      text: item.title,
      items: items
    }
  })
  return { nav, sidebar }
}

const { sidebar, nav } = getNavSideBar('components')

module.exports = {
  nav: [
    { text: '首页', link: '/' },
    {
      text: '文档',
      items: [{ text: '开始使用', link: '/docs/start' }, ...nav]
    },
    {
      text: '其他',
      items: [
        { text: 'GitHub', link: 'https://github.com/piluohen' },
        { text: 'Hn-ui', link: 'https://piluohen.github.io/hn-ui/' }
      ]
    },
    { text: '作者', link: '/author' }
  ],
  sidebar: {
    '/docs/': ['start', ...sidebar]
  }
}
