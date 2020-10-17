<template>
  <div>
    <h1 class="title">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title">― A Digital Product Designer.</p>
    <section class="message" :style="{backgroundImage: 'url(' + bg_img + ')' }">
      <p class="message__text">
        はじめまして！　あきねんと申します。<br>
        Webを通じてリアルな「日常」をデザインするため、<br class="hide-sp">
        日々プロダクトと向き合っています。<br>
        デザインを通じて人々と中長期的な接点を持ち<br class="hide-sp">
        その人の体験や行動を変えることで、<br class="hide-sp">
        より便利で過ごしやすい世界を実現します。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroArea',
  data () {
    return {
      bg_img: require('@/assets/image/top-bg.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
.hide-sp
  @media (max-width: 768px)
    display none

.title
  margin 120px 80px 0 80px
  font-size 88px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px
    margin 60px 20px 0 20px

.sub-title
  margin 16px 80px 0 80px
  font-size 32px
  font-weight 500
  line-height 1.0

  @media (max-width: 768px)
    font-size 18px
    margin 8px 20px 0 20px

.message
  width 100%
  margin-top 80px
  padding 80px 0
  background-size cover

  @media (max-width: 768px)
    margin-top 40px
    padding 60px 0

  &__text
    margin 0 80px
    line-height 2.0
    font-size 20px
    font-weight 500
  
    @media (max-width: 768px)
      margin 0 20px
      font-size 16px

</style>
