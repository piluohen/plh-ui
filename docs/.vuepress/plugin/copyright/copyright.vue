<template>
  <!-- <div class="page">
    <div class="copyright" v-if="show">
      作者声明：本作品为【皮落痕】原创，原则上禁止任何非本人的人或企业使用。如想引用，请邮箱联系
      <span class="link" @click="handleJump">作者本人</span>
    </div>
  </div> -->
</template>
<script>
export default {
  name: 'Copyright',
  computed: {
    show() {
      const paths = ['/', '/author.html']
      return !paths.includes(this.$route.path)
    }
  },
  methods: {
    handleJump() {
      this.$router.push('/author')
    }
  }
}
</script>
<style lang="stylus" scoped>
.copyright {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  text-align: center;
  color: #999999;

  .link {
    font-weight: 500;
    color: #3eaf7c;
    cursor: pointer;
  }
}
</style>
