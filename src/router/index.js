import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: pos
    }
  ]
})
