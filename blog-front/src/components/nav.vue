<template>
  <div class="welcome-page">
    <div :class="{ sticky: scorllTop > 300 }" class="default">
      <div  class="nav-list" >
        <div class="nav-item" @click="navClick('index')"><a href="#">首页<span class="border"></span></a></div>
        <div class="nav-item" @click="navClick('aboutUs')"><a href="javascript:void(0)">关于<span class="border"></span></a></div>
        <div class="nav-item" @click="navClick('blog')"><a href="#"><h1>blog</h1><span :class="[ scorllTop < 300 ? 'rotate': 'border']"></span></a></div>
        <div class="nav-item" @click="navClick('skill')"><a href="#">技能<span class="border"></span></a></div>
        <div class="nav-item" @click="navClick('more')"><a href="#">更多<span class="border"></span></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  components: {

    },
  data() {
    return {
      scorllTop: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroFun, true)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFn); // 销毁监听
  },
  methods: {
    scroFun() {
      this.scorllTop = document.documentElement.scrollTop || document.body.scrollTop;
    },
    navClick(val) {
      this.$emit('callback', val)
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
  .default {
    z-index: 999;
    transition: all .3s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
  }
  .sticky {
    /* transition: all .3s ease-in-out; */
    height: 70px;
  }
  .nav-list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }
  .sticky .nav-item:nth-child(3) {
    background-color: black;
  }
  .sticky .nav-item a{
    color: black;
  }
  .sticky .nav-item h1{
    color: #fff;
  }
  .sticky .rotate {
    background-color: black;
    transition: all .3s ease-in-out;
    transform: rotate(0);
  }
  .nav-item {
    position: relative;
    width: 8rem;
    height: 70px;
    line-height: 70px;
    text-align: center;
    box-sizing: border-box;
    cursor:pointer; 
  }
  .nav-item h1{
    font-size: 2rem;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    color: black;
  }
  .nav-item:hover .border{
    transition: all .3s ease-in-out;
    width: 100%;
  }
  .nav-item a {
    color: #fff;
    font-size: .8rem;
  }
  .nav-item .border {
    transition: all .3s ease-in-out;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    width: 0;
    height: 5px;
    background-color: #FFF;
  }
  .active {
    width: 100%;
  }
  .nav-item:active .border{
    /* position: absolute; */
    /* bottom: -5px; */
    /* left: 0; */
    /* right: 0; */
    width: 100%;
    /* height: 5px; */
    background-color: red;
  }
  .nav-item .rotate {
    transition: all .3s ease-in-out;
    position: absolute;
    top: -75px;
    left: 0;
    background-color: #fff;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    transform: rotate(45deg);
    z-index: -1;
  }
</style>