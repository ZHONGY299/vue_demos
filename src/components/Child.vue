<template>
<div>
    <h1>这是一个子组件Child</h1>
    {{title}}
    {{name}}<hr>
    name:{{name}}<br>
    age:{{age}}<br>
    没有赋值采用默认值default:{{person.name}}<br>
    hobbies:{{hobbies[2]}}
</div>
</template>

<script>
export default {
//   props: ['title', 'name'],
//   props: {
//     title: String,
//     name: String,
//     age: Number,
//     person: Object,
//     fn: Function,
//     hobbies: Array

//   },
  props: {
    // 调用时如果没有赋值就采用默认值
    title: {
      type: String,
      default: 'this is a title'
    },
    name: {
      type: String,
      default: 'this is a name',
      // 必须要有
      required: true
    },
    age: {
      type: Number,
      default: 20
    },
    person: {
      type: Object,
      default: () => {
        return {
          name: 'goods',
          age: 10,
          address: '陕西'
        }
      }
    },
    hobbies: {
      type: Array,
      default: () => {
        return ['1', '2', '3', '4', '5']
      }
    },
    fn: {
      type: String,
      default: 'this is a title'
    }
  },
  data () {
    return {

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
