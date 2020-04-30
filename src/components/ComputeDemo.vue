<template>
<div>
    <input type="text" v-bind:value="message"><br>
    <input type="text" v-model="message"><br>
    {{reverseString}}<br>
    {{reverseString11()}}
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'vue.js is a MVVM frontend framewrok!'
    }
  },
  methods: {
    reverseString11: function () {
      return this.message.split('').reverse().join('')
    }
  },
  computed: {
    reverseString: function () {
      return this.message.split('').reverse().join('')
    },
    site: {
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function () {

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
