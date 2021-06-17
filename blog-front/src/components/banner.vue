<template>
  <div class="banner-component">
    <div class="banner-item">
      <img src="@/assets/img/20181124175204_217.jpg" alt="">
      <div class="content">
        <div class="content-title">欢迎来到ZYP BLOG</div>
        <div class="content-des">WELCOME TO ZYP BLOG</div>
      </div>
    </div>
    <div class="banner-item">
      <img src="@/assets/img/20181124175205_100.jpg" alt="">
      <div class="content">
        <div class="content-title">若是美好叫做精彩，若是糟糕叫做经历</div>
        <div class="content-des">Don't be sorry</div>
      </div>
    </div>
    <div class="banner-item">
      <img src="@/assets/img/20181124175530_602.jpg" alt="">
      <div class="content">
        <div class="content-title">因为不一样，世界才丰富多彩</div>
        <div class="content-des">Record a good life</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .banner-component {
    height: 400px;
    position: relative;
    height: 100vh;
  }
  .banner-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
  .banner-item img {
    width: 100%;
    height: 100%;
    opacity: 1;
    animation: fade 4s linear;
  }

@keyframes fade {
	0% { opacity: 0 }
  50% { opacity: .5}
  100% {opacity: 1}
}
.banner-item .content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  transform: translateY(-20%);
  line-height: 3rem;
}
.content .content-title {
    color:white;
    font-size: 2rem;
    font-family: 'Coda Caption', sans-serif;
}
.content .content-des {
    color:white;
    font-family: 'Zen Dots', cursive;
}
</style>