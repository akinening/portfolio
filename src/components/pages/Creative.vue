<template>
<div>
  <div class="hero" :style="{backgroundImage: 'url(' + bg_creative + ')' }">
    <header-area />
    <span class="hero__content">Creative</span>
  </div>
  <header-bar />

  <section class="mt-80 c-centering">
    <h2 class="mt-80 c-title">PICKUP</h2>
     <ul class="cards">
      <li class="card mb-30" v-for="(project, num) in projects" :key="`project-${num}`">
        <router-link :to="project.url">
          <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
          <div class="detail">
            <p class="detail__title">{{ project.title }}</p>
            <p class="detail__text">{{ project.date }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>

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
      isAuthed: true,
      bg_creative: require('@/assets/image/bg_sunrise.jpg'),
      projects: [
        {
          title: 'Personal Development',
          description: 'I actually develop the ideas that individuals come up with.',
          url: '/works/Develop',
          image_url: require('@/assets/image/ijuin_icon.jpg'),
          date: '2014 - Now / Personal Work'
        },
        {
          title: 'Creative - VR, Game UI, Print, etc.',
          description: 'I designed the DJ logo, CD jackets, etc.',
          url: '/works/Graphics',
          image_url: require('@/assets/image/creative/hard_maniaxx.jpg'),
          date: '2014 - Now / Personal Work'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.text-center
  text-align center

.title
  font-family "Montserrat"
  font-size 64px
  font-weight 700
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  position relative
  width calc(50% - 16px)
  min-width 320px
  background-color white

  @media (max-width: 768px)
    width 100%

  .detail__title
  .detail__text
    color rgb(36, 40, 42)

  &:hover
    .photo
      width calc(100% - 32px)
      height calc(24vw - 32px)
      margin 16px
      border-radius 16px

      @media (max-width: 768px)
        height calc(50vw - 32px)

      @media (min-width: 1200px)
        height 256px

.photo
  float left
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 16px
  transition all 0.25s

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px

.detail
  padding 20px 1px
  overflow hidden

  &__title
    line-height 1.6
    font-size 20px
    font-weight 600

  &__text
    line-height 1.8
    overflow hidden
    text-overflow ellipsis
</style>
