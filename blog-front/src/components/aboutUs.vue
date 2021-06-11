<template>
  <div class="aboutUsWrap">
    <div class="aboutUs-title">ABOUT US</div>
    <hr class="aboutUs-title-hr" />
    <div class="aboutUs-content">
      <p>天行健，君子以自强不息。地势坤，君子以厚德载物。</p>
    </div>
    <div class="aboutUs-content">
      <p>Heaven is healthy, and a gentleman is constantly striving for self-improvement. The terrain is Kun, and a gentleman carries things with virtue.</p>
    </div>
    <div class="aboutUs-content contact-details">
      <p style="margin-right:1rem">QQ: 1528466340</p><p>EMAIL: 1528466340@qq.com</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutUs",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .aboutUsWrap {
    margin: 0 auto;
    width:85%;
    padding: 20px 0;
  }
  .aboutUs-title {
    font-size: 2rem;
    font-family: 'Coda Caption', sans-serif;
    /* font-family: 'Zen Dots', cursive; */
    text-align: center;
  }
  .aboutUs-title-hr {
    width: 5rem;
    border-color: rgba(0, 0, 0, 0.363);
    border-width: 1px;
  }
  .aboutUs-content {
    font-size: 1rem;
    font-weight: 100;
    color: #666;
    text-align: center;
  }
  .contact-details{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>