<template>
<div>
    <select name="" id="province">
        <option value="" v-for="p in province" v-bind:key="p">
            {{p}}
        </option>
    </select>
    <select name="" id="city">
        <option value="" v-for="p in ajaxData" v-bind:key="p">
            {{p}}
        </option>
    </select>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: {},
      province: [],
      city: []
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
      url: 'http://localhost:3000/api/provincep',
      method: 'get'
    }).then((resp) => {
      this.ajaxData = resp.data
      for (var t = 0; t < this.ajaxData.length; t++) {

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
