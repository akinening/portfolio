<template>
  <header class="header">
    <nuxt-link to="/">
      <img class="logo" width="auto" height="72" src="@/assets/image/logo_pc.png" alt="Akinen">
    </nuxt-link>
    <nav class="tabs">
      <nuxt-link to="/" class="tab">TOP</nuxt-link>
      <nuxt-link to="/about" class="tab">ABOUT</nuxt-link>
      <nuxt-link to="/media" class="tab">MEDIA</nuxt-link>
    </nav>
  </header>
</template>

<style scoped lang="stylus">
.header
  width 100%
  padding 0 16px
  box-sizing border-box
  background-color #fafafa
  text-align center

.logo
  margin-left 12px

.tab
  position relative
  display inline-block
  color rgb(36, 40, 42)
  line-height 72px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin -16px 0 0 32px

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
