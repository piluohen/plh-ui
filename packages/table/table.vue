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
      type: String
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
  watch: {
    tableData(val) {
      this.getLocalData()
    }
  },
  mounted() {
    this.search()
  },
  destroyed() {
    clearTimeout(this.timer)
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
    clearSelection() {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection(...args) {
      this.$refs.table.toggleRowSelection(...args)
    },
    setCurrentRow(...args) {
      this.$refs.table.setCurrentRow(...args)
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
    handledbClick(row) {
      this.$emit('dbClick', row)
    },
    handleSelectionChange(...args) {
      this.$emit('selection-change', ...args)
    },
    currentChange(...args) {
      this.$emit('current-change', ...args)
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
          v-loading={this.loading}
          ref="table"
          attrs={this.$attrs}
          size={this.size}
          data={this.data}
          on-current-change={this.currentChange}
          on-row-dblclick={this.handledbClick}
          on-selection-change={this.handleSelectionChange}>
          {this.columns.map((item, index) => {
            const render = item.render
              ? props => item.render(this.$parent ? this.$parent.$createElement : h, props)
              : null
            return (
              <el-table-column
                key={item.key}
                prop={item.key}
                width={item.width}
                min-width={item.minWidth}
                type={item.type}
                label={item.title}
                render-header={item.renderHeader}
                formatter={item.format || this.formatter}
                fixed={item.fixed}
                align={item.align}
                selectable={item.selectable}
                reserve-selection={item.reserveSelection}
                show-overflow-tooltip={item.showOverflowTooltip === false ? item.showOverflowTooltip : true}>
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
  .el-table__header,
  .el-table__footer,
  .el-table__body {
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
