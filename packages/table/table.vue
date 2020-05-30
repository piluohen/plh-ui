<script>
export default {
  name: 'plh-table',
  props: {
    // api请求
    api: {
      type: Function
    },
    // 组件外传入表格数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 请求参数
    params: {
      type: Object,
      default: () => ({})
    },
    // 预设请求参数，需要通过计算属性获得
    defaultParams: {
      type: Object,
      default: () => ({})
    },
    // 列表字段
    columns: {
      type: Array,
      default: () => []
    },
    // 自动刷新间隔
    pollInterval: {
      type: Number,
      default: 0
    },
    // 是否分页
    paginationable: {
      type: Boolean,
      default: true
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // 接口路径
    path: {
      type: String,
      default: ''
    },
    // 分页
    pagination: {
      type: Object,
      default: () => {
        return {
          pageIndex: 1,
          pageSize: 10
        }
      }
    },
    // 分页sizes配置
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      }
    }
  },
  data() {
    return {
      // 用来判断是否使用最后一次操作，防止自动刷新列表覆盖了用户操作后请求回来的数据
      uid: 0,
      loading: false,
      total: 0,
      data: []
    }
  },
  computed: {
    pageSizes() {
      const sizes = [...this.pageSizeOptions, this.pagination.pageSize].sort((a, b) => a - b)
      return [...Array.from(new Set(sizes))]
    }
  },
  mounted() {
    this.search()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  watch: {
    tableData(val) {
      this.getLocalData()
    }
  },
  methods: {
    formatter(row, column, cellValue, index) {
      return cellValue === undefined || cellValue === null || cellValue === '' ? '-' : cellValue
    },
    fetch() {
      const { pageIndex, pageSize } = this.pagination
      let params = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        ...this.defaultParams,
        ...this.params
      }
      const pollInterval = () => {
        // 递归定时刷新
        clearTimeout(this.timer)
        if (this.pollInterval) {
          this.timer = setTimeout(() => this.fetch(), this.pollInterval)
        }
      }
      const uid = this.uid
      const fetch = this.api(params, this.path)
      fetch
        .then(data => {
          // 只显示最后一次操作的数据
          if (uid === this.uid) {
            this.total = data.totalCount
            this.data = data.list || []
          }
          this.loading = false
          pollInterval()
        })
        .catch(() => {
          this.loading = false
          pollInterval()
        })
      return fetch
    },
    search() {
      this.uid++
      this.pagination.pageIndex = 1
      return this.getData()
    },
    refresh() {
      // 刷新
      this.uid++
      return this.getData()
    },
    getData() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          if (typeof this.api === 'function') {
            this.loading = true
            this.fetch()
              .then(resolve)
              .catch(reject)
          } else {
            this.getLocalData()
            resolve()
          }
        })
      })
    },
    getLocalData() {
      this.total = this.tableData.length
      const data = [...this.tableData]
      const { pageIndex, pageSize } = this.pagination
      if (this.paginationable && data.length > pageSize) {
        const first = pageSize * (pageIndex - 1)
        const end = pageSize * pageIndex
        this.data = data.slice(first, end)
      } else {
        this.data = data || []
      }
    },
    handlePageChange(pageIndex) {
      this.uid++
      this.pagination.pageIndex = pageIndex
      this.clearSelection()
      this.getData()
    },
    handlePageSizeChange(pageSize) {
      this.uid++
      if (this.pagination.pageIndex !== 0) this.clearSelection()
      this.pagination.pageIndex = 1
      this.pagination.pageSize = pageSize
      this.getData()
    },
    clearSelection() {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection(...args) {
      this.$refs.table.toggleRowSelection(...args)
    },
    toggleAllSelection(...args) {
      this.$refs.table.toggleAllSelection(...args)
    },
    toggleRowExpansion(...args) {
      this.$refs.table.toggleRowExpansion(...args)
    },
    setCurrentRow(...args) {
      this.$refs.table.setCurrentRow(...args)
    },
    clearSort(...args) {
      this.$refs.table.clearSort(...args)
    },
    clearFilter(...args) {
      this.$refs.table.clearFilter(...args)
    },
    doLayout(...args) {
      this.$refs.table.doLayout(...args)
    },
    sort(...args) {
      this.$refs.table.sort(...args)
    }
  },
  render(h) {
    let pagination = null
    const { pageIndex, pageSize } = this.pagination
    if (this.paginationable) {
      pagination = (
        <el-pagination
          class="plh-pagination"
          background={true}
          total={this.total}
          page-size={pageSize}
          current-page={pageIndex}
          page-sizes={this.pageSizes}
          layout="total, sizes, prev, pager, next, jumper"
          on-current-change={this.handlePageChange}
          on-size-change={this.handlePageSizeChange}
        />
      )
    }
    return (
      <div class="plh-table">
        <el-table
          ref="table"
          v-loading={this.loading}
          data={this.data}
          size={this.size}
          attrs={this.$attrs}
          on-select={(...args) => {
            this.$emit('select', ...args)
          }}
          on-select-all={(...args) => {
            this.$emit('select-all', ...args)
          }}
          on-selection-change={(...args) => {
            this.$emit('selection-change', ...args)
          }}
          on-cell-mouse-enter={(...args) => {
            this.$emit('cell-mouse-enter', ...args)
          }}
          on-cell-mouse-leave={(...args) => {
            this.$emit('cell-mouse-leave', ...args)
          }}
          on-cell-click={(...args) => {
            this.$emit('cell-click', ...args)
          }}
          on-cell-dblclick={(...args) => {
            this.$emit('cell-dblclick', ...args)
          }}
          on-row-click={(...args) => {
            this.$emit('row-click', ...args)
          }}
          on-row-contextmenu={(...args) => {
            this.$emit('row-contextmenu', ...args)
          }}
          on-row-dblclick={(...args) => {
            this.$emit('row-dblclick', ...args)
          }}
          on-header-click={(...args) => {
            this.$emit('header-click', ...args)
          }}
          on-header-contextmenu={(...args) => {
            this.$emit('header-contextmenu', ...args)
          }}
          on-sort-change={(...args) => {
            this.$emit('sort-change', ...args)
          }}
          on-filter-change={(...args) => {
            this.$emit('filter-change', ...args)
          }}
          on-current-change={(...args) => {
            this.$emit('current-change', ...args)
          }}
          on-expand-change={(...args) => {
            this.$emit('expand-change', ...args)
          }}
          on-header-dragend={(...args) => {
            this.$emit('header-dragend', ...args)
          }}>
          {this.columns.map((item, index) => {
            const render = item.render
              ? props => item.render(this.$parent ? this.$parent.$createElement : h, props)
              : null
            return (
              <el-table-column
                label={item.title}
                prop={item.key}
                attrs={item}
                props={item}
                formatter={item.format || this.formatter}>
                {render}
              </el-table-column>
            )
          })}
        </el-table>
        {pagination}
      </div>
    )
  }
}
</script>
<style lang="stylus">
.plh-table {
  width: 100%;

  .el-table__header, .el-table__footer, .el-table__body {
    margin: 0;
  }
}

.plh-pagination {
  margin: 20px 0 10px 0;
  padding: 0;
  text-align: right;

  &.is-background .el-pager li {
    color: #8a92a5;
    font-weight: normal;
  }
}
</style>
