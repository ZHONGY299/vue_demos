<template>
<div>
    <h1>在父组件中使用子组件</h1>
    <my-child class="parent" color="blue" :title="parentTitle" name="this is a no props!" v-on:listenToChildEvent="getChildData">
      <span>this is a parent!</span>
      <template v-slot:slot1>this is a slot1</template>
      <template v-slot:slot2>this is a slot2</template>
    </my-child>
    {{childData}}
</div>
</template>

<script>
// 导入子组件
import ChildComponent from '@/components/ChildComponent'
export default {
  // 声明
  components: {
    MyChild: ChildComponent
  },
  data () {
    return {
      parentTitle: 'this is a value!',
      childData: ''
    }
  },
  methods: {
    getChildData: function (data) {
      // alert(data)
      this.childData = data
    },
    changeSlotName: function () {
      if (this.slotname === 'a') {
        this.slotname = 'b'
      } else {
        this.slotname = 'a'
      }
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
    console.log(this.$el.children[1])
    console.log(this.$el.children[1].getAttribute('name'))
  }
}
</script>
<style scoped>
/* @import url(); //引入CSS类 */
</style>
