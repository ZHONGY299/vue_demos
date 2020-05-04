<template>
<div>
    <select name="" id="province" v-model="p">
        <option v-for="p1 in provinces" :key="p1" :value="p1">
            {{p1}}
        </option>
    </select>
     <select name="" id="city">
        <option v-for="city in citys" :key="city" :value="city">
            {{city}}
        </option>
    </select>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: {},
      provinces: [],
      citys: [],
      p: ''
    }
  },
  methods: {

  },
  // 计算属性
  computed: {

  },
  // 观察
  watch: {
    p: function () {
      this.ajaxData.forEach(function (courrentValue, index, arr) {
        for (let key in courrentValue) {
          if (key === this.p) {
            this.citys = courrentValue[key]
            break
          }
        }
      }, this)
    }
  },
  // 生命周期 --创建完成(访问当前this实例)
  created () {

  },
  // 生命周期 --挂载完成(访问DOM元素)
  mounted () {
    this.$axios({
      url: 'http://localhost:3000/api/province',
      method: 'get'
    }).then((resp) => {
      console.log(resp.data)
      this.ajaxData = resp.data
      for (var t = 0; t < this.ajaxData.length; t++) {
        console.log(this.ajaxData[t])
        for (let key in this.ajaxData[t]) {
          console.log(key)
          this.provinces.push(key)
        }
      }
      // 设置默认第二个下拉列表框
      for (let key in this.ajaxData[0]) {
        this.citys = this.ajaxData[0][key]
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
/* @import url(); //引入CSS类 */
</style>
