import Vue from 'vue'
import Router from 'vue-router'
import HDetail from './views/detail/HDetail'
import Story from './views/story.vue'
import Abstract from "./components/hdetail/abstract"
import Remark from './components/hdetail/remark'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/HDetail",component:HDetail},
    {path:'/Story',component:Story},
    {path:"/HDetail/abstract",component:Abstract},
    {path:"/HDetail/remark",component:Remark},
  ]
})
