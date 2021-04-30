<template>
<div>
  <header-area />
  <h1 class="c-top-margin c-page-title">About</h1>
  <article class="contents" itemscope="" itemtype="http://schema.org/Person">
    <section class="messages c-centering">
      <div class="message">
        <p class="message__text">
          はじめまして！ あきねんと申します。<br>
          Webを通じてリアルな「日常」をデザインするため、日々プロダクトと向き合っています。<br>
          デザインを通じて人々と中長期的な接点を持ちその人の体験や行動を変えることで、<br>
          より便利で過ごしやすい世界を実現します。
        </p>
      </div>
      <a href="https://note.com/012/n/ne82251f29c00" target="_blank" rel="noopener noreferrer">
        <img class="note1" :src="note1" alt="noteで自己紹介を読む">
      </a>
    </section>
    <vision-area class="c-centering" />
    <exp-area class="c-centering" />
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
      note1: require('@/assets/image/note1.jpg')
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

.messages
  padding 20px
  border-radius 8px
  background-color white
  box-sizing border-box

  @media (max-width: 768px)
    padding 20px

.message
  padding 20px 0

  &__text
    line-height 2.0
    letter-spacing 0.04rem
    font-size 20px

    @media (max-width: 768px)
      font-size 16px

.note1
  display block
  width 100%
  height 140px
  object-fit cover
  object-position 0 50%
  border-radius 8px
  transition opacity 0.2s

  @media (max-width: 768px)
    height 96px

  &:hover
    opacity 0.6
</style>
