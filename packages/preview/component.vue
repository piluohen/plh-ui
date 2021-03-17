<template>
  <el-dialog class="plh-preview" :visible.sync="modeVisible" top="0%" fullscreen append-to-body>
    <div class="plh-preview-container">
      <div v-if="imgList && imgList.length > 1" class="plh-preview-btn plh-preview-btn-prev" @click="prev()">
        <i class="el-icon-arrow-left"></i>
      </div>

      <div class="plh-preview-image">
        <slot :src="imgSrc">
          <el-image v-if="imgSrc" :src="imgSrc" fit="contain"></el-image>
        </slot>
      </div>

      <div v-if="imgList && imgList.length > 1" class="plh-preview-btn plh-preview-btn-next" @click="next()">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import props from './props'

export default {
  name: 'plh-preview',
  props: { ...props },
  data() {
    return {
      imgList: this.list || [],
      imgSrc: '',
      activeIndex: this.index
    }
  },
  computed: {
    modeVisible: {
      get() {
        if (this.value) {
          this.handleAfterOpen()
        }
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    /**
     * 打开弹框，赋值
     */
    handleAfterOpen() {
      this.imgList = this.list

      setTimeout(() => {
        this.activeIndex = this.index
        this.change()
      }, 0)
    },

    /**
     * 关闭弹框
     */
    cancel() {
      this.imgList = []
      this.imgSrc = ''
      this.activeIndex = 0
      this.modeVisible = false
      this.visibleChange.emit(false)
    },

    /**
     * 上一张操作
     */
    prev() {
      const len = this.imgList.length
      this.activeIndex = (this.activeIndex - 1 + len) % len
      this.change()
    },

    /**
     * 下一张操作
     */
    next() {
      const len = this.imgList.length
      this.activeIndex = (this.activeIndex + 1) % len
      this.change()
    },

    /**
     * 改变imgSrc
     */
    change() {
      this.imgSrc = this.imgList[this.activeIndex] && this.imgList[this.activeIndex].url
    }
  }
}
</script>
<style lang="stylus">
$white = #ffffff

.plh-preview {
  .el-dialog {
    background: transparent;
    .el-dialog__header {
      padding: 0;
      height: 0;
      .el-dialog__headerbtn {
        background-color: rgba(#000000, 0.1);
        border-radius: 50%;
        z-index: 100;
        .el-dialog__close {
          padding: 10px;
          font-size: 30px;
          color: rgba($white, 0.5);
        }
      }
    }
    .el-dialog__body {
      height: 100%;
      padding: 20px;
      .plh-preview-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .plh-preview-image {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .el-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          user-select: none;
        }
      }

      .plh-preview-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 60px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
        color: rgba($white, 0.5);
        background-color: rgba($white, 0.2);
        font-size: 30px;

        &-prev {
          margin-right: 20px;
        }

        &-next {
          margin-left: 20px;
        }

        &:hover {
          color: $white;
          background-color: rgba($white, 0.5);
        }
      }
    }
  }
}
</style>
