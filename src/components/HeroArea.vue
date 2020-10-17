<template>
  <div>
    <h1 class="title m-80">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title m-80">― A Digital Product Designer.</p>
    <section class="message" :style="{backgroundImage: 'url(' + bg_img + ')' }">
      <p class="message__text m-80">
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

.m-80
  margin-left 80px
  margin-right 80px

.title
  margin-top 120px
  font-size 88px
  font-weight bold
  line-height 1.0

.sub-title
  margin-top 16px
  font-size 32px
  font-weight 500
  line-height 1.0

.message
  width 100%
  padding 80px 0
  margin-top 80px
  background-size cover

  &__text
    line-height 2.0
    font-size 20px
    font-weight 500

</style>
