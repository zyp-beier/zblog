<template>
  <div class="login-page">
    <div class="login-bg">
      <div class="login-dialog">
        <div class="login-dialog-left">
          <div class="login-dialog-title">
            <div class="login-dialog-title-hello">Hello,</div>
            <div class="login-dialog-title-back">Welcome back!</div>
          </div>
          <el-form :model="loginForm" :rules="rules" ref="ruleForm">
            <el-form-item label="Username" prop="username" style="color: #fff">
              <el-input placeholder="Place enter user name" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password" >
              <el-input placeholder="Place enter password" v-model="loginForm.password" show-password @keyup.enter="login('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item class="login">
              <el-button @click="login('ruleForm')">login</el-button>
              <el-button @click="login('ruleForm')">login up</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-dialog-right"><img src="../../assets/img/login-right1.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOGIN } from '../../api/login'
import {setToken} from '../../../utils/auth'
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        // username: [
        //   {required: true, message: '请输入用户名', trigger: 'blur'},
        // ],
        // password: [
        //   {required: true, message: '请输入密码',trigger: 'blur'}
        // ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(vaild => {
        if (vaild) {
          this.getLoginInfo()
        } else {
          console.log('err')
        }
      })
    },
    getLoginInfo() {
      LOGIN(this.loginForm).then(res => {
        if (res.status === 200) {
          setToken(res.token, res.time, res.expires)
          this.$router.push({
            name: 'blogManagement'
          })
          let {nickname, personalityLabel } = res.result[0]
          let userinfo = JSON.stringify({nickname, personalityLabel })
          window.sessionStorage.setItem('userInfo', userinfo)
        } else {
          this.$message.error(res.message)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style>
  .login-dialog .el-form-item .el-form-item__label {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .el-input .el-input__inner {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    padding: 0;
  }
  .el-button--default {
    width: 100px;
    border: 1px solid #2e186c;
    color: #2e186c;
    border-radius: 0;
  }
  .el-button--default:nth-child(1) {
    background-color: #2e186c;
    color: #fff;
  }
  .el-button:nth-child(1):focus, .el-button:nth-child(1):hover {
    background-color: #2e186c;
    color: #fff;
    border: 1px solid #2e186c;
  }
  .el-button:nth-child(2):focus, .el-button:nth-child(2):hover {
    background-color: #fff;
    color: #2e186c;
    border: 1px solid #2e186c;
  }
</style>

<style scoped>
  .login-page {
    height: 100vh;
    width: 100%;
    min-width: 900px;
    background-color: #3CA992;
    position: relative
  }
  .login-bg {
    width: 100%;
    height: 100vh;
    background-color: #290950;
    position: relative;
  }
  .login-bg::before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 45vh;
    background-color: #2e186c;
  }
  .login-bg::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 45vh;
    background-color: #2e186c;
  }
  .login-dialog {
    width: 900px;
    height: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    z-index: 99;
    display: flex;
  }
  .login-dialog-left {
    width: 450px;
    padding: 40px;
    box-sizing: border-box;
  }
  .login-dialog-title {
    margin-bottom: 30px;

  }
  .login-dialog-title-hello {
    font-size: 30px;
    color: #2e186c;
  }
  .login-dialog-title-back {
    font-size: 35px;
    font-weight: bold;
    color: #290950;
  }

  .login-dialog-right {
    width: 450px;

  }
  .login-dialog-right img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

</style>
