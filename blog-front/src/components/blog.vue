<template>
  <div class="blog-wrap" >
    <div v-for="(item, index) in blogList" :key="index" class="blog-item" @click="blogDetail(item.id)">
        <div class="blog-cover">
          <img src="../assets/img/overViewBg.jpg" alt="">
        </div>
        <div class="blog-main">
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-content" v-html="item.content"></div>
            <div class="blog-info">
              <div class="blog-info-left">
                <span style="margin-right: 2rem;"><img src="../assets/svg/date.svg"/>{{parseTime(item.create_at)}}</span>
                <span><img src="../assets/svg/tag.svg" />{{item.label}}</span>
              </div>
              <div class="blog-info-right"><span style="padding-right:10px; font-size:.7rem">热度:{{pageviews(item.pageView)}}</span><img src="../assets/svg/signal.svg" alt=""></div>
            </div>
        </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="pagination.totalPage" 
        :current-page="pagination.current"
        :page-size="pagination.pageSize"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import {parseTime} from '../../utils/index'
import { GET_BLOG_LIST} from '../api/blog'
export default {
  name: "blog",
  data() {
    return {
      blogList:[],
      pagination: {},
      parseTime: null
    }
  },
  created() {
    this.getBlogList()
    this.parseTime = parseTime
  },
  computed: {
    pageviews() {
      return function(quantity) {
        switch(true) {
          case (60 > quantity && quantity >= 50):
            return 2;
          case (70 > quantity && quantity >= 60):
            return 3;
          case (80 > quantity && quantity >= 70):
            return 4;
          case (quantity >= 80):
            return 5;
          default: 
            return 1;
        }
      }
    }
  },
  methods: {
    getBlogList() {
      GET_BLOG_LIST().then(res => {
        console.log(res)
        // let {totalPage, pageSize, current} = res
        // this.pagination = {
        //   totalPage, 
        //   pageSize,
        //   current
        // }
        this.blogList = res.result
      }).catch(err => {
        console.log(err)
      })
    },
    blogDetail(id) {
      this.$router.push({
        name: 'blogDetail',
        params: {
          blogId: id
        }
    })
    },
    currentChange(e) {
      console.log(e)
    },
  }
}
</script>

<style>
  .el-button:focus, .el-button:hover{
    background-color: #EF6661;
    color: #fff;
    border-color: #EF6661;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #EF6661;
  }
</style>
<style scoped>
  .blog-wrap {
    padding: 0 1rem;
    width: 100%;
  }
  .blog-item {
    border-bottom: 1px solid rgb(226, 225, 225);
    padding: 15px 0;
    display: flex;
    align-items: center;
  }
  .blog-item:nth-child(1) {
    padding-top: 0;
  }
  .blog-cover {
    max-width: 180px;
    min-width: 180px;
    height: 120px;
  }
  .blog-cover img {
    width: 100%;
    height: 100%
  }
  .blog-main {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
  }
  .blog-title {
    font-weight: bold;
  }
  .blog-content {
    font-weight: 400;
    color: #383737;
    font-size: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient:vertical;
  }
  .blog-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: .8rem;
    font-weight: 400;
  }
  .blog-info-left {
    display: flex;
    align-items: center;
  }
  .blog-info-left span{
    display: flex;
    align-items: center;
  }
  .blog-info-left span img {
    padding-right: 5px;
  }
  .pagination {
    margin-top: 1rem;
    text-align: center;
  }
</style>