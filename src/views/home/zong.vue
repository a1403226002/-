<template>
  <div class="box">
    <el-row class="tac" style="width:100%;">
      <el-col :span="12" style="width:100%;">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :router="true"
        >
          <el-menu-item index="/home/zong/houShou">
            <i class="el-icon-menu"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/home/zong/xiangce">
            <i class="el-icon-document"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/shangpin/liebiao">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.box {
  width: 12%;
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  .el-row {
    height: 100%;
    border-right: solid 1px #e6e6e6;
    .el-menu {
      border: none;
    }
  }
}
</style>
