<template>
  <div>
    <div>
      <swiper></swiper>
    </div>
    <about-us></about-us>
    <over-view :previewData="previewData"></over-view>
    <skill></skill>
    <honeycomb></honeycomb>
    <Footer></Footer>
  </div>
</template>

<script>
import aboutUs from '../../components/aboutUs.vue'
import Footer from '../../components/footerPage.vue'
import Honeycomb from '../../components/honeycomb.vue'
import OverView from '../../components/overView.vue'
import Skill from '../../components/skill.vue'
import Swiper from '../../components/swiper.vue'
export default {
  components: { aboutUs, OverView, Skill, Honeycomb, Footer, Swiper },
  name: "layout",
  data() {
    return {
      previewData: []
    }
  },
  created() {
    
  },
    
}
</script>

<style scoped>

</style>