<template>
  <div>
    <div class="login">
      <el-form :model="form" :rules="rules" ref="form">
        <h1>UNI-ADMIN</h1>
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="margin-left:0px;">
          <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApp from "../../api/test";
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        // name: [
        //   { required: true, message: "请输入账号", trigger: "blur" },
        //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        // ],
        // pass: [
        //   { required: true, message: "请输入密码", trigger: "blur" },
        //   { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        // ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   调用接口
          loginApp.login(this.form.name, this.form.pass).then(res => {
            console.log(res);
            if (res.msg == "ok") {
              let token = res.data.token;
              console.log(token);
              // 储存到本地
              localStorage.setItem("ff_token", token);
              localStorage.setItem("ff_shuju", JSON.stringify(res.data));
              this.$router.push("/");
              this.$message({
                message: '登录成功',
                type: "success"
              });
            } else {
              // 获取信息失败, 弹出警告
              this.$message({
                message: res.msg,
                type: "warning"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 500px;
  height: 300px;
  margin: 10% auto;
  border: 1px solid #ccc;
}
h1 {
  line-height: 40px;
  text-align: center;
  color: #6c757d !important;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  font-size: 26px;
}
/deep/.el-form-item__content {
  //   margin-right: 30px;
  margin-left: 56px;
  width: 400px;
}
.el-button {
  width: 400px;
  background: #007373;
  margin-top: 10px;
}
element.style {
  margin-left: 0;
}
</style>
