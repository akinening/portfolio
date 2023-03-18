<template>
<div class="index">
  <auth-modal v-if="!isAuthed" />
  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <header-area />
    <div class="hero__content text-center">
      <h1 class="title">AKINORI OZ<span class="kerning--za"></span>A<span class="kerning--aw"></span>W<span class="kerning--wa"></span>A</h1>
      <p class="sub-title">
        Akinenこと小澤晶徳は、ユーザビリティやインタラクションを<br class="hide-sp">
        考慮したデザインが得意なデジタルプロダクトデザイナーです。
      </p>
    </div>
  </div>
  <header-bar />

  <works-area />
  <footer-area />
</div>
</template>

<script>
import AuthModal from '@/components/AuthModal'
import HeaderArea from '@/components/HeaderArea'
import HeaderBar from '@/components/HeaderBar'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Index',
  components: {
    AuthModal,
    HeaderArea,
    HeaderBar,
    WorksArea,
    FooterArea
  },
  data () {
    return {
      isAuthed: true,
      bg_top: require('@/assets/image/bg.jpg')
    }
  },
  beforeMount () {
    this.isAuthed = localStorage.getItem('isAuthed')
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

.kerning
  @media (min-width: 769px)
    &--za
      margin-right 3.5px
    &--aw
      margin-right -6px
    &--wa
      margin-right -6px
</style>
