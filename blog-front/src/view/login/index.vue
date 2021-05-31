<template>
  <div class="login-page">
    <div class="login-wrap">
      <div class="login-title">博客管理后台</div>
      <div class="userlogin">
        <!-- <div class="userlogin-top">用户登录</div> -->
        <div class="border"></div>
        <div class="userlogin-bottom">user login</div>
      </div>
      <div class="login-input">
        <el-form :model="loginForm" :rules="rules" ref="ruleForm">
          <el-form-item label="用户名" prop="username" style="color: #fff">
            <el-input
              placeholder="请输入用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item class="login">
            <el-button @click="login('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在3到5个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码',trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(vaild => {
        if (vaild) {
          this.$router.push({
            name: 'blogManagement'
          })
        } else {
          console.log('err')
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-input >>> .el-form-item__label {
      color: #fff !important;
    }
  .login-page {
    height: 100vh;
    width: 100%;
    background-color: #3CA992;
    position: relative
  }
  .login-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translate(0, -50%);
    margin: 0 auto;
    width: 20rem;
  }
  .login-title {
    text-align: center;
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
    color: #fff;
    margin: 0 auto 1rem auto;
  }
  .userlogin {
    color: #fff;
    text-align: center;
    font-family: 'ZCOOL XiaoWei', serif;
    margin-bottom: 1rem;
  }
  .border {
    width: 100%;
    height: 1px;
    background: -webkit-linear-gradient(left, #3CA992 -4%,#fff 50%,#3CA992 100%);
    margin: .5rem auto;
  }
  .userlogin-top {
    font-size: 1.6rem;
  }
  .login-input {
    width: 80%;
    margin: 0 auto 1rem auto;
    line-height: 3rem;
  }
  .login {
    text-align: center;
  }
</style>