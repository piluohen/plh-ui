<template>
  <Editor ref="editor" v-model="model" api-key="no-api-key" :init="init" />
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import plugins from './plugins'
import toolbar from './toolbar'
import props from './props'

export default {
  name: 'plh-editor',
  components: { Editor },
  props: { ...props },
  data() {
    return {
      init: {
        height: 500,
        menubar: true,
        language: 'zh_CN',
        branding: false,
        plugins: plugins,
        toolbar: toolbar,
        min_height: 400,
        max_height: 500,
        zIndex: 3000,
        paste_as_text: false,
        fontsize_formats: '10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 36px 40px',
        font_formats: `微软雅黑='微软雅黑'; 宋体='宋体'; 楷体='楷体'; 仿宋='仿宋'; 隶书='隶书'; 幼圆='幼圆'
          Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde;
          Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif;
          Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica;
          Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif;
          Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva;
          Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats`,
        external_plugins: {
          indent2em: 'https://digitalzz.oss-cn-north-2-gov-1.aliyuncs.com/static/tinymce/indent2em/plugin.min.js'
        },
        images_upload_handler: (blobInfo, success, failure) => {
          const file = blobInfo.blob()
          if (file.size > this.maxSize) {
            failure('图片体积过大')
          }
          if (this.accept.indexOf(file.type) >= 0) {
            this.uploadFn(file)
              .then(data => {
                success(data.url)
              })
              .catch(() => {
                failure('图片上传失败')
              })
          } else {
            failure('图片格式错误')
          }
        },
        ...this.options
      }
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style lang="stylus">
.tox-tinymce-aux {
  z-index: 3000;
}
.tox-notifications-container {
  display: none;
}
</style>
