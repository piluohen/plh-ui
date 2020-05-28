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
