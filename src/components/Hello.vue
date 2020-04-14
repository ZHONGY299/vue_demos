<template>
    <div>
        <h1>this is a frist page!</h1>
        <h2>{{message}}</h2>
        <h3>{{hobbies[2]}}</h3>
        <button @click="sayhello">sayhello</button>
        <button @click="changeMessage('Web前端')">改变数据</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello,vue.js!',
      hobbies: ['爬山', '跑步', '游泳']
    }
  },
  methods: {
    sayhello: function () {
      alert('hello.vue.js!')
    },
    changeMessage: function (newMessage) {
      this.message = newMessage
      console.log(this.message)
    }
  }
}
</script>
<style scoped>
  h1{
    font-size: 30px;
    color: red;
  }
</style>
