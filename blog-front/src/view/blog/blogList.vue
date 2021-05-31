<template>
  <div>
    <div>
      <blog-title :user-info="userInfo"></blog-title>
    </div>
    <div class="blog-main">
      <blog-nav></blog-nav>
      <blog></blog>
    </div>
     <Footer></Footer>
  </div>
</template>

<script>
import BlogNav from '../../components/blogNav.vue'
import BlogTitle from '../../components/blogTitle.vue'
import Footer from '../../components/footerPage.vue'
import blog from '../../components/blog.vue'
import { GET_USER_INFO } from '../../api/user'
export default {
  components: { BlogTitle, BlogNav, Footer, blog },
  name: "blogList",
  data() {
    return {
      userInfo: {},
      blogList: [],
      pagin: {
        pageSize: 15,
        total: 0,
        
      }
    }
  },
  created() {
      this.getUserInfo()
      // this.getBlogList()
  },
  methods: {
    getUserInfo() {
      GET_USER_INFO().then(res => {
        // console.log(res)
        this.userInfo = res
      }).catch(err => {
        console.log('err')
        console.log(err)
      })
    },
  },
}
</script>

<style scoped>
  .blog-main {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>