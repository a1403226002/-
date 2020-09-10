<template>
  <div class="box">
    <el-row class="tac" style="width:100%;">
      <el-col :span="12" style="width:100%;">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/dingdan/dingguan">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/dingdan/fapiao">
            <i class="el-icon-document"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/dingdan/shouhou">
            <i class="el-icon-setting"></i>
            <span slot="title">售后服务</span>
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
