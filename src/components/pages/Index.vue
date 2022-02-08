<template>
<div class="index">
  <auth-modal v-if="!isAuthed" />

  <header-area />
  <div class="hero" :style="{backgroundImage: 'url(' + bg_top + ')' }">
    <div class="hero__content text-center">
      <h1 class="title">Design can change our lives.</h1>
    </div>
  </div>

  <works-area />
  <footer-area />
</div>
</template>

<script>
import AuthModal from '@/components/AuthModal'
import HeaderArea from '@/components/HeaderArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Index',
  components: {
    AuthModal,
    HeaderArea,
    WorksArea,
    FooterArea
  },
  data () {
    return {
      isAuthed: true,
      bg_top: require('@/assets/image/bg_about.jpg'),
      text_copy: 'URLをコピー'
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
