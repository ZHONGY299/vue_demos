<template>
<div>
  <h1>Vue.js通过Axios实现Ajax</h1>
<table>
  <tr>
    <td>用户名</td>
    <td>用户密码</td>
  </tr>
  <tr v-for="p in ajaxData" :key="p.username">
    <td>{{p.username}}</td>
    <td>{{p.userpwd}}</td>
  </tr>
</table>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: []
    }
  },
  methods: {

  },
  // 生命周期 --创建完成(访问当前this实例)
  created () {

  },
  // 生命周期 --挂载完成(访问DOM元素)
  mounted () {
    console.dir(this)
    let that = this
    this.$axios({
      url: 'http://localhost:3000/api/user',
      method: 'get'
    }).then((resp) => {
      console.log(resp.data)
      that.ajaxData = resp.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
/* @import url(); //引入CSS类 */
</style>
