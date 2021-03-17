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
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
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
import props from './props'

export default {
  name: 'plh-button',
  props: { ...props },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus">
.plh-button {}

.plh-btn-popconfirm + .plh-btn-popconfirm {
  margin-left: 10px;
}
</style>
