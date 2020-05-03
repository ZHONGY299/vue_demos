<template>
<div>
    <input type="text" v-bind:value="message"><br>
    <input type="text" v-model="message"><br>
    {{reverseString}}<br>
    {{reverseString11()}}<br>
    {{site}}<br>
    <button @click="setsite">163</button>
    <button @click="site='google https://www.google.com'">google</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'vue.js is a MVVM frontend framewrok!',
      name: 'baidu',
      url: 'https://www.baidu.com'
    }
  },
  methods: {
    reverseString11: function () {
      return this.message.split('').reverse().join('')
    },
    setsite: function () {
      // set方法调用重新赋值
      this.site = '163 https://www.163.com'
    }
  },
  computed: {
    reverseString: function () {
      return this.message.split('').reverse().join('')
    },
    // 如果没有就是默认，需要赋值就调用set方法
    site: {
      // 要有返回值
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function (newDate) {
        let arrayOne = newDate.split(' ')
        this.name = arrayOne[0]
        this.url = arrayOne[1]
      }
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
</style>
