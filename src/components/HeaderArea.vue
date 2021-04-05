<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/image/logo.png" alt="akinen">
    </router-link>
    <router-link to="/works" class="tab">WORKS</router-link>
    <router-link to="/media" class="tab">MEDIA</router-link>
    <router-link to="/about" class="tab">ABOUT</router-link>
    <a href="https://akinening.studio.site/posts/skills" rel="noreferrer noreferrer">
      <p class="tab">SKILLS</p>
    </a>

    <a class="twitter" href="https://twitter.com/_akinen" target="_blank" rel="noreferrer noreferrer">TWTR</a>
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
    top 16px
    left 16px
    width calc(100% - 32px)

.logo
  margin-left 36px
  width 72px
  height 72px

  @media (max-width: 768px)
    margin-left 8px

.tab
  display inline-block
  color rgb(36, 40, 42)
  line-height 72px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin-left 32px

  @media (max-width: 768px)
    margin-left 20px

.icon-open
  width 22px
  height 22px
  color rgb(36, 40, 42)
  display inline-block
  line-height 72px
  vertical-align middle

.twitter
  position absolute
  top 0
  right 48px
  width fit-content
  margin-top 13px
  padding 10px 30px
  color rgb(36, 40, 42)
  border 2px solid rgba(36, 40, 42, 0.4)
  border-radius 8px
  font-size 16px
  font-weight bold
  transition all 0.25s

  &:hover
    border-radius 23px 23px 23px 0
    border 2px solid #45494B

  @media (max-width: 768px)
    display none
</style>
