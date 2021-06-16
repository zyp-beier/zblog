<template>
  <div class="hive">
    <div class="main">
      <div class="list">
        <div class="left item" v-for="(item, index) in 5" :key="index" :class="item">
            <div class="right">
              <a href="#"><img src="../assets/img/20181124175204_217.jpg" alt=""></a>
            </div>
        </div>
      </div>
      <div class="list even">
        <div class="left item" v-for="(item, index) in 4" :key="index" :class="item">
            <div class="right">
              <a href="#"><img src="../assets/img/20181124175205_100.jpg" alt=""></a>
            </div>
        </div>
      </div>
      <div class="list">
        <div class="left item" v-for="(item, index) in 5" :key="index" :class="item">
            <div class="right">
              <a href="#"><img src="../assets/img/20181124175530_602.jpg" alt=""></a>
            </div>
        </div>
      </div>
      <div class="list even">
        <div class="left item" v-for="(item, index) in 4" :key="index" :class="item">
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
      hiveList: 18
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
    /* box-shadow: inset 0 0 0 200px rgb(36 36 36 / 70%); */
  }
  .left .right img {
    width: 100%;
    height: 100%;
    transform: rotate(-60deg);
    overflow: hidden;
  }
  .item:hover {
    /* -webkit-box-shadow: inset 0 0 0 200px rgb(36 36 36 / 70%);
    box-shadow: inset 0 0 0 200px rgb(36 36 36 / 70%); */
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