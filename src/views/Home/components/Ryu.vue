<template>
  <div>
    <el-card>
      <el-container>
        <el-header class="bg-purple">
          <h3>Ryu控制面板</h3>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="8">
              <router-link :to="{name:'watchtopo'}" class="el-button">查看当前拓扑图</router-link>
              <!--导入默认拓扑的路由，绑定了一个watch_topo方法去发送请求，@click.native可以直接监听vue组件的根元素的原生事件，如果直接用@click不会生效-->
            </el-col>
            <el-col :span="8">
              <router-link :to="{name:'watchrouter'}" class="el-button">查看拓扑中的交换机与流表</router-link>
            </el-col>
            <el-col :span="8">
              <router-link :to="{name:'add_flow'}" class="el-button">添加流表项</router-link>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <router-link :to="{name:'add_flow_by_file'}" class="el-button" >以文件形式提交流表项</router-link>
            </el-col>
            <el-col :span="8">
              <router-link :to="{name:'delete_flow_by_id'}" class="el-button" >删除指定交换机的所有流表</router-link>
            </el-col>
            <el-col :span="8">
              <router-link :to="{name:'default_route'}" class="el-button"  @click.native="change_flag">返回</router-link>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
import {changePanel, watchTopo} from "../../../api";

export default {
  name: "Ryu",
  data(){
    return{

    }
  },
  methods:{
    change_flag() {
      //控制显示Mininet还是Ryu面板
      if (this.flag === true) {
        changePanel().catch(() => {
          window.alert('创建失败！请重启拓扑Python文件')
          //如果创建失败就返回上一级路由
          this.$router.go(-1)
          this.flag = true
        })
      }
      this.flag = !this.flag
    }

  }
}
</script>

<style scoped>

</style>
