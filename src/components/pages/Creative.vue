<template>
<div>
  <div class="hero" :style="{backgroundImage: 'url(' + bg_creative + ')' }">
    <header-area />
    <span class="hero__content">XRUI</span>
  </div>
  <header-bar />

  <article class="c-centering mb-100">
    <section class="skill mt-80 mb-30">
      <h1 class="title">XR(VR, AR, MR)のUIデザイン</h1>
      <h2 class="title title--sub">社内共有スライド</h2>
      <p class="description">
        現在作成中です。
      </p>
      <a href="https://www.figma.com/proto/obYFoTA8B34SX2zXUWCNeL/VRUI?page-id=526%3A65&node-id=540%3A108&viewport=-656%2C1342%2C0.25&scaling=contain" target="_blank">
        <img class="image" src="@/assets/image/creative/xrui_slide.jpg" alt="XRUI">
      </a>

      <!-- <br>
      <br>
      <h2 class="title title--sub">Dribbble</h2>
      <p class="description">
        DribbbleにVRやARを想定したUIデザインを投稿しています。
        <span class="link">
          <a href="" target="_blank" class="link__button">Dribbble</a>
        </span>
      </p> -->
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
