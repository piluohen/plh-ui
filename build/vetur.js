const { resolve, fs } = require('./utils')

const componentsDir = fs.readdirSync(resolve('packages'))

const veturDir = fs.readdirSync(resolve('vetur'))

// 清空.vsix文件
veturDir.forEach(dir => {
  fs.unlinkSync(resolve(`vetur/${dir}`))
})

const mdParser = str => {
  const start = str.indexOf('{')
  return str.substring(start)
}

const ignoreList = ['style', 'utils', 'index.js', 'mixins.vue']
const props = {}
const tags = {}
const attributes = {}

componentsDir.forEach(file_name => {
  if (!ignoreList.includes(file_name)) {
    const filePath = resolve(`packages/${file_name}/props.js`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' })

    const fileProps = eval('(' + mdParser(fileContent) + ')')

    props[file_name] = fileProps

    const fileName = `plh-${file_name}`

    const keys = Object.keys(fileProps)

    tags[fileName] = {
      attributes: keys
    }

    keys.forEach(key => {
      const { type, description = '' } = fileProps[key]
      let typeStr = ''
      if (Array.isArray(type)) {
        typeStr = type
          .map(item => {
            return item.name.toLowerCase()
          })
          .join(' | ')
      } else {
        typeStr = type.name.toLowerCase()
      }
      attributes[`${fileName}/${key}`] = {
        type: typeStr,
        description: description
      }
    })
  }
})

fs.writeFileSync(resolve('vetur/tags.json'), JSON.stringify(tags))
fs.writeFileSync(resolve('vetur/attributes.json'), JSON.stringify(attributes))
