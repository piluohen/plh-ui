const fs = require('fs-extra')
const path = require('path')

const targetPath = path.resolve(__dirname, '../snippets/snippets')

const sourcePath = path.resolve(__dirname, '../.vscode/plh.code-snippets')

const content = fs.readFileSync(sourcePath)

fs.writeFileSync(`${targetPath}/snippets.json`, content)
