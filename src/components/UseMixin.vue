<template>
<div>
    <h1>在组建中使用混合Mixin</h1>
    <button @click="sayhello">使用Minin</button>
    <h1>在父组件中使用子组件</h1>
    <h2>1.引入子组件</h2>
    <h2>2.声明子组件</h2>
    <h2>3.使用子组件</h2>
    <!-- 调用子组件时必须要有一个name不然会报错 -->
    <my-Child :title="parentTitle" :name="ZYY" :age=15 :hobbies="['1','2','3','4','5','6']"></my-Child>
</div>
</template>

<script>
// 导入模块
import commonHi from '@/mixins/common_hi'
// 导入子组件
import Child from '@/components/Child'
export default {
  // 声明使用哪个组合类
  mixins: [commonHi],
  // 声明当前父组件中使用了那些子组件
  components: {
    MyChild: Child
  },
  data () {
    return {
      parentTitle: 'this is a parentTitle',
      ZYY: 'this is name!'
    }
  },
  methods: {

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
