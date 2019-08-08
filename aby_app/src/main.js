import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import MintUI from 'mint-ui'

axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
Vue.use(MintUI)
=======
import axios from 'axios'
import MintUI from 'mint-ui'
//引入mint-ui组件库的样式
import 'mint-ui/lib/style.css'
//引入字体图标
import './font/iconfont.css'
axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true
Vue.use(MintUI)
Vue.use(axios)
>>>>>>> 8421a15221b15b96d536b1e6d91626c7e2af2693
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
