<template>
  <div>
    <!--标题组件-->
    <sdntitle></sdntitle>
    <div v-if="flag">
      <mininet></mininet>
    </div>
    <div v-else>
      <ryu></ryu>
    </div>
    <el-card>
      <!--路由显示面板-->
      <div>
        <h3>操作面板</h3>
      </div>
      <div>
        <router-view name="panel"></router-view>
      </div>
    </el-card>
  </div>
</template>

<script>
import sdntitle from "./components/SDNTitle.vue";
import mininet from "./components/Mininet.vue";
import ryu from "./components/Ryu.vue";
import {changePanel, watchTopo} from "../../api";
export default {
  name: 'home',
  components: {
    sdntitle,
    mininet,
    ryu
  },
  data() {
    return {
      flag : this.$store.flag,
      //控制ryu和mininet切换的面板的标记
      context: {}
    }
  },
  methods: {
  },

}
</script>

<style>
.column {
  margin: 0 0 5px 0;
  /*  给所有按钮一个间距，看起来比较美观
      否则会挤在一起*/
}
.el-card{
  margin-bottom: 20px;
}
</style>
