<template>
  <div>
    <!-- my-logo中使用组件 -->
    <my-logo></my-logo>
    <h1 ref="hello">this is a frist page!</h1>
    <h2>{{message}}</h2>
    <h3>{{hobbies[2]}}</h3>
    {{message.split('').reverse().join('')}}
    {{message.substr(2,3)}}<br/>
    {{isShow?true:false}}
    <button @click="sayhello">sayhello</button>
    <button @click="changeMessage('Web前端')">改变数据</button>
  </div>
</template>
<script>
// 引入Logo组件
import MyLogo from '@/components/Logo'
export default {
  // 在components声明组件
  components: {
    MyLogo: MyLogo
  },
  data () {
    return {
      message: 'hello,vue.js!',
      hobbies: ['爬山', '跑步', '游泳'],
      isShow: false
    }
  },
  address: '陕西汉中',
  methods: {
    sayhello: function () {
      alert('hello.vue.js!')
    },
    changeMessage: function (newMessage) {
      this.message = newMessage
      console.log(this.message)
      console.log(this.$el)
      console.log(this.$data)
      console.log(this.$data['message'])
      console.log(this.$options)
      this.$options.methods['sayhello']()
      console.log(this.$options.address)
      console.log(this.$refs.hello)
      console.log(this.$parent)
      console.log(this.$children)
      console.log(this.$root)
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 30px;
  color: red;
}
</style>
