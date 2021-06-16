<template>
  <div class="skill-wrap">
    <div class="skill-title">WHAT WE DO?</div>
    <hr class="skill-hr"/>
    <el-row class="skill-list">
        <el-col :xs=12 :sm=12 :md=8 v-for="(item, index) in skills" :key="index" class="skill-item">
          <div class="sector"><img src="../assets/svg/数据库.svg" alt=""></div>
          <div class="skill-item-name">{{item.name}}</div>
          <div class="skill-item-des">{{item.description}}</div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      skills: [
        {
          name: 'vue',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/Vue.svg' 
        },
        {
          name: 'react',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/react.svg'
        },
        {
          name: 'Javascript',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/logo-javascript.svg'
        },
        {
          name: 'node',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/node.svg'
        },
        {
          name: 'mongoose',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/数据库.svg'
        },
        {
          name: 'webpack',
          description: 'Cras sagittis elit vitae lacus consequat, hendrerit imperdiet mi interdum. Nulla a porta quam. Phasellus in lorem.',
          iconSrc: '../assets/svg/Webpack.svg'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .skill-wrap {
    width:85%;
    margin: 0 auto;
    padding: 50px;
  }
  .skill-title {
    font-size: 2rem;
    font-family: 'Coda Caption', sans-serif;
    text-align: center;
  }
  .skill-hr {
    width: 5rem;
    border-color: rgba(0, 0, 0, 0.363);
    border-width: 1px;
  }
  .skill-list {
    /* display: flex; */

  }
  .skill-item {
    box-sizing: border-box;
    margin:0 auto;
    padding: 0 1rem;
    text-align: center;
  }
  .skill-item-name {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  .skill-item-des {
    font-size: .5rem;
    color: #666;
    padding-bottom: 3rem;
  }
  .sector {
    margin: 1rem auto 0 auto;
    text-align: center;
    width: 0;
    height: 0;
    border-bottom: 100px solid #eee;
    border-left: 100px solid transparent;
    border-right: 100px solid  transparent;
    border-radius: 50%;
  }
  .skill-item:hover .sector{
     border-bottom: 100px solid #EF6661;
     color: white;
  }
</style>