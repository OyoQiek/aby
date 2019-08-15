import Vue from 'vue'
import Router from 'vue-router'
import HDetail from './views/detail/HDetail'
import Story from './views/story.vue'
<<<<<<< HEAD
import Abstract from "./components/hdetail/abstract"
=======
import Sdetal from './views/Sdetal.vue'
>>>>>>> wocao
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/HDetail",component:HDetail},
    {path:'/Story',component:Story},
<<<<<<< HEAD
    {path:"/HDetail/abstract",component:Abstract},
=======
    {path:'/Sdetal',component:Sdetal},
>>>>>>> wocao
  ]
})
