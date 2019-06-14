import Vue from 'vue'
import App from './App'

// 引入MinRouter文件
import MinRouter from './MinRouter'
// 引入router文件
import minRouter from './router'
import mina from './components/min-a.vue'

Vue.config.productionTip = false

// 注册插件
Vue.use(MinRouter)

Vue.component('min-a', mina)

App.mpType = 'app'

const app = new Vue({
    ...App,
    minRouter
})
app.$mount()
