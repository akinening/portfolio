<template>
  <div class="screen">
    <div class="bg" :style="{backgroundImage: 'url(' + BG + ')'}">
      <div class="character">
        <img class="character__img" src="@/assets/image/starlight/idol.png" alt="">
      </div>

      <img class="btn btn--change" src="@/assets/image/starlight/btn/change.png" alt="change">
      <img class="btn btn--project" src="@/assets/image/starlight/btn/project.png" alt="project">
      <img class="btn btn--help" src="@/assets/image/starlight/btn/help.png" alt="help">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Starlight',
  components: {
  },
  data () {
    return {
      BG: require('@/assets/image/starlight/BG.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
shadow = drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))

.screen
  width 100vw
  height 100vh
  background-color black

.bg
  z-index 0
  margin 0 auto
  width 100%
  max-width 1440px
  height 100%
  max-height 1440px
  overscroll-behavior none
  background-position center
  background-repeat no-repeat
  background-attachment fixed
  background-size cover

.character
  z-index 5
  display flex
  align-items flex-end
  justify-content center
  width 100%
  height 100%

  &__img
    width auto
    height calc(100vh - 80px)

    @media (max-width: 768px)
      height calc(100vh - 100px)

.btn
  z-index 10
  filter shadow
  position fixed

  &:hover
    opacity 0.8

  &--change
    bottom 32px
    left 32px

    @media (max-width: 768px)
      left 20px
      height 44px

  &--project
    bottom 32px
    left calc(50% - 240px)

    @media (max-width: 768px)
      bottom 96px
      left 20px
      height 44px

  &--help
    bottom 32px
    right 32px

    @media (max-width: 768px)
      right 20px
      width 96px
</style>
