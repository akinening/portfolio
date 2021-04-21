<template>
<div>
  <header-area />
  <h1 class="c-top-margin c-page-title">About</h1>
  <article class="contents c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="message">
      <p class="message__text">
        はじめまして！ あきねんと申します。<br>
        Webを通じてリアルな「日常」をデザインするため、日々プロダクトと向き合っています。<br>
        デザインを通じて人々と中長期的な接点を持ちその人の体験や行動を変えることで、より便利で過ごしやすい世界を実現します。
      </p>
    </section>
    <vision-area />
    <exp-area />
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import VisionArea from '@/components/VisionArea'
import ExpArea from '@/components/ExpArea'

export default {
  name: 'About',
  data () {
    return {

    }
  },
  components: {
    HeaderArea,
    FooterArea,
    VisionArea,
    ExpArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.contents
  margin-top 80px
  margin-bottom 100px

  @media (max-width: 768px)
    margin-top 60px

.message
  padding-bottom 40px
  background-size cover

  @media (max-width: 768px)
    padding-bottom 30px

  &__text
    line-height 2.0
    font-size 20px

    @media (max-width: 768px)
      font-size 16px
</style>
