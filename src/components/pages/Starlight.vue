<template>
<div class="index">
  <auth-modal v-if="isOpen" />

  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <div class="c-centering">
      <router-link to="/" class="hero__back">＜ Akinen.com</router-link>
      <h1 class="title">STARLIGHT</h1>
    </div>
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
      bg_top: require('@/assets/image/bg_starlight.png')
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
  display inline-block
  padding 2px 8px 2px 8px
  font-size 14px
  color base-black
  background-color rgba(white, 0.7)
  border-radius 100px

.title
  position absolute
  bottom 12px
  font-family "Zilla Slab"
  font-size 64px
  font-weight 600
  line-height 1.0
  letter-spacing 0.1rem

  @media (max-width: 768px)
    font-size 40px
</style>
