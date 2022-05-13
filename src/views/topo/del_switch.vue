<template>
<div class="container-fluid">
  <label for="name">请输入要删除的交换机名</label>
  <input type="text" v-model="name">
  <p></p>
  <button class="btn btn-success" @click="sub">提交</button>
</div>
</template>

<script>
import {delSwitch} from "../../api/topo";

export default {
  name: "del_switch",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    sub() {
      delSwitch(this.name).then(res => {
        if (res.status === 200) {
          window.alert('删除成功！')
        }
      }).catch(() => {
        window.alert('删除失败！请检查输入是否正确')
      })
    }
  }
}
</script>

<style scoped>

</style>
