<template>
<div>
    <button v-on:click="sayhello">sayhello</button>
    <button @click="sayhello">sayhello</button>
    <button @click="count+=1">count</button>
    <button @click.once="count+=1">count+1</button>
    <a @click="setMessage('hello',$event)" href="http://www.baidu.com">改变message</a>
    <a @click.prevent="set('hello')" href="http://www.baidu.com">baidu</a>
    {{message}}  {{count}}<br>
    <div class="a" @click.self="sayhello">
        <div class="b"></div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello,vue.js!',
      count: 1,
      a: 'a',
      b: 'a'
    }
  },
  methods: {
    sayhello: function (e) {
      alert('hello!')
      this.message = 'vue.js中的事件处理'
      console.dir(e.target)
      console.dir(e.target.tagName)
    },
    setMessage: function (message, e) {
      this.message = message
      e.preventDefault()
    },
    set: function (message) {
      this.message = message
    }
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
.a{
    width:300px;
    height:300px;
    background: yellowgreen;
}
.b{
    width:100px ;
    height:100px;
    background: yellow;
}
</style>
