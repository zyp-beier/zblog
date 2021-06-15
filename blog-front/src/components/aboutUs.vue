<template>
  <div id="aboutUsWrap">
    <div class="aboutUs-title">ABOUT US</div>
    <hr class="aboutUs-title-hr" />
    <div class="aboutUs-content">
      <p>天行健，君子以自强不息。地势坤，君子以厚德载物。</p>
    </div>
    <div class="aboutUs-content">
      <p>Heaven is healthy, and a gentleman is constantly striving for self-improvement. The terrain is Kun, and a gentleman carries things with virtue.</p>
    </div>
    <div class="aboutUs-content">
      <p>一切的依赖都是对自己的弱化和矮化，而顽强的特立独行才能培养和构建起自己由内心的力量支撑起来的独立的品格。人生旅途不可能总是一马平川，因而要坚信：无论身处何种境遇，都要顽强地生活在自己的意志里，只有那样自己的心灵才会寻觅到真正属于自己的归宿，只有这样，自己才会处变不惊地宁静而独立地生活；只有这样，自己在自己的心中和别人的眼里才会成为成熟的果敢的有个人魅力的无愧于自己的人！</p>
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
  #aboutUsWrap {
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