<template>
<div>
    <span>千米</span><input type="text" v-model="kilometers"><br>
    <span>米</span><input type="text" v-model="meters"><br>
</div>
</template>

<script>
export default {
  data () {
    return {
      kilometers: 0,
      meters: 0
    }
  },
  methods: {

  },
  // 计算属性
  computed: {

  },
  watch: {
    kilometers: function (value) {
      this.kilometers = value
      this.meters = value * 1000
    },
    meters: function (value) {
      this.meters = value
      this.kilometers = value / 1000
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
