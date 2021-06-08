<template>
<div class="overView-wrap">
  <div class="overView-title">HISTORY TIME</div>
  <hr class="overView-hr"/>
  <div class="overView-content">We are focusing on</div>
  <div class="overView-content">Web Design / WP Development / HTML Integration</div>
  <el-row class="overView">
    <el-col :xs=12 :sm=12 :md=6 v-for="(item, index) in overView" :key="index" class="overView-item">
      <div class="item-title">{{item.title}}</div>
      <div class="item-number">{{item.number}}</div>
    </el-col>
  </el-row>
</div>
  
</template>

<script>
import {fetchList} from '../api/index'
export default {
  name: "overView",
  props: {
    previewData: {
      type: Array
    }
  },
  data() {
    return {
      overView: []
    }
  },
  created() {
    fetchList().then(res => {
        console.log(res)
        this.overView = res.result
      }).catch(err => {
        console.log(err,'cuola')
      })
  }
}
</script>

<style scoped>
  .overView-wrap {
    padding: 80px;
    background: url('../assets/img/overViewBg.jpg') no-repeat;
    background-size: cover;
    /* filter: blur(2px); */
  }
  .overView-hr {
    width: 5rem;
    border-color: white;
    margin-bottom: 20px;
  }
  .overView-title {
    color:white;
    font-size: 2rem;
    font-family: 'Coda Caption', sans-serif;
    /* font-family: 'Zen Dots', cursive; */
    text-align: center;
  }
  .overView-content {
    color: white;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
  }
  .overView {
    color: white;
  }
  .overView-item {
    margin-top: 50px;
    text-align: center;
  }
  .item-number {
    font-size: 3rem;
    color: #EF6661;
    font-weight: bold;
  }
</style>