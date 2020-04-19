<template>
<div>
    <h3>学习VUE中双向数据绑定</h3>
    <input type="text" v-model="username"/><br/>
    显示data中的username：{{username}}<br/>
    <button @click="change_username">改变data数据</button><br>
    <input type="text" v-model="person.username"/><br/>
    显示data中的username：{{person.username}}<br/>
    <button @click="change_user">改变data数据</button><br>
    <h3>单选按钮</h3>
    <label for="">女</label>
    <input type="radio" value="famale" v-model="person.gender">
    <label for="">男</label>
    <input type="radio" value="male" v-model="person.gender">
    <h3>多选按钮</h3>
    <input type="checkbox" value="游泳" v-model="person.hobbies">游泳
    <input type="checkbox" value="爬山" v-model="person.hobbies">爬山
    <input type="checkbox" value="跑步" v-model="person.hobbies">跑步
    <input type="checkbox" value="玩游戏" v-model="person.hobbies">玩游戏
    <h3>下拉列表框</h3>
    <select name="" id="" v-model="person.identity">
        <option value="请选择">请选择</option>
        <option value="教师">教师</option>
        <option value="警察">警察</option>
        <option value="消防员">消防员</option>
        <option value="学生">学生</option>
    </select>
    <h3>显示个人信息</h3>
    username:{{person.username}}<br/>
    gender:{{person.gender}}<br/>
    hobbies:{{person.hobbies}}<br/>
    identity:{{person.identity}}<br>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: 'ZY',
      person: {
        username: '张三',
        gender: 'male',
        hobbies: ['游泳', '爬山', '跑步', '玩游戏'],
        identity: '消防员'
      }
    }
  },
  methods: {
    change_username: function () {
      // eslint-disable-next-line no-unused-expressions
      this.username = 'Jack'
    },
    change_user: function () {
      this.person.username = '李四'
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
