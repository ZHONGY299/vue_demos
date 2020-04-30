<template>
<div>
    <div id="a" v-bind:class="{'blue':isblue,'b':isred}"></div>
    <button @click="change_bg_color">改变背景颜色</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      blue: 'blue',
      b: 'b',
      isblue: true,
      isred: false
    }
  },
  methods: {
    change_bg_color: function () {
      this.isblue = !this.isblue
      this.isred = !this.isred
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
#a{
    width: 300px;
    height: 300px
}
.b{
    background: blueviolet
}
.blue{
    background: blue
}
</style>
