const { resolve, fs } = require('./utils')

const targetPath = resolve('docs/.vuepress/public/json')

/**
 * 生成sidebar子项
 * @param {*} dir
 * @param {*} names
 */
const createSiderBarItem = (dir, names) => {
  return {
    title: dir.title,
    children: names.map(item => {
      const name = item.split('.')[0]
      return `${dir.key}/${name}`
    })
  }
}

/**
 * 组件生成方法
 */
const componentsMethods = () => {
  const sourcePath = resolve('docs/docs/components')

  /**
   * 生成组件 sidebar
   */
  const getComponentsSideBar = () => {
    let content = []
    const dirPath = `${sourcePath}`
    if (fs.existsSync(dirPath)) {
      const names = fs.readdirSync(dirPath)
      content.push(createSiderBarItem({ title: '组件', key: 'components' }, names))
    }
    fs.writeFileSync(`${targetPath}/components.json`, JSON.stringify(content))
  }

  getComponentsSideBar()
}

componentsMethods()
