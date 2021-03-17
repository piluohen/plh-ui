<script>
import { Sortable } from 'sortablejs'
import { insertNodeAt, camelize, console, removeNode } from './helper'

function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object
  }
  object = object || {}
  object[propName] = value
  return object
}

function computeVmIndex(vnodes, element) {
  const index = vnodes.indexOf(element)
  return index
}

function computeIndexes(slots, children, footerOffset) {
  if (!slots) {
    return []
  }

  const elmFromNodes = slots
  const footerIndex = children.length - footerOffset
  const rawIndexes = [...children].map((elt, idx) => {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt)
  })
  return rawIndexes
}

function emit(evtName, evtData) {
  this.$nextTick(() => this.$emit(evtName.toLowerCase(), evtData))
}

function delegateAndEmit(evtName) {
  return evtData => {
    if (this.realList !== null) {
      this['onDrag' + evtName](evtData)
    }
    emit.call(this, evtName, evtData)
  }
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined)
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  let headerOffset = 0
  let footerOffset = 0
  const header = getSlot(slot, scopedSlot, 'header')
  if (header) {
    headerOffset = header.length
    children = children ? [...header, ...children] : [...header]
  }
  const footer = getSlot(slot, scopedSlot, 'footer')
  if (footer) {
    footerOffset = footer.length
    children = children ? [...children, ...footer] : [...footer]
  }
  return { children, headerOffset, footerOffset }
}

function getComponentAttributes($attrs, componentData) {
  let attributes = {
    class: 'plh-draggable'
  }
  const update = (name, value) => {
    attributes = buildAttribute(attributes, name, value)
  }
  const attrs = Object.keys($attrs)
    .filter(key => key === 'id' || key.startsWith('data-'))
    .reduce((res, key) => {
      res[key] = $attrs[key]
      return res
    }, {})
  update('attrs', attrs)

  if (!componentData) {
    return attributes
  }
  const { on, props, attrs: componentDataAttrs } = componentData
  update('on', on)
  update('props', props)
  Object.assign(attributes.attrs, componentDataAttrs)
  return attributes
}

const eventsListened = ['Start', 'Add', 'Remove', 'Update', 'End']
const eventsToEmit = ['Choose', 'Unchoose', 'Sort', 'Filter', 'Clone']
const readonlyProperties = ['Move', ...eventsListened, ...eventsToEmit].map(evt => 'on' + evt)
var draggingElement = null

const props = {
  value: {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: original => {
      return original
    }
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  },
  containerSelector: {
    type: String,
    default: null
  },
  draggableClassName: {
    type: String,
    default: null
  }
}

export default {
  name: 'plh-draggable',

  inheritAttrs: false,

  props,

  data() {
    return {
      noneFunctionalComponentMode: false
    }
  },

  render(h) {
    const slots = this.$slots.default
    const { children, headerOffset, footerOffset } = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots)
    this.headerOffset = headerOffset
    this.footerOffset = footerOffset

    const attributes = getComponentAttributes(this.$attrs, this.componentData)
    return h('div', attributes, children)
  },

  created() {},

  mounted() {
    const optionsAdded = {}
    eventsListened.forEach(elt => {
      optionsAdded['on' + elt] = delegateAndEmit.call(this, elt)
    })

    eventsToEmit.forEach(elt => {
      optionsAdded['on' + elt] = emit.bind(this, elt)
    })

    const attributes = Object.keys(this.$attrs).reduce((res, key) => {
      res[camelize(key)] = this.$attrs[key]
      return res
    }, {})

    const options = Object.assign({}, attributes, optionsAdded, {
      onMove: (evt, originalEvent) => {
        return this.onDragMove(evt, originalEvent)
      }
    })

    !('draggable' in options) && (options.draggable = '>*')
    this.$nextTick(() => {
      // if (options.multiDrag) {
      //   Sortable.mount(new MultiDrag())
      // }
      this._sortable = new Sortable(this.rootContainer, options)
      this.computeIndexes()
    })
  },

  beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy()
  },

  computed: {
    rootContainer() {
      let el = this.$el

      if (this.containerSelector) {
        const containerEle = this.$el.querySelector(this.containerSelector)
        if (containerEle) {
          el = containerEle
        } else {
          console.warn(
            `You have defined a useless attribute containerSelector="${this.containerSelector}" on plh-draggable component, you can delete it`
          )
        }
      }

      return el
    },

    realList() {
      return this.value
    }
  },

  watch: {
    options: {
      handler(newOptionValue) {
        this.updateOptions(newOptionValue)
      },
      deep: true
    },

    $attrs: {
      handler(newOptionValue) {
        this.updateOptions(newOptionValue)
      },
      deep: true
    },

    realList() {
      this.computeIndexes()
    }
  },

  methods: {
    updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        const value = camelize(property)
        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property])
        }
      }
    },

    getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default
      }

      const childList = Array.from(this.rootContainer.childNodes).filter(item => {
        return item.className
      })

      const rawNodes = childList.filter(item => {
        return item.className.includes(this.draggableClassName || '')
      })

      if (this.draggableClassName && childList.length > 0 && rawNodes.length === 0) {
        console.error(`You have defined a error attribute draggableClassName="${this.draggableClassName}"`)
      }

      return rawNodes
    },

    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = computeIndexes(this.getChildrenNodes(), this.rootContainer.children, this.footerOffset)
      })
    },

    getUnderlyingVm(htmlElt) {
      const index = computeVmIndex(this.getChildrenNodes() || [], htmlElt)

      if (index === -1) {
        // Edge case during move callback: related element might be
        // an element different from collection
        return null
      }
      const element = this.realList[index]
      return { index, element }
    },

    getUnderlyingPotencialDraggableComponent({ __vue__: vue }) {
      if (!vue || !vue.$options) {
        if (!('realList' in vue) && vue.$children.length === 1 && 'realList' in vue.$children[0])
          return vue.$children[0]

        return vue
      }
      return vue.$parent
    },

    emitChanges(evt) {
      this.$nextTick(() => {
        this.$emit('change', evt)
      })
    },

    alterList(onList) {
      const newList = [...this.value]
      onList(newList)
      this.$emit('input', newList)
    },

    spliceList() {
      const spliceList = list => list.splice(...arguments)
      this.alterList(spliceList)
    },

    updatePosition(oldIndex, newIndex) {
      const updatePosition = list => list.splice(newIndex, 0, list.splice(oldIndex, 1)[0])
      this.alterList(updatePosition)
    },

    getRelatedContextFromMoveEvent({ to, related }) {
      const component = this.getUnderlyingPotencialDraggableComponent(to)
      if (!component) {
        return { component }
      }
      const list = component.realList
      const context = { list, component }
      if (to !== related && list && component.getUnderlyingVm) {
        const destination = component.getUnderlyingVm(related)
        if (destination) {
          return Object.assign(destination, context)
        }
      }
      return context
    },

    getVmIndex(domIndex) {
      const indexes = this.visibleIndexes
      const numberIndexes = indexes.length
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex]
    },

    getComponent() {
      return this.$slots.default[0].componentInstance
    },

    resetTransitionData(index) {
      if (!this.noTransitionOnDrag) {
        return
      }
      var nodes = this.getChildrenNodes()
      nodes[index].data = null
      const transitionContainer = this.getComponent()
      transitionContainer.children = []
      transitionContainer.kept = undefined
    },

    onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item)
      evt.item._underlying_vm_ = this.clone(this.context.element)
      draggingElement = evt.item
    },

    onDragAdd(evt) {
      const element = evt.item._underlying_vm_
      if (element === undefined) {
        return
      }
      removeNode(evt.item)
      const newIndex = this.getVmIndex(evt.newIndex)
      this.spliceList(newIndex, 0, element)
      this.computeIndexes()
      const added = { element, newIndex }
      this.emitChanges({ added })
    },

    onDragRemove(evt) {
      insertNodeAt(this.rootContainer, evt.item, evt.oldIndex)
      if (evt.pullMode === 'clone') {
        removeNode(evt.clone)
        return
      }
      const oldIndex = this.context.index
      this.spliceList(oldIndex, 1)
      const removed = { element: this.context.element, oldIndex }
      this.resetTransitionData(oldIndex)
      this.emitChanges({ removed })
    },

    onDragUpdate(evt) {
      removeNode(evt.item)
      insertNodeAt(evt.from, evt.item, evt.oldIndex)
      const oldIndex = this.context.index
      const newIndex = this.getVmIndex(evt.newIndex)
      this.updatePosition(oldIndex, newIndex)
      const moved = { element: this.context.element, oldIndex, newIndex }
      this.emitChanges({ moved })
    },

    updateProperty(evt, propertyName) {
      // eslint-disable-next-line no-prototype-builtins
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset)
    },

    computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0
      }
      const domChildren = [...evt.to.children].filter(el => el.style['display'] !== 'none')
      const currentDOMIndex = domChildren.indexOf(evt.related)
      const currentIndex = relatedContext.component.getVmIndex(currentDOMIndex)
      const draggedInList = domChildren.indexOf(draggingElement) !== -1
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1
    },

    onDragMove(evt, originalEvent) {
      const onMove = this.move
      if (!onMove || !this.realList) {
        return true
      }

      const relatedContext = this.getRelatedContextFromMoveEvent(evt)
      const draggedContext = this.context
      const futureIndex = this.computeFutureIndex(relatedContext, evt)
      Object.assign(draggedContext, { futureIndex })
      const sendEvt = Object.assign({}, evt, {
        relatedContext,
        draggedContext
      })
      return onMove(sendEvt, originalEvent)
    },

    onDragEnd() {
      this.computeIndexes()
      draggingElement = null
    }
  }
}
</script>
<style lang="stylus">
.plh-draggable {
}
</style>
