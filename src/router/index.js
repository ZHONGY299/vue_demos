import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Dirs from '@/components/Dirs'
import DataBind from '@/components/DataBind'
import EventDeal from '@/components/EventDeal'
import StyleDemo from '@/components/StyleDemo'
import ComputeDemo from '@/components/ComputeDemo'
import WatchDemo from '@/components/WatchDemo'
import AjaxDemo from '@/components/AjaxDemo'
import AjaxDemo1 from '@/components/AjaxDemo1'
import UseMixin from '@/components/UseMixin'
import Child from '@/components/Child'
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
    },
    {
      path: '/styledemo',
      name: 'StyleDemo',
      component: StyleDemo
    },
    {
      path: '/computed',
      name: 'ComputeDemo',
      component: ComputeDemo
    },
    {
      path: '/watch',
      name: 'WatchDemo',
      component: WatchDemo
    },
    {
      path: '/ajaxdemo',
      name: 'AjaxDemo',
      component: AjaxDemo
    },
    {
      path: '/ajaxdemo1',
      name: 'AjaxDemo1',
      component: AjaxDemo1
    },
    {
      path: '/mixin',
      name: 'UseMixin',
      component: UseMixin
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    }
  ]
})
