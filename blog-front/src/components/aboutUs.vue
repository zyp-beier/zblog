<template>
  <div class="aboutUsWrap">
    <div class="aboutUs-title">ABOUT US</div>
    <hr class="aboutUs-title-hr" />
    <div class="aboutUs-content">
      <p>成功是每一人渴望的，而不断进步是实现成功的基石，是一个持续奋斗的过程，愿自己在每一天的生活中，无论是为人处事还是业务技能都进步1%</p>
    </div>
    <div class="aboutUs-content">
      <p>Success is every person's desire, and progress is the foundation for achieving successful, is a process of a continuous struggle let oneself in every day life, both in people skills and business skills progress 1%</p>
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