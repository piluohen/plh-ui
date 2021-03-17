const fs = require('fs-extra')
const path = require('path')
const join = path.join
const resolve = dir => path.join(__dirname, '../', dir)

module.exports = {
  fs: fs,
  resolve,
  getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path))
    const componentEntries = files.reduce((ret, item) => {
      const itemPath = join(path, item)
      const isDir = fs.statSync(itemPath).isDirectory()
      if (isDir) {
        ret[item] = resolve(join(itemPath, 'index.js'))
      } else {
        const [name] = item.split('.')
        ret[name] = resolve(`${itemPath}`)
      }
      return ret
    }, {})
    return componentEntries
  }
}
