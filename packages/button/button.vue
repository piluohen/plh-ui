<template>
  <el-tootip effect="dark" v-if="tips" :content="tips" placement="top-start">
    <el-button class="plh-button" :size="size" :type="type" v-bind="$attrs" @click="handleClick">
      <slot></slot>
    </el-button>
  </el-tootip>
  <el-button v-else class="plh-button" :size="size" :type="type" v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'plh-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    tips: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus"></style>
