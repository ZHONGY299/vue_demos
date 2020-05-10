// 1.导入Vuex模块
import Vue from 'vue'
import Vuex from 'Vuex'
import axios from 'axios'
// 2.在Vue中使用Vuex
Vue.use(Vuex)
// 定义多个模块
const moduleA = {
  state: {
    privince: '陕西汉中'
  },
  mutations: {
    changePrivince (state, newPrivince) {
      state.privince = newPrivince
    }
  }
}
const moduleB = {
  state: {
    privince: '河南郑州'
  }
}
const moduleC = {
  state: {
    privince: '四川成都'
  }
}
// 3.创建Vuex对象
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC
  },
  state: {
    hello: 'hello,Vuex!',
    count: 10,
    age: 20,
    name: 'ZY',
    users: []
  },
  mutations: {
    // edit: function (state, newName) {
    //   state.name = newName
    // }
    edit (state, newName) {
      state.name = newName
    },
    changeHello: function (state, newHello) {
      state.hello = newHello
    },
    setEdit: function (state, payload) {
      state.name = payload.newName
      state.hello = payload.newHello
    },
    setEdits (state, payload) {
      state.name = payload.payload.newName
      state.hello = payload.payload.newHello
    },
    add (state, address) {
      Vue.set(state, 'address', address)
    },
    delete (state) {
      Vue.delete(state, 'address')
    },
    addUsers (state, payload) {
      state.users = payload
    }
  },
  getters: {
    getPerson: function (state) {
      return state.name + ' ' + state.age
    },
    getAll: function (state, getters) {
      return state.hello + ' ' + getters.getPerson
    }
  },
  actions: {
    // 3秒钟后修改Name的值
    editAction (context, newName) {
      setTimeout(() => {
        context.commit('edit', newName)
      }, 3000)
    },
    // payload可有可无
    addUsersAction (context, payload) {
      axios({
        url: 'http://localhost:3000/api/user',
        method: 'get'
      }).then((resp) => {
        console.log(resp.data)
        context.commit('addUsers', resp.data)
      })
    }
  }
})
// 4.导出Vuex对象
export default store
