<script>
export default {
  name: 'plh-search',
  props: {
    searchList: {
      type: Array,
      default: () => []
    },
    params: {
      type: Object,
      default: () => {}
    },
    showSubmit: {
      type: Boolean,
      default: true
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fold: true,
      form: { ...this.params }
    }
  },
  created() {},
  render(h) {
    return (
      <div class="plh-search-all">
        <div class={this.more ? 'search-all-more' : 'search-all'}>
          <div
            class="plh-search"
            style={{ height: this.fold ? '40px' : 'auto', overflowY: this.fold ? 'hidden' : 'auto' }}>
            <plh-form ref="form" v-model={this.form} inline={true} items={this.searchList} onEnter={this.getParams} />
          </div>
          {this.showSubmit ? (
            <div class="plh-search-button">
              <plh-button size="small" onClick={this.getParams}>
                查询
              </plh-button>
            </div>
          ) : null}
        </div>
        {this.more ? (
          <div class="more" onClick={() => this.expend()}>
            <i class={this.fold ? 'el-icon-arrow-down' : 'el-icon-arrow-up'} />
          </div>
        ) : null}
      </div>
    )
  },
  methods: {
    expend() {
      this.fold = !this.fold
    },
    getParams() {
      let params = this.form
      Object.keys(params).forEach(key => {
        if (params[key] === '' || params[key] === null || params[key] === undefined) delete params[key]
      })
      this.$emit('submit', params)
    }
  }
}
</script>
<style lang="stylus">
  .plh-search-all {
  .search-all {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .search-all-more {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .plh-search {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    &-title {
      padding-top: 10px;
      height: 32px;
    }
    .el-form-item {
      display: flex;
    }
    .from-list-all {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .plh-search-row {
      font-size: 14px;
      color: #172434;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 5px;
      & + .plh-search-row {
        margin-left: 20px;
      }
    }
  }
  .plh-search-button {
    margin-left: 10px;
  }
  @keyframes bounce {
    30%,
    to {
      transform: translateY(8px);
    }
    90% {
      transform: translateY(0px);
    }
  }
  .more {
    font-size: 30px;
    text-align: center;
    animation: bounce 2s ease-in infinite;
  }
}
</style>
