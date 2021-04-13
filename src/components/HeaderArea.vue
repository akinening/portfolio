<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/image/logo.png" alt="akinen">
    </router-link>
    <router-link to="/works" class="tab">WORKS</router-link>
    <router-link to="/media" class="tab">MEDIA</router-link>
    <router-link to="/about" class="tab">ABOUT</router-link>
    <router-link to="/skills" class="tab">SKILLS</router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderArea'
}
</script>

<style scoped lang="stylus">
.header
  z-index 100
  position fixed
  top 32px
  left 32px
  width calc(100% - 64px)
  height 72px
  display flex
  background-color rgba(255, 255, 255, 0.6)
  backdrop-filter blur(3px)
  box-shadow 0 2px 12px rgba(0,0,0,.06)
  border-radius 8px

  @media (max-width: 768px)
    top 0
    left 0
    width 100%
    box-shadow none

.logo
  margin-left 36px
  width 72px
  height 72px

  @media (max-width: 768px)
    margin 12px -8px 0 12px
    width 48px
    height 48px

.tab
  position relative
  display inline-block
  color rgb(36, 40, 42)
  line-height 72px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin-left 32px

  @media (max-width: 768px)
    margin-left 16px

  &.router-link-exact-active
    &::before
      content ''
      position absolute
      bottom 16px
      left calc(50% - 3px)
      width 6px
      height 6px
      background-color rgb(36, 40, 42)
      border-radius 6px
</style>
