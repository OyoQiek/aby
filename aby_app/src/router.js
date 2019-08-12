import Vue from 'vue'
import Router from 'vue-router'
import Story from './views/Story.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Story',component:Story}
  ]
})
