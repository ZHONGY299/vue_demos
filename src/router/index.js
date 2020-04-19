import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Dirs from '@/components/Dirs'
import DataBind from '@/components/DataBind'
import EventDeal from '@/components/EventDeal'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dirs',
      name: 'Dirs',
      component: Dirs
    },
    {
      path: '/databind',
      name: 'DataBind',
      component: DataBind
    },
    {
      path: '/eventdeal',
      name: 'EventDeal',
      component: EventDeal
    }
  ]
})
