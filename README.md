创建router.js文件

```
import MinRouter from './MinRouter'

// 配置路由
import MinRouter from './MinRouter'

// 配置路由
const router = new MinRouter({
	routes: [
		{
			// 页面路径
      path: 'pages/index/index',
      // type必须是以下的值['navigateTo', 'switchTab', 'reLaunch', 'redirectTo']
      // 跳转方式(默认跳转方式)
			type: 'navigateTo',
			name: 'index'
		},
		{
			path: 'pages/my/index',
			name: 'my'
		}
	] 
})

export default router
```

在main.js文件

```
import Vue from 'vue'
import App from './App'

// 引入MinRouter文件
import MinRouter from './MinRouter'
// 引入router文件
import minRouter from './router'

Vue.config.productionTip = false

// 注册插件
Vue.use(MinRouter)

App.mpType = 'app'

const app = new Vue({
    ...App,
    minRouter
})
app.$mount()
```

创建min-a组件

```
<template>
  <div @click="openPage">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: true
    }
  },
  methods: {
    openPage () {
      this.$openPage(this.to)
    }
  }
}
</script>
```

在main文件添加如下代码

```
import mina from './components/min-a.vue'
Vue.component('min-a', mina)
```

具体用法

```
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<button @click="toPage">跳转到我的页面</button>
		<min-a to="my">跳转到我的页面min-a标签跳转</min-a>
		<min-a :to="{name: 'my', query: {id: 123}}">跳转到我的页面min-a标签跳转带参数</min-a>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index'
			}
		},
		onLoad() {
			// 解析路由参数
			console.log(this.$parseURL())
		},
		methods: {
			toPage () {
				// 跳到my的页面  query是传递的参数
				this.$openPage({
					name: 'my',
					query: {id: 123}
				})
			}
		}
	}
</script>
```



```
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<button @click="toPage">跳转到首页页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'my'
			}
		},
		onLoad() {
			// 解析路由参数
			console.log(this.$parseURL())
		},
		methods: {
			toPage () {
				// 跳到index的页面
				// 不传参数可以简写成如下
				this.$openPage('index')
			}
		}
	}
</script>
```

