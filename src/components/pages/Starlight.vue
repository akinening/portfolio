<template>
<div class="index">
  <auth-modal v-if="isOpen" />

  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <router-link to="/" class="hero__back">＜ Akinen.com</router-link>
    <h1 class="title">STARLIGHT</h1>
  </div>

  <hobby-area />
  <tooon-link />
</div>
</template>

<script>
import AuthModal from '@/components/AuthModal'
import HobbyArea from '@/components/HobbyArea'
import TooonLink from '@/components/TooonLink'

export default {
  name: 'Index',
  components: {
    AuthModal,
    HobbyArea,
    TooonLink
  },
  data () {
    return {
      isOpen: false,
      bg_top: require('@/assets/image/bg_tokyo.png')
    }
  },
  beforeMount () {
    this.isOpen = localStorage.getItem('isOpen')
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.hero
  position relative

.hero__back
  display block
  padding 2px 8px 2px 16px
  font-size 13px
  color base-black
  background-color rgba(white, 0.8)

.title
  position absolute
  bottom 12px
  left 20px
  font-family "Zilla Slab"
  font-size 64px
  font-weight 600
  line-height 1.0
  letter-spacing 0.1rem

  @media (max-width: 768px)
    font-size 40px
</style>
