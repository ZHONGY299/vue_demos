<template>
<div>
    <select name="" id="province" @change="getProvince">
        <option v-for="p in provinces" v-bind:key="p" :value="p">
            {{p}}
        </option>
    </select>
    <select name="" id="city">
        <option v-for="city in citys" v-bind:key="city" :value="city">
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
      citys: []
    }
  },
  methods: {
    getProvince: function () {
      console.log(document.getElementById('province').value)
      let provinceName = document.getElementById('province').value
      for (let index = 0; index < this.ajaxData.length; index++) {
        for (let key in this.ajaxData[index]) {
          if (key === provinceName) {
            this.citys = this.ajaxData[index][key]
            console.info(this.citys)
            break
          }
        }
      }
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
