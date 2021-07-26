<template>
  <div class="hive">
    <div class="main">
      <div :class="['list', {'even': index % 2 === 1} ]" v-for="(item,index) in hiveList" :key="index">
        <div class="left item" v-for="(ite, ind) in item" :key="ind" >
          <div class="right">
            <a href="#"><img src="../assets/img/20181124175204_217.jpg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "honeycomb",
  data() {
    return {
      hiveList: [
        [1,2,3,4,5],
        [1,2,3,4],
        [1,2,3,4,5],
        [1,2,3,4],
      ]
    }
  }
}
</script>

<style scoped>
  .hive {
    background-color: #eee;
  }
  .main {
    width: 70%;
    padding: 2rem;
    margin: 0 auto;
  }
  .left {
    width:10rem;
    height:12rem;
    transform: rotate(120deg);
    overflow: hidden;
  }
  .right {
    height: 100%;
    width: 100%;
    transform: rotate(-60deg);
    overflow: hidden;
  }
  .left .right img {
    width: 100%;
    height: 100%;
    transform: rotate(-60deg);
    overflow: hidden;
  }
  .item:hover {
    transform: scale(1);
    transition: all .3s ease-in-out;
  }
  .list {
    display: flex;
    margin-top: -2rem;
  }
  .list:nth-child(1) {
    margin: 0;
  }
  .even {
    margin-left: 5.5rem;
  }
  .item {
    margin-right: 1.2rem;
    transition: all .5s;
  }
</style>
