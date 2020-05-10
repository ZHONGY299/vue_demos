<template>
<div>
    {{$store.state.hello}}
    <button @click="getVuexState">获取store的state值</button>
    <h1>{{$store.state.name}}</h1>
    <button @click="changeName('ZHONGY')">改变Name</button>
    <h2>{{$store.state.hello}}</h2>
    <button @click="changeHello('this is a news!')">改变hello</button>
    <button @click="changeTwo({'newName':'jack','newHello':'News Message!'})">改变两个</button>
    <button @click="changeTwos">改变两个</button>
    {{$store.state.address}}
    <button @click="addAddress">添加</button>
    <button @click="deleteAddress">删除</button>
    <h3>getters</h3>
    {{this.$store.getters.getPerson}}<br>
    {{this.$store.getters.getAll}}<hr>
    <h3>调用action</h3>
    <button @click="aChangeName">调用action</button><br>
    <button @click="ajax">调用ajax</button>
    {{this.$store.state.users}}<br>
    <table>
      <tr>
        <td>name:</td>
        <td>password:</td>
      </tr>
      <!-- <tr v-for="p in this.$store.state.users" :key="p.username"> -->
      <tr v-for="(p,index) in this.$store.state.users" :key="index">
        <td>{{p.username}}</td>
        <td>{{p.userpwd}}</td>
      </tr>
    </table>
    <h2>多个模块</h2>
    {{$store.state.a.privince}}
    {{$store.state.b.privince}}
    {{$store.state.c.privince}}
    <button @click="changeA">改变模块A的值</button>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getVuexState: function () {
      alert(this.$store.state.hello)
    },
    changeName: function (newName) {
      this.$store.commit('edit', newName)
    },
    changeHello: function (newHello) {
      this.$store.commit('changeHello', newHello)
    },
    changeTwo: function (payload) {
      this.$store.commit('setEdit', payload)
    },
    changeTwos: function () {
      this.$store.commit({
        type: 'setEdits',
        payload: {
          'newName': 'TomAndJack',
          'newHello': 'ASDFGHJKL'
        }
      })
    },
    addAddress: function () {
      this.$store.commit('add', '陕西汉中')
    },
    deleteAddress: function () {
      this.$store.commit('delete')
    },
    aChangeName: function () {
      this.$store.dispatch('editAction', 'Lisa')
    },
    ajax: function () {
      this.$store.dispatch('addUsersAction', [])
    },
    changeA: function () {
      this.$store.commit('changePrivince', '陕西西安')
    }
  },
  // 计算属性
  computed: {

  },
  // 观察
  watch: {

  },
  // 生命周期 --创建完成(访问当前this实例)
  created () {

  },
  // 生命周期 --挂载完成(访问DOM元素)
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); //引入CSS类 */
</style>
