<template>
  <div class="footer-wrap" :class='{isFixed: isFixed}'>
    <div class="contact-details" >
      <span>联系我们</span><span style="margin: 0 10px">email:1528466340@qq.com </span><span>qq:1528466340</span>
    </div>
    <div class="copyright">Copyright &copy; {{year}} ZYP All rights reserved. <span class="loveyou">♥</span> thanks for zhaoyinping <span @click="login" style="cursor:pointer">登录</span></div>
  </div>
</template>

<script>
export default {
  name: "footerPage",
  data() {
    return {
      year: new Date().getFullYear(),
      isFixed: false
    }
  },
  mounted() {
    let offsetHeight = document.documentElement.offsetHeight || 0
    if (window.innerHeight > offsetHeight) {
        this.isFixed =  true
      }
  },
  methods: {
    login() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
  .footer-wrap {
    font-size: .8rem;
    background-color: #393E42;
    margin: 50px auto 0 auto;
    color: #fff;
    padding: 10px;
  }
  .contact-details{
    text-align: center;
  }
  .copyright {
    text-align: center;
  }
  .loveyou{
    margin-left: 10px;
    color: red;
  }
  .isFixed {
    position: fixed;
    bottom: 0;
    width: 100%;
    /* margin-top: 100px; */
  }
</style>