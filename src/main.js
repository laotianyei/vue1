import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局控制css样式文件
import './assets/css/global.css'

// 引入icon图标库样式文件
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'

// ESLint规范要求，import 需要在文件最前边设置
// 引入elementui组件库
import ElementUI from 'element-ui'
// 注册组件
Vue.use(ElementUI)

// 给axios做配置
axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1/'
Vue.prototype.$http = axios

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
