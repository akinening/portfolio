<template>
<div class="index">
  <header-area />
  <div class="c-top-margin c-page-title">
    <h1 class="title">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title">― A Digital Product Designer.</p>
  </div>
  <div class="heroes c-centering">
    <section class="message">
      <p class="message__text">
        はじめまして！ あきねんと申します。<br>
        Webを通じてリアルな「日常」をデザインするため、日々プロダクトと向き合っています。<br>
        デザインを通じて人々と中長期的な接点を持ちその人の体験や行動を変えることで、より便利で過ごしやすい世界を実現します。
      </p>
    </section>
    <vision-area />
  </div>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import VisionArea from '@/components/VisionArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    FooterArea,
    VisionArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
.title
  font-size 88px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px

.sub-title
  margin-top 16px
  font-size 32px
  font-weight 500
  line-height 1.0

  @media (max-width: 768px)
    font-size 18px
    margin-top 8px

  @media (min-width: 1200px)
    margin-top 16px
    width 960px

.heroes
  margin-bottom 40px
  padding-bottom 60px

  @media (max-width: 768px)
    padding-top 0

.message
  width 100%
  padding 80px 0
  background-size cover

  @media (max-width: 768px)
    padding 60px 0

  &__text
    line-height 2.0
    font-size 20px

    @media (max-width: 768px)
      font-size 16px
</style>
