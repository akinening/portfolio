<template>
<div>
  <div class="hero" :style="{backgroundImage: 'url(' + bg_creative + ')' }">
    <header-area />
    <span class="hero__content">STUDIES</span>
  </div>
  <header-bar />

  <article class="c-centering mb-100">
    <h2 class="mt-plus message">
        Shaping the Future of Immersive Experiences.
    </h2>
    <p class="sub-title">
        AIやXRが着実に進歩し、SFがフィクションではなくなる時代。<br>
        人と機械の間を繋ぐことで、想像を現実にします。
    </p>
    <section class="skill mb-30">
      <a href="https://dezabiyo.studio.site" target="_blank">
        <img class="image" src="@/assets/image/creative/xrui_slide.jpg" alt="XRUI">
      </a>
    </section>
    <section class="mb-100">
      <h2 class="c-title">WORKS</h2>
      <ul class="others">
        <li class="other mb-30" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <div class="tag">{{activity.tag}}</div>
          <a :href="activity.url" target="_blank">
            <img class="photo-other" :src="activity.image_url" alt="">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80 mb-100">
      <h2 class="c-title">COLUMN</h2>
      <div class="news">
        <p class="news__content">
          <a class="news-link" href="https://speakerdeck.com/akinen/uinituite" target="_blank" rel="noopener noreferrer">XRの近況とUX/UIについて</a><br>
          <a class="news-link" href="https://note.com/012/n/n91c9f176f01a" target="_blank" rel="noopener noreferrer">GPT-4デザイナーズガイド:新たな可能性を探求する</a><br>
          <a class="news-link" href="https://note.com/012/n/ne008f7fa1571" target="_blank" rel="noopener noreferrer">XRUI Magazine#04&emsp;XRにおける「使いやすさ」とは何か</a><br>
          <a class="news-link" href="https://note.com/012/n/n1a970fad456f" target="_blank" rel="noopener noreferrer">XRUI Magazine#03&emsp;XR空間への「入力」手段について</a><br>
          <a class="news-link" href="https://note.com/012/n/n4ece8e04755f" target="_blank" rel="noopener noreferrer">XRUI Magazine#02&emsp;XRUIについて考える際のHint</a><br>
          <a class="news-link" href="https://note.com/012/n/nf4d0ea8e7eb7" target="_blank" rel="noopener noreferrer">XRUI Magazine#01&emsp;多くの人がXRデバイスを被る時代はまだ来ない</a>
        </p>
      </div>
    </section>

    <nav class="move">
      <router-link to="/" class="move__to">← TOP</router-link>
      <router-link to="/about" class="move__to">ABOUT →</router-link>
    </nav>
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeaderBar from '@/components/HeaderBar'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Creative',
  components: {
    HeaderArea,
    HeaderBar,
    FooterArea
  },
  data () {
    return {
      bg_creative: require('@/assets/image/bg_sunrise.jpg'),
      activities: [
        {
          url: 'https://www.figma.com/community/file/1229773222386809858/XRUI-Toolkit',
          image_url: require('@/assets/image/creative/toolkit.jpg'),
          tag: 'Figma'
        },
        {
          url: 'https://www.youtube.com/watch?v=D0_OCFrtvyk',
          image_url: 'https://i3.ytimg.com/vi/D0_OCFrtvyk/maxresdefault.jpg',
          tag: 'Nreal'
        },
        {
          url: 'https://www.bezel.it/x0mi5a',
          image_url: require('@/assets/image/creative/shopping.jpg'),
          tag: 'Bezel'
        },
        {
          url: 'https://dribbble.com/akinen',
          image_url: require('@/assets/image/creative/virtual.jpg'),
          tag: 'Dribbble'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
@import "../../assets/css/article.styl"

// OTHERS
.others
  display flex
  flex-wrap: wrap
  justify-content space-between

  @media (max-width: 768px)
      flex-wrap wrap

.other
  position relative
  width calc(33.3% - 22px)

  @media (max-width: 768px)
    width calc(50% - 16px)

.photo-other
  width 100%
  height 20vw
  object-fit cover
  border-radius 16px
  transition all 0.25s

  &:hover
    width calc(100% - 32px)
    height calc(20vw - 32px)
    margin 16px

.tag
  position absolute
  bottom 16px
  right 8px
  padding 4px 16px
  font-weight bold
  color #222
  background-color white
  border-radius 100px
</style>
