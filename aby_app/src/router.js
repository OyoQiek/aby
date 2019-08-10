import Vue from 'vue'
import Router from 'vue-router'
import HDetail from './views/detail/HDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/HDetail",component:HDetail}
  ]
})
