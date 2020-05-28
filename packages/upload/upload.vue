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
      v-if="(type !== 'picture' || (fileList && fileList.length < options.limitNum)) && !disabled"
      ref="upload"
      :action="action"
      :headers="headers"
      :disabled="isUploading"
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
export default {
  name: 'plh-upload',
  props: {
    value: {},
    // 上传类型 picture | file | button
    type: {
      type: String,
      default: 'picture'
    },
    // 上传地址
    action: {
      type: String,
      default: ''
    },
    // 覆盖默认的上传行为
    httpRequest: {
      type: Function
    },
    // 请求headers
    headers: {
      type: Object,
      default: () => {}
    },
    // 是否显示fileList
    showFileList: {
      type: Boolean,
      default: true
    },
    // list 类型 text/picture/picture-card
    listType: {
      type: String,
      default: 'text'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 配置项
    configs: {
      required: false,
      type: Object,
      default() {
        return {}
      }
    },
    // 按钮配置项
    btnConfig: {
      type: Object,
      default: () => {
        return {
          type: 'primary',
          size: 'small',
          icon: '',
          round: false
        }
      }
    }
  },
  data() {
    return {
      isUploading: false, // 是否在上传中
      percentage: 0, // 上传进度
      showPreview: false, // 是否显示预览
      progressImgUrl: '', // 上传进度显示图片
      imgIndex: 0, // 预览图片索引
      // 配置项对象
      typeConfigMap: {
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
      return this.type
        ? this.typeConfigMap[this.type]
        : {
            listType: this.listType,
            showFileList: this.showFileList
          }
    },
    // 上传配置项
    options() {
      let self = this
      let util = function(key, val) {
        return self.configs[key] === undefined ? val : self.configs[key]
      }
      return {
        limitNum: util('limitNum', 10),
        limitSize: util('limitSize', 10),
        limitType: util('limitType', 'image/png,image/jpeg,image/gif'),
        btnName: util('btnName', '点击上传')
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
      const { limitSize, limitSizeMsg, limitType } = this.options
      this.isUploading = true
      this.$emit('complate', false)
      this.percentage = 0
      const isLimitSize = file.size / 1024 / 1024 < limitSize
      if (!isLimitSize) {
        this.$message.error(limitSizeMsg ? limitSizeMsg : `上传${this.fileTypeName}大小不能超过${limitSize}MB！`)
        this.resetUpload()
      }

      let fileTypeArr = limitType.split(',') || []
      let fileType = file.type || ''
      let canUpload = fileTypeArr.includes(fileType)
      if (!canUpload) {
        this.$message.error(`${this.fileTypeName}格式错误`)
        this.resetUpload()
      }
      return isLimitSize && canUpload
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
