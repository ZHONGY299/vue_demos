<template>
<div>
<table>

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
    let that = this
    this.$axios({
      url: 'http://localhost:3000/api/user',
      method: 'get'
    }).then((resp) => {
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
