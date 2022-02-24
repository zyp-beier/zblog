<template>
  <div class="blogDetail-wrap">
    <blog-title :showSearch='false' :user-info="userInfo"></blog-title>
    <div class="blog-main">
      <h3 class="blog-title">{{blogDetail.title}}</h3>
      <div class="blog-content">
        <div v-html="blogDetail.content"></div>
      </div>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import blogTitle from '../../components/blogTitle.vue'
import FooterPage from '../../components/footerPage.vue'
import { GET_BLOG_DETAIL } from '../../api/blog'
import { reactive, toRefs} from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: { blogTitle,FooterPage },
  name: "blogDetail",
  setup() {
    let state = reactive({
      blogDetail: {},
      userInfo: {
        nickname: 'ZYP_beier'
      }
    })
    let router = useRoute()
    let blogId = router.params.blogId || ''
    if (!blogId) return
    const getBlogDetail = async () => {
      let { result } = await GET_BLOG_DETAIL({blogId})
      console.log(result)
      state.blogDetail = result[0]
    }
    getBlogDetail()
    return {
      ...toRefs(state),
      getBlogDetail
    }
  }
}
</script>

<style scoped>
  .blog-main {
    width: 80%;
    margin: 0 auto;
  }
  .blog-title {

  }
  .blog-content{

  }
</style>