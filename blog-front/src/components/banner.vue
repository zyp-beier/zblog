<template>
  <div class="banner-component">
    <div class="banner-item">
      <img src="@/assets/img/20181124175204_217.jpg" alt="">
    </div>
    <div class="banner-item">
      <img src="@/assets/img/20181124175205_100.jpg" alt="">
    </div>
    <div class="banner-item">
      <img src="@/assets/img/20181124175530_602.jpg" alt="">
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
</style>