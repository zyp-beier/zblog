<template>
  <div style="background-color:#eee; padding: 50px">
    <div class="box">
      <a href="#">
        <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
        </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
    </div>
    <div class="box">
      <a href="#">
          <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
    </div>
    <div class="box">
      <a href="#">
        <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
        </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
    </div>
    <div class="box">
      <a href="#">
          <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
            <div class="left common"></div>
            <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
      <a href="#">
          <div class="rotate ">
              <div class="left common"></div>
              <div class="right common"></div>
          </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "honeycomb",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .box{
    display: flex;
    justify-content:center;
  }
  .rotate{
    position:relative;
    height:110px;
    width:190px;
    margin:32px 5px;
    background:url('../assets/img/overViewBg.jpg');
    background-size: contain;
    background-size:auto 220px;
    background-position: -15px -55px;
    transition: all .5s;
    transform: scale(1);
  }
  .rotate:hover{
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
  .common{
    position: absolute;
    height:100%;
    width:100%;
    overflow: hidden;
    left:0;
  }
  .common:before{
    content:'';
    position: absolute;
    background:url('../assets/img/overViewBg.jpg') 50% 50% no-repeat;
    background-size:auto 220px;
    width:190px;
    height:220px;
  }
  .left{
    transform: rotate(60deg)
  }
  .left:before{
    transform: rotate(-60deg) translate(48px,-28px)
  }
  .right{
    transform: rotate(-60deg);
  }
  .right:before{
    transform: rotate(60deg) translate(-48px,-28px)
  }
</style>