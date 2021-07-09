<script>
import props from './props'

export default {
  name: 'plh-search',
  props: { ...props },
  data() {
    return {
      isCollapse: this.collapse,
      showMore: true,
      form: { ...this.params }
    }
  },
  computed: {
    height() {
      const sizeMap = {
        large: 40,
        medium: 36,
        small: 32,
        mini: 28
      }
      return sizeMap[this.size] + 10
    }
  },
  mounted() {
    this.showMoreFn()
    window.addEventListener('resize', this.resize)
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      this.showMoreFn()
    },
    showMoreFn() {
      const height = this.$refs.form.$el.clientHeight
      this.showMore = height - 20 > this.height
    },
    expend() {
      this.isCollapse = !this.isCollapse
    },
    getParams() {
      let params = this.form
      Object.keys(params).forEach(key => {
        if (params[key] === '' || params[key] === null || params[key] === undefined) delete params[key]
      })
      this.$emit('submit', params)
    },
    handleInput(val) {
      if (!this.showSubmit) {
        this.$emit('submit', this.form)
      }
    }
  },
  render(h) {
    return (
      <div class="plh-search-all">
        <div class={this.showMore ? 'search-all-more' : 'search-all'}>
          <div
            class="plh-search"
            style={{
              height: this.isCollapse ? this.height + 'px' : 'auto',
              overflowY: this.isCollapse ? 'hidden' : 'auto'
            }}>
            <plh-form
              ref="form"
              v-model={this.form}
              inline={true}
              size={this.size}
              items={this.searchList}
              onInput={this.handleInput}
              onEnter={event => {
                event.preventDefault()
                this.getParams()
              }}
            />
          </div>
          <div class="plh-search-button">
            {this.showSubmit ? (
              <plh-button type="primary" size={this.size} onClick={this.getParams}>
                查询
              </plh-button>
            ) : null}
            {this.showMore ? (
              <plh-button
                type="text"
                size={this.size}
                icon={this.isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up'}
                onClick={() => this.expend()}>
                {this.isCollapse ? '展开' : '收起'}
              </plh-button>
            ) : null}
          </div>
        </div>
      </div>
    )
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
      margin-bottom: 10px;
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
    display: flex;
    justify-content: flex-end;
  }

  @keyframes bounce {
    30%, to {
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
