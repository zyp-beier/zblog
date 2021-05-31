<template>
  <div class="welcome-page">
    <div>
      <ul>
        <li><a href="#">首页<span class="border"></span></a></li>
        <li><a href="#">关于<span class="border"></span></a></li>
      </ul>
      首页，关于
    </div>
    <div>
      blog
    </div>
    <div class="image-list">
      <div class="image-item" v-for="(item, index) in imgList" :key="index">
        <div v-if="active === index">
          <img :src="item.src" alt="" />
        </div>
        <!-- {{item.src}} -->
        <!-- {{index}} -->
      </div>
    </div>
  </div>
</template>

<script>
import a from '../assets/img/20181124175204_217.jpg'
import b from '../assets/img/20181124175205_100.jpg'
import c from '../assets/img/20181124175530_602.jpg'
export default {
  name: "swiper",
  components: {

    },
  data() {
    return {
      active: 2,
      imgList: [
        {src: a},
        {src: b},
        {src: c}
      ],
      interval: null
    }
  },
  created() {
    this.interval = setInterval(this.int(), 2000)
  },
  methods: {
    int() {
      // if (this.active === -1) {
      //   this.active = 2
      // }
      // this.active = --this.imgList.length
      // console.log(this.active)
      let a = this.imgList.length
      --a
      console.log(a)
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
  .image-item {
    /* transform:scaleX(1.2); */
  }
</style>