import Vue from 'vue'
import App from './App'
import MinRouter from './utils/min-router'
import minRouter from './router'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MinRouter)

const app = new Vue({
  ...App,
  minRouter
})
app.$mount()
