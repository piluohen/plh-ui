<template lang="pug">
  .hellow
    span 你好
    plh-countup(:endVal="num")
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 2000
    }
  },
  computed: {
    countupNum () {
      return 2000 || 0
    }
  }
}
</script>
