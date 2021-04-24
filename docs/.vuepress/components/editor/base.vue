<template>
  <div class="demo-editor">
    <plh-editor ref="editor" v-model="model"></plh-editor>
    <p class="code">
      {{ model }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'demo-editor',
  data() {
    return {
      model: ''
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus"></style>
