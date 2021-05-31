<template>
  <div class="archive-wrap">
    <blog-title></blog-title>
    <!-- <div class="archive-list">
      <div class="archive-item" v-for="(item,index) in archiveList" :key="index">
        <div>{{item.time}}({{item.blogsNumber}})</div>
      </div>
    </div> -->
    <el-row class="archive-list">
      <el-col  :xs="8" :sm="8" :md="6" :lg="4" class="archive-item" v-for="(item,index) in archiveList" :key="index">
         <div>{{item.time}}({{item.blogsNumber}})</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import blogTitle from '../../components/blogTitle.vue'
import {parseTime} from '../../../utils/index'
export default {
  components: { blogTitle },
  name: "archive",
  data() {
    return {
        archiveList:[
          {
            id: 1,
            time: '2021-04',
            blogsNumber: 20
          },
          {
            id: 1,
            time: '2021-04',
            blogsNumber: 20
          },
          {
            id: 1,
            time: '2021-04',
            blogsNumber: 20
          },
          {
            id: 2,
            time: '2021-03',
            blogsNumber: 13
          },
          {
            id: 3,
            time: '2021-02',
            blogsNumber: 42
          },
          {
            id: 4,
            time: '2021-01',
            blogsNumber: 45
          },
          {
            id: 5,
            time: '2020-12',
            blogsNumber: 34
          },
          
        ],
        parseTime: null
    }
  },
  created() {
    this.parseTime = parseTime
  }
}
</script>

<style scoped>
  .archive-list {
    padding-left:1.4rem;
    width: 80%;
    margin: 0 auto;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
  }
  .archive-item {
    margin: 1rem 2.8rem 1rem 0;
    width: 12rem;
    height: 2.8rem;
    background-color: #EF6661;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    line-height: 2.8rem;
    position: relative;
  }
  .archive-item::before {
    position: absolute;
    top: 0;
    left: -2.8rem;
    content: '';
    width:0;
    height: 0;
    border: 1.4rem solid transparent;
    border-right: 1.4rem solid #EF6661;
  }
  .archive-item::after {
    content: '';
    position: absolute;
    top: 1.1rem;
    left: 0;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: #fff;
  }
</style>