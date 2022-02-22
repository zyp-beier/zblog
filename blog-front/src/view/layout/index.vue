<template>
  <div>
     <div>
      <Nav @callback='handleNav'></Nav>
    </div>
    <div id="index">
      <banner></banner>
    </div>
    <div id="aboutUs">
      <about-us ref="aboutUs"></about-us>
    </div>
    <div>
      <over-view :previewData="previewData"></over-view>
    </div>
    <div id='skill'>
      <skill></skill>
    </div>
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
import Nav from '../../components/nav.vue'
import Banner from '../../components/banner.vue'
export default {
  components: { aboutUs, OverView, Skill, Honeycomb, Footer, Nav, Banner },
  name: "layout",
  data() {
    return {
      previewData: []
    }
  },
  created() {
    
  },
  methods: {
    handleNav(e) {
      if (e === 'blog') {
        this.$router.push({
          name: 'blogList'
        })
        return
      }
      let offsetTop = (document.getElementById(e) && document.getElementById(e).offsetTop) || 0
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>

</style>