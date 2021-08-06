<template>
<div class="index">
  <header-area />
  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <div class="hero__content text-center">
      <h1 class="title">Design can change our lives.</h1>
      <p class="sub-title">
        デジタルプロダクトを通じて、より多くの人々の暮らしを豊かにしたい。<br>
        その思いから、日々プロダクトデザイナーとして試行錯誤しています。
      </p>
      <router-link to="/about" class="top-btn c-shadow">私について</router-link>
    </div>
  </div>
  <works-area />
  <div class="share c-shadow">
    <p class="share__title">このページをシェア</p>
    <div class="share__button" @click="copyUrl">{{ text_copy }}</div>
    <a class="share__button" href="https://slack.com/ssb/redirect" target="_blank">Slackを開く</a>
  </div>
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    WorksArea,
    FooterArea
  },
  data () {
    return {
      bg_top: require('@/assets/image/bg_top.jpg'),
      text_copy: 'URLをコピー'
    }
  },
  methods: {
    copyUrl () {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('https://akinen.com/')
        this.text_copy = 'コピーしました'
      }
      setTimeout(() => {
        this.text_copy = 'URLをコピー'
      }, 700)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.text-center
  text-align center

.title
  font-size 64px
  font-weight bold
  line-height 1.0
  text-shadow 0 1px 2px rgba(#035599, 0.5)

  @media (max-width: 768px)
    font-size 40px

.sub-title
  margin-top 20px
  font-size 20px
  font-weight 400
  line-height 1.6
  letter-spacing 0.1rem
  text-shadow 0 0.5px 2px rgba(#035599, 0.5)

  @media (max-width: 768px)
    display none

  @media (min-width: 1200px)
    width 960px

.top-btn
  display inline-block
  margin 60px 0
  padding 16px 60px
  width fit-content
  border-radius 4px
  font-size 16px
  font-weight 700
  color rgb(36, 40, 42)
  background-color white
  transition all 0.2s

  &:hover
    box-shadow none
    opacity 0.8

  @media (max-width: 768px)
    display none

.share
  display block
  width fit-content
  margin 40px auto
  padding 20px
  text-align center
  background-color white
  border-radius 4px

  &__title
    margin-bottom 20px
    font-size 20px
    font-weight 500

  &__button
    display inline-block
    margin 0 10px 10px
    width 200px
    padding 12px 30px
    color base-black
    border 1px solid base-black
    border-radius 4px
    font-size 16px
    font-weight 500

    &:hover
      opacity 0.6
</style>
