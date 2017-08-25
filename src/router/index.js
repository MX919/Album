import Vue from 'vue'
import Router from 'vue-router'

import Hoom from '@/components/router/Hoom'
import Class from '@/components/router/Class'
import My from '@/components/router/My'
import Mi from '@/components/router/Mi'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hoom',
      component: Hoom
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/mi',
      component: Mi
    },
    {
      path: '*',
      component: Hoom
    } 
  ],
    linkActiveClass:'active'
})
