<template>
<div>
  <div class="hero" :style="{backgroundImage: 'url(' + bg_creative + ')' }">
    <header-area />
    <span class="hero__content">XRUI</span>
  </div>
  <header-bar />

  <article class="c-centering mb-100">
    <h2 class="mt-plus message">
        From Fiction to Reality.
    </h2>
    <p class="sub-title">
        AIやXRが着実に進歩し、SFがフィクションではなくなる時代。<br>想像を現実にするために、デザインの力で貢献します。
    </p>
    <section class="skill mb-30">
      <a href="https://speakerdeck.com/akinen/uinituite" target="_blank">
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
    <section class="mb-30">
      <h2 class="c-title">COLUMN</h2>
      <ul class="others">
        <li class="other mb-30">
          <a href="https://note.com/012/n/n1a970fad456f" target="_blank">
            <img class="photo-other" src="https://assets.st-note.com/production/uploads/images/98646374/rectangle_large_type_2_07532c7d208ec295983c71f5e786079c.png" alt="">
          </a>
        </li>
        <li class="other mb-30">
          <a href="https://note.com/012/n/n4ece8e04755f" target="_blank">
            <img class="photo-other" src="https://assets.st-note.com/production/uploads/images/98502985/rectangle_large_type_2_2c3698bb8f53adfb8dbcfc84a07c4337.png" alt="">
          </a>
        </li>
        <li class="other mb-30">
          <a href="https://note.com/012/n/nf4d0ea8e7eb7" target="_blank">
            <img class="photo-other" src="https://assets.st-note.com/production/uploads/images/98354399/rectangle_large_type_2_9248f2234007e1a713c30c014fa254d4.png" alt="">
          </a>
        </li>
      </ul>
    </section>
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
          url: 'https://www.youtube.com/watch?v=D0_OCFrtvyk',
          image_url: 'https://i3.ytimg.com/vi/D0_OCFrtvyk/maxresdefault.jpg',
          tag: 'Nreal'
        },
        {
          url: 'https://www.bezel.it/x0mi5a',
          image_url: require('@/assets/image/creative/shopping.png'),
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

.message
  margin-bottom -20px
  font-size 24px
  font-weight 700
  text-align center
  line-height 1.8
  letter-spacing 0.1rem

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
