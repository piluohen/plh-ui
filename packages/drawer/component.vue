<template>
  <el-drawer
    ref="drawer"
    :visible.sync="drawerVisible"
    direction="rtl"
    :wrapper-closable="type === 'view'"
    :close-on-press-escape="type === 'view'"
    :append-to-body="true"
    :destroy-on-close="true"
    v-bind="$attrs"
    :size="width"
    class="plh-drawer"
  >
    <template slot="title">
      <div class="el-drawer__title">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
    </template>

    <slot />
    <template v-if="hasFooter">
      <div class="drawer-footer">
        <slot name="footer">
          <template v-if="type === 'view'">
            <plh-button :size="size" @click="onCancel()">关闭</plh-button>
          </template>
          <template v-else>
            <plh-button :size="size" @click="onCancel()">取消</plh-button>
            <plh-button type="primary" :size="size" @click="onConfirm()">确定</plh-button>
          </template>
        </slot>
      </div>
    </template>
  </el-drawer>
</template>

<script>
import props from './props'
export default {
  name: 'plh-drawer',
  props: { ...props },
  data() {
    return {}
  },
  computed: {
    drawerVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    closeDrawer() {
      this.$refs.drawer.closeDrawer()
    },
    onCancel() {
      this.$emit('cancel')
    },
    onConfirm() {
      this.$emit('confirm')
    }
  }
}
</script>
<style lang="stylus">
$border = #E4E7ED;
$sub-title = #606266;

.plh-drawer {
  .el-drawer {
    .el-drawer__header {
      margin: 0;
      padding: 15px 20px;
      border-bottom: 1px solid $border;
      color: $title;
      .el-drawer__close-btn {
        padding: 0;
        color: $sub-title;
      }
      .el-drawer__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-right: 20px;
      }
    }
    .el-drawer__body {
      width: calc(100% + 20px);
      height: calc(100% - 65px);
      padding: 20px 40px 80px 20px;
      overflow-y: auto;
      .el-select {
        width: 100%;
      }
    }
    .drawer-footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      padding: 15px 20px;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid $border;
      background-color: #fff;
      z-index: 123;
    }
  }
}
</style>
