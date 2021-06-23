<template>
  <div class="blogTitle-wrap">
    <div class="blogTitle">
      <div class="blog-left">
        <div class="user-info">
          <div class="user-avatar">
            <img src="../assets/img/avatar.jpg" alt="">
          </div>
          <div class="user-name">{{userInfo.nickname}}</div>
        </div>
        <div class="title-nav">
          <span class="title-main" @click="$router.push({name: 'blogList'})">主页</span>                                       
          <span class="title-archive" @click="$router.push({name: 'archive'})">存档</span>
        </div>
      </div>
      <div  v-if='showSearch'>
        <div v-if="hidden" class="blog-right">
          <el-input placeholder="请输入要查询的内容" clearable v-model="queryData"></el-input>
          <el-button @click="search">搜索</el-button>
        </div>
      </div>
    </div>
    <hr style="margin: 0;background-color: #ccc; height: 1px; border:none"/>
  </div>
</template>

<script>
export default {
  name: "blogTitle",
  props: {
    userInfo: {
      type: Object
    },
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      queryData: '',
      hidden: true
    }
  },
  created() {
    this.hidden = window.screen.width > 450 ? true : false
  },
  methods: {
    archive() {
      this.$router.push({
      name: 'archive'
    })
    },
    search() {
      if (!this.queryData) {
        this.$message.info('搜索内容不能为空')
        return
      }
      this.$emit('searchBlog', this.queryData)
    }
  },
}
</script>

<style scoped>
  .blogTitle-wrap{
    margin-bottom: .5rem;
  }
  .blogTitle {
    padding: 5px 0;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .blog-left {
    width: 16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-avatar {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
  .user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .user-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .title-nav {
    color: #666;
    font-size: .9rem;
  }
  .title-main {
    margin-right: 1rem;
    cursor: pointer;
  }
  .title-archive {
    cursor: pointer;
  }
  .blog-right {
    display: flex;
  }
</style>