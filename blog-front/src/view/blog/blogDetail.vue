<template>
  <div class="blogDetail-wrap">
    <blog-title :showSearch='false'></blog-title>
    <div class="blog-main">
      <h3 class="blog-title">{{blogdetail.title}}</h3>
      <div class="blog-content">
        <div v-html="blogdetail.content"></div>
      </div>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import blogTitle from '../../components/blogTitle.vue'
import FooterPage from '../../components/footerPage.vue'
export default {
  components: { blogTitle, FooterPage },
  name: "blogDetail",
  data() {
    return {
      blogdetail: {
        title: '这是一个blogdetil',
        content: '<p><strong><em><span style="color:#E53333;">这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海这就是爱，可能回忆掉进了大海Think Different</span></em></strong></p><p><img src="/ke4/attached/1241601537255682809.jpg" alt="" width="250" height="176" title="" align="" /></p><p>- Apple Inc.</p>'
      }
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