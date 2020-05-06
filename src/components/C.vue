<template>
<div class="c">
    <h1>C组件</h1>
    <p>$attrs:{{$attrs}}</p>
    {{CChild}}
    <button @click="CToA">向A组件发送数据</button>
</div>
</template>

<script>
export default {
  props: ['CChild'],
  inheritAttrs: false,
  data () {
    return {

    }
  },
  methods: {
    CToA: function () {
    //   alert('CToA')
      this.$emit('getCData', 'C组件发送给A组件的数据')
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
.c{
    width: 300px;
    height: 300px;
    border:1px solid gray
}
</style>
