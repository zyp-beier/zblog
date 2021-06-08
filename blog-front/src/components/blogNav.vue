<template>
  <div class="blogNav">
    <div class="blogNav-top">
      <div class="blogNav-top-item">
        热门
      </div>
      <div class="blogNav-top-item">
        最新
      </div>
    </div>
    <div class="nav-list">
      <div class="nav-text">导航</div>
      <div v-for="(item, index) in labelList" :key="index" class="nav-item">
        <span><img src="../assets/svg/Vue.svg" alt=""></span><span>{{item.label}}({{item.number}})</span>
      </div>
    </div>
  </div>
</template>

<script>
import {GET_LABEL_LIST} from '../api/blog'
export default {
  name: "blogNav",
  data() {
    return {
      labelList: []
    }
  },
  created() {
    this.getLabelList()
  },
  methods: {
    getLabelList() {
      GET_LABEL_LIST().then(res => {
        // console.log(res)
        this.labelList = res.result
      }).catch( err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .blogNav {
    min-width: 200px;
    background-color: #eee;
    padding: 0 20px;
  }
  .blogNav-top {
    text-align: center;
  }
  .blogNav-top-item {
    margin: 20px 0;
    padding: 10px;
    font-size: .9rem;
  }
  .blogNav-top-item:hover, .blogNav-top-item:active {
    color: #409EFF;
    background-color: #fff;
    border-radius: 40px;
  }
  .nav-list {
    border-top: 1px solid #ccc;
    position: relative;
  }
  .nav-text {
    font-size: .8rem;
    color: #666;
    margin-top: 20px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    font-size: .8rem;
    color: #666;
    padding: 20px;
    transition: margin .3s ease-out;
  }
  .nav-item:hover, .nav-item:active{
    margin-left: 1rem;
  }
  .nav-item span{
    width: 1rem;
    height: 1rem;
    margin-right: .5rem;
    line-height: 1rem;
  }
  .nav-item img {
    width: 100%;
  }
</style>