<template>
<div class="a">
    <h1>A组件</h1>
    <my-b :BChild="BChild" :CChild="CChild" v-on:getCData="AGetCData"></my-b>
    {{ReceivedC}}
</div>
</template>

<script>
import B from '@/components/B'
export default {
  components: {
    MyB: B
  },
  data () {
    return {
      BChild: 'A组件传递给B组件',
      CChild: 'A组件传递给C组件',
      ReceivedC: ''
    }
  },
  methods: {
    AGetCData: function (data) {
      console.log('AGetCData:' + data)
      this.ReceivedC = data
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
.a{
    width: 900px;
    height: 900px;
    border: 1px solid red
}
</style>
