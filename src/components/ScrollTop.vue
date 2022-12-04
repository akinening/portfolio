<template>
  <div class="scroller" v-show="isActive" @click="scrollTop">
    <img class="scroller__icon" src="@/assets/arrow_back.svg" alt="Topへ戻る">
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data () {
    return {
      isActive: false,
      scroll: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollWindow () {
      const top = 300
      this.scroll = window.scrollY
      this.isActive = !!(top <= this.scroll)
    }
  }
}
</script>

<style scoped lang="stylus">
.scroller
  position fixed
  bottom 0
  right 0
  background-color #fafafa
  padding 20px 23px
  border-radius 20px 0 0 0
  cursor url('https://raw.githubusercontent.com/akinening/portfolio/85385e0949697392e28cf9da46f88107c2279335/src/assets/image/cursor_active.svg') 7 7, pointer

  @media (max-width: 768px)
    padding 10px 13px

  &__icon
    width 40px
    height 40px
    transform rotate(90deg)
</style>
