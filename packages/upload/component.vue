<template>
  <div :class="`plh-upload plh-upload-${type}`">
    <template v-if="type === 'picture'">
      <div class="plh-upload-item" v-for="(item, index) in fileList" :key="index">
        <el-image :src="item.url" fit="cover"></el-image>
        <div class="delete" v-if="!isUploading">
          <i class="el-icon-view" @click="handlePictureCardPreview(index)"></i>
          <i class="el-icon-delete" v-if="!disabled" @click="handleDelete(index)"></i>
        </div>
      </div>
    </template>
    <el-upload
      v-if="type !== 'picture' || (fileList && fileList.length < options.limitNum)"
      ref="upload"
      :action="action"
      :headers="headers"
      :disabled="isUploading || disabled"
      :limit="options.limitNum"
      :accept="options.limitType"
      :show-file-list="typeConfig.showFileList"
      :list-type="typeConfig.listType"
      :file-list="fileList"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-error="handleError"
      :http-request="httpRequest"
      v-bind="$attrs"
    >
      <slot>
        <template v-if="type === 'picture'">
          <i class="el-icon-plus" v-show="!isUploading"></i>
          <div class="progress" v-show="isUploading" title="上传中...">
            <el-image :src="progressImgUrl" fit="cover"></el-image>
            <el-progress type="circle" :width="60" :percentage="percentage"></el-progress>
          </div>
        </template>
        <template v-else>
          <el-button
            :size="btnConfig.size"
            :type="btnConfig.type"
            :icon="btnConfig.icon"
            :round="btnConfig.round"
            :loading="isUploading"
            :disabled="isUploading"
          >
            {{ options.btnName }}
          </el-button>
        </template>
      </slot>
    </el-upload>
    <plh-preview v-model="showPreview" :list="fileList" :index.sync="imgIndex"></plh-preview>
  </div>
</template>

<script>
import props from './props'

export default {
  name: 'plh-upload',
  props: { ...props },
  data() {
    return {
      isUploading: false, // 是否在上传中
      percentage: 0, // 上传进度
      showPreview: false, // 是否显示预览
      progressImgUrl: '', // 上传进度显示图片
      imgIndex: 0, // 预览图片索引
      // 上传配置项
      options: {
        limitNum: 10,
        limitSize: 1,
        limitSizeMsg: '',
        limitUnit: 'M',
        limitType: 'image/png,image/jpeg,image/gif',
        btnName: '点击上传',
        ...this.configs
      },
      limitMap: {
        B: 1,
        KB: 1024,
        MB: 1024 * 1024,
        M: 1024 * 1024,
        GB: 1024 * 1024 * 1024,
        G: 1024 * 1024 * 1024
      }
    }
  },
  computed: {
    // 是否是单图片上传（传值string，而非array）
    isSimple() {
      return typeof this.value === 'string'
    },
    // 文件列表
    fileList: {
      get() {
        if (this.isSimple) {
          return this.value ? [{ url: this.value }] : []
        } else {
          return this.value
        }
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    // 上传文件类型
    fileTypeName() {
      return this.type === 'picture' ? '图片' : '文件'
    },
    // 类型配置，没有指定type，采用自定义配置
    typeConfig() {
      const typeConfigMap = {
        picture: {
          listType: 'picture-card',
          showFileList: false
        },
        file: {
          listType: 'text',
          showFileList: true
        },
        button: {
          listType: 'text',
          showFileList: false
        }
      }
      return this.type
        ? typeConfigMap[this.type]
        : {
            listType: this.listType,
            showFileList: this.showFileList
          }
    }
  },
  methods: {
    // 限制个数提示
    handleExceed(files, fileList) {
      this.$message.warning(`最多上传${this.options.limitNum}个${this.fileTypeName}`)
    },
    // 上传图片预览
    handlePictureCardPreview(index) {
      if (this.type !== 'picture') {
        return false
      }
      this.showPreview = true
      this.imgIndex = index
    },
    // 上传前钩子
    handleBeforeUpload(file) {
      const { limitSize, limitSizeMsg, limitType, limitUnit } = this.options
      this.isUploading = true
      this.$emit('complate', false)
      this.percentage = 0
      const unit = limitUnit.toUpperCase()
      const isLimitNum = this.limitMap[unit]
      if (!isLimitNum) {
        this.$message.error('限制文件存储单位limitUnit的类型错误')
        this.resetUpload()
        return false
      }
      const isLimitSize = file.size / isLimitNum < limitSize
      if (!isLimitSize) {
        this.$message.error(
          limitSizeMsg ? limitSizeMsg : `上传${this.fileTypeName}大小不能超过${limitSize}${limitUnit}！`
        )
        this.resetUpload()
        return false
      }

      let fileTypeArr = limitType.split(',') || []
      let fileType = file.type || ''
      let canUpload = fileTypeArr.includes(fileType)
      if (!canUpload) {
        this.$message.error(`${this.fileTypeName}格式错误`)
        this.resetUpload()
        return false
      }
      return isLimitNum && isLimitSize && canUpload
    },
    // 上传进度钩子
    handleProgress(event, file, fileList) {
      if (!this.progressImgUrl) {
        this.progressImgUrl = file.url
      }
      if (event.percent !== 100) {
        this.percentage = parseFloat(event.percent.toFixed(2)) || 0
      } else {
        this.percentage = 99
      }
    },
    // 删除操作
    handleDelete(index) {
      if (this.isSimple) {
        this.$emit('input', '')
      } else {
        this.$delete(this.value, index)
        this.$emit('input', this.value)
      }
    },
    // 移除操作
    handleRemove(file, fileList) {
      this.$emit('input', fileList)
    },
    // 上传成功钩子
    handleSuccess(response, file) {
      this.resetUpload()
      this.percentage = 100
      if (this.isSimple) {
        this.$emit('input', response.url)
      } else {
        const fileList = [
          ...this.fileList,
          {
            name: response.filename,
            url: response.url,
            uploadTime: Number(new Date())
          }
        ]
        this.$emit('input', fileList)
      }
    },
    // 上传失败
    handleError() {
      this.$message.error('上传失败，请稍后重试')
      this.resetUpload()
      this.percentage = 0
    },
    // 重置上传
    resetUpload() {
      this.isUploading = false
      this.progressImgUrl = ''
      this.$emit('complate', true)
    }
  }
}
</script>

<style lang="stylus">
.plh-upload-picture {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  .plh-upload-item {
    margin: 5px;
    width: 120px;
    height: 120px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-image {
      width: 100%;
      height: 100%;
    }

    .delete {
      display: none;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      font-size: 18px;

      i {
        cursor: pointer;
        color: #ffffff;
      }

      i + i {
        margin-left: 10px;
      }
    }

    &:hover {
      .delete {
        display: flex;
      }
    }
  }

  .el-upload--picture-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 118px;
    height: 118px;
    position: relative;

    .progress {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      .el-image {
        width: 100%;
        height: 100%;
      }

      .el-progress--circle {
        position: absolute;

        .el-progress__text {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
