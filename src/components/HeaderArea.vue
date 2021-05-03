<template>
  <header class="header">
    <router-link to="/">
      <img class="logo logo--pc" src="@/assets/image/logo_pc.png" alt="Akinen">
      <img class="logo logo--sp" src="@/assets/image/logo_sp.png" alt="Akinen">
    </router-link>
    <nav class="tabs">
      <router-link to="/" class="tab">TOP</router-link>
      <router-link to="/about" class="tab">ABOUT</router-link>
      <router-link to="/skills" class="tab">SKILLS</router-link>
      <router-link to="/media" class="tab">MEDIA</router-link>
    </nav>
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
  top 16px
  left 16px
  width calc(100% - 32px)
  height 72px
  display flex
  background-color rgba(255, 255, 255, 0.6)
  backdrop-filter blur(3px)
  border-radius 8px

  @media (max-width: 768px)
    top 0
    left 0
    width 100%
    box-shadow none
    overflow scroll
    white-space nowrap

    &::-webkit-scrollbar
      display none

.logo
  margin-left 12px
  height 72px

  &--pc
    @media (max-width: 768px)
      display none

  &--sp
    display none

    @media (max-width: 768px)
      display block
      margin 12px -8px 0 12px
      width 52px
      height 52px

.tabs
  position absolute
  right 32px

  @media (max-width: 768px)
    position relative
    right 0

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
      background-color #80d8d0
      border-radius 6px
</style>
