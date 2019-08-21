import Vue from 'vue'
import Router from 'vue-router'
import HDetail from './views/detail/HDetail'
import Story from './views/story.vue'
import Abstract from "./components/hdetail/abstract"
import Sdetal from './views/Sdetal.vue'
import Remark from './components/hdetail/remark'
import HServer from './components/hdetail/server'
import Home from './views/index.vue'
import Reserve from './components/hdetail/reserve'
import Wish from './views/Wish.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/HDetail/:hid",component:HDetail,props:true},
    {path:'/Story',component:Story},
    {path:"/HDetail/abstract/:hid",component:Abstract,props:true},
    {path:'/Sdetal',component:Sdetal},
    {path:"/HDetail/remark/:hid",component:Remark,props:true},
    {path:"/HDetail/server",component:HServer},
    {path:"/Home",component:Home},
    {path:"/HDetail/reserve",component:Reserve},
    {path:"/Wish",component:Wish},
    {path:"/Login",component:Login},
    {path:"/Register",component:Register},
    {path:"/HDetail/reserve/:message",component:Reserve,props:true},
  ]
})
