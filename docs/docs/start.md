# 开始使用

### 安装

```bash
## 安装 npm 包
npm i plh-ui -S
```

### 使用

```bash
## 项目引入css
import "plh-ui/lib/index/style.css";

## 项目main.js引入组件, 全局引入
import PlhUi from 'plh-ui'
Vue.use(PlhUi)
```

### 按需加载

1. 安装 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
2. babel.config.js 修改配置如下

```JS
// babel.config.js 配置
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: 'plh-ui',
        libraryDirectory: 'lib',
        style: name => {
          return `${name}/style.css`
        }
      },
      'plh-ui'
    ]
  ]
}
```

3. 组件按需引入

```JS
import Vue from 'vue'
import { Button } from 'plh-ui'

Vue.use(Button)
```
