// 1.导入Vuex模块
import Vue from 'vue'
import Vuex from 'Vuex'
// 2.在Vue中使用Vuex
Vue.use(Vuex)
// 3.创建Vuex对象
const store = new Vuex.Store({
  state: {
    hello: 'hello,Vuex!'
  }
})
// 4.导出Vuex对象
export default store
