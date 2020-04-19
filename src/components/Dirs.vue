<template>
<div>
  <h1>Vue中系统指令学习</h1>
  <!-- 字符串处理 -->
  <div v-text="message"></div>
  <!-- 会解析里面的标签 -->
  <div v-html="message"></div>
  <div v-if="age>20">
    大于二十显示
  </div>
  <div v-if="isshow">
    当isshow为true的时候，这个div显示
  </div>
  <hr/>
  <!-- 可简写为:href="" -->
  <a v-bind:href="baidu">baidu</a>
  <!-- v-bind可简写为： -->
  <p v-bind:class="bb">this is a tag!</p>
  <p v-bind:class="[aa,cc]">this is a tag111!</p>
  <hr>
  <h3>双向数据绑定</h3>
  <table>
    <tr>
      <td>请输入用户名：</td>
      <td><input type="text" v-model="username"></td>
    </tr>
    <tr>
      <td>用户名：</td>
      <td>{{username}}</td>
    </tr>
  </table>
  <div>
    <ul>
      <li v-for="item in hobbies" v-bind:key="item">
        {{item}}
      </li>
      <!-- item是遍历的项，index是遍历的下标值 -->
      <li v-for="(item,index) in hobbies" v-bind:key="index">
       {{item}} {{index}}
      </li>
      <li v-for="item in person" v-bind:key="item">
        {{item}}
      </li>
      <li v-for="(value,key) in person" v-bind:key="key">
      {{key}}:{{value}}
      </li>
      <!-- <li v-for="(value,key,index) in person" v-bind:key="key">
      {{key}}:{{value}} {{index}}
      </li> -->
      <!-- <li v-for="n in 10" v-bind:key="n">
        {{n}}
      </li> -->
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: '<h1 class="a">v-html和v-text之间的区别</h1>',
      isshow: false,
      age: 21,
      hobbies: ['爬山', '跑步', '游泳', '跳高'],
      person: {'name': '刘华', 'age': 20},
      baidu: 'http://www.baidu.com',
      aa: 'a',
      bb: 'b',
      cc: 'c',
      username: '张三'
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
<style>
/* @import url(); //引入CSS类 */
.a{
  color: red;
}
.b{
  color: blue;
}
.c{
  border: 1px solid yellowgreen;
}
li{
  list-style-type: none;
}
</style>
