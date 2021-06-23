<template>
  <div>
    <div>
      <blog-title :user-info="userInfo" @searchBlog='searchBlog'></blog-title>
    </div>
    <div class="blog-main">
      <blog-nav></blog-nav>
      <blog :queryData='queryData'></blog>
    </div>
     <Footer></Footer>
  </div>
</template>

<script>
import BlogNav from '../../components/blogNav.vue'
import BlogTitle from '../../components/blogTitle.vue'
import Footer from '../../components/footerPage.vue'
import blog from '../../components/blog.vue'
export default {
  components: { BlogTitle, BlogNav, Footer, blog },
  name: "blogList",
  data() {
    return {
      userInfo: {
        nickname: 'zyp_beier'
      },
      queryData: '',
      pagin: {
        pageSize: 15,
        total: 0,
      }
    }
  },
  created() {
      // this.getUserInfo()
  },
  methods: {
    searchBlog(queryData) {
      this.queryData = queryData
    }
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