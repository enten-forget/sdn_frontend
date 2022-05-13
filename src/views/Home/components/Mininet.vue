<template>
  <div>
    <el-card>
      <el-container>
        <el-header class="bg-purple">
          <h3 >Mininet控制面板</h3>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'default_topo'}" @click.native="watch_topo">导入默认拓扑</router-link>
              <!--导入默认拓扑的路由，绑定了一个watch_topo方法去发送请求，@click.native可以直接监听vue组件的根元素的原生事件，如果直接用@click不会生效-->
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'add_host'}">增加主机</router-link>
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'add_switch'}">添加交换机</router-link>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'add_link'}">添加链路</router-link>
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'del_link'}">删除链路</router-link>
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'del_host'}">删除主机</router-link>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'del_switch'}">删除交换机</router-link>
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'start_net'}" @click.native="change_flag">建立拓扑</router-link>
            </el-col>
            <el-col :span="8">
              <router-link class="el-button" :to="{name:'update_topo'}">导入拓扑文件生成拓扑图</router-link>
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
  name: "Mininet",
  data(){
    return{

    }
  },
  methods:{
    watch_topo() {
      //由于组件会跟着组件一起加载，所以请求方法直接写在首页里面。这样点击按钮的时候就可以同时调用请求方法
      watchTopo().then(res => {
        if (res.status === 200) {
          this.$store.commit('change_flag', 1)
          //  这里使用store传参给目标路由default_topo决定显示什么页面，成功的时候flag为1，页面显示成功
        }
      }).catch(() => {
        this.$store.commit('change_flag', 2)
        //失败了flag为2，页面显示失败
      })
    },
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

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
