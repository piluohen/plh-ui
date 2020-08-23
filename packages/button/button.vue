<template>
  <el-tooltip v-if="tooltip" :placement="placement" v-bind="$attrs">
    <el-button class="plh-button" :size="size" v-bind="$attrs" @click="handleClick">
      <slot></slot>
    </el-button>
  </el-tooltip>

  <el-popconfirm
    v-else-if="popconfirm"
    v-bind="$attrs"
    :hideIcon="hideMsgIcon"
    :icon="msgIcon"
    :iconColor="msgIconColor"
    class="plh-btn-popconfirm"
  >
    <el-button slot="reference" class="plh-button" :size="size" v-bind="$attrs" @click="handleClick">
      <slot></slot>
    </el-button>
  </el-popconfirm>
  <el-button v-else class="plh-button" :size="size" v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'plh-button',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    tooltip: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'top'
    },
    popconfirm: {
      type: Boolean,
      default: false
    },
    hideMsgIcon: {
      type: Boolean,
      default: false
    },
    msgIcon: {
      type: String,
      default: 'el-icon-question'
    },
    msgIconColor: {
      type: String,
      default: '#f90'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus">
.plh-button {
}

.plh-btn-popconfirm + .plh-btn-popconfirm {
  margin-left: 10px;
}
</style>
