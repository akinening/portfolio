<template>
  <div class="hero">
    <h1 class="title">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title">― A Digital Product Designer.</p>
    <section class="message">
      <p class="message__text">
        はじめまして！ あきねんと申します。<br>
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
  name: 'HeroArea'
}
</script>

<style scoped lang="stylus">
.hide-sp
  @media (max-width: 768px)
    display none

.hero
  padding-top 224px

  @media (max-width: 768px)
    padding-top 164px

.title
  margin 0 80px
  font-size 88px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px
    margin 0 20px

  @media (min-width: 1200px)
    margin 0 auto
    width 960px

.sub-title
  margin 16px 80px 0 80px
  font-size 32px
  font-weight 500
  line-height 1.0

  @media (max-width: 768px)
    font-size 18px
    margin 8px 20px 0 20px

  @media (min-width: 1200px)
    margin 16px auto 0
    width 960px

.message
  width 100%
  padding 80px 0
  background-size cover

  @media (max-width: 768px)
    padding 60px 0

  &__text
    margin 0 80px
    line-height 2.0
    font-size 20px
    font-weight 500

    @media (max-width: 768px)
      margin 0 20px
      font-size 16px

    @media (min-width: 1200px)
      margin 0 auto
      width 960px

</style>
