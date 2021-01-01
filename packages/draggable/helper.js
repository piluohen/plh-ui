function getConsole() {
  if (typeof window !== 'undefined') {
    return window.console
  }
  // eslint-disable-next-line no-undef
  return global.console
}
const console = getConsole()

function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const regex = /-(\w)/g
const camelize = cached(str => str.replace(regex, (_, c) => (c ? c.toUpperCase() : '')))

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node)
  }
}

function insertNodeAt(fatherNode, node, position) {
  const refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling
  fatherNode.insertBefore(node, refNode)
}

function findNodeByClassName(nodes, classKey) {
  let node = null
  const fn = (nodes, classKey) => {
    nodes.forEach(item => {
      if (item.data && item.data.staticClass === classKey) {
        node = item.children
      }
      if (item.children && item.children.length > 0) {
        fn(item.children, classKey)
      }
    })
  }
  fn(nodes, classKey)
  return node
}

export { insertNodeAt, camelize, console, removeNode, findNodeByClassName }
