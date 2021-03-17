const { resolve, fs } = require('./utils')

const snippetsContent = fs.readdirSync(resolve('snippets'))

// 清空.vsix文件
snippetsContent.forEach(item => {
  if (item.indexOf('.vsix') > -1) {
    fs.unlinkSync(resolve(`snippets/${item}`))
  }
})

const targetPath = resolve('snippets/snippets')

const sourcePath = resolve('.vscode/plh.code-snippets')

const content = fs.readFileSync(sourcePath)

fs.writeFileSync(`${targetPath}/snippets.json`, content)
