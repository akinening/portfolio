<template>
<div class="index">
  <auth-modal v-if="!isAuthed" />
  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <header-area />
    <div class="hero__content text-center">
      <h1 class="title">Design can change our lives.</h1>
      <p class="sub-title">
        "Enrich the lives of more people."<br class="hide-sp">
        With this in mind, I face digital products on a daily basis.<br>
        I'll lead products to success by consistently engaging from the three perspectives of business strategy, design, and engineering.
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
      bg_top: require('@/assets/image/bg_game.png')
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
  font-family "Zilla Slab"
  font-size 64px
  font-weight 600
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px
</style>
