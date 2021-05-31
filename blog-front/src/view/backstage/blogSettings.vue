<template>
  <div>
    <backstage-title></backstage-title>
    <div class="blog-setting">
      <div class="avatar flex">
        <div class="avatar-text">头像</div>
        <div class="avatar-img border"><img src="../../assets/img/overViewBg.jpg" alt=""></div>
      </div>
      <div class="username flex">
        <div class="username-label">登录用户名</div>
        <div class="username-content ">zyp_beier</div>
      </div>
      <div class="password flex">
        <div class="password-label">密码</div>
        <div class="password-content">232444</div>
      </div>
    </div>
  </div>
</template>

<script>
import backstageTitle from '../../components/backstageTitle.vue'
export default {
  components: { backstageTitle },
  name: "blogSettings",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .blog-setting {
    margin: 0 1rem;
    width: 70%;
    margin: 0 auto;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
    color: #666;
    font-size: .9rem;

  }
  .border {
    /* border-bottom: 1px solid #666; */
  }
  .avatar {

  }
  .avatar-img {
    width: 3rem;
    height: 3rem;
    position: relative;
  }
  .avatar-img::after{
    content: '';
    background-color: rgba(0,0,0,.5);
    position: absolute;
    /* top: 1.5rem; */
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

  }
  .avatar-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>