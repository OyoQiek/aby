import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
//引入mint-ui组件库的样式
import 'mint-ui/lib/style.css'
//引入字体图标
import './font/iconfont.css'
import 'swiper/dist/css/swiper.css'

// axios.defaults.baseURL="http://127.0.0.1:3000/"
// axios.defaults.withCredentials=true
Vue.use(MintUI)
// Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
