<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/image/logo.png" alt="akinen">
    </router-link>
    <router-link to="/" class="tab">TOP</router-link>
    <router-link to="/about" class="tab">ABOUT</router-link>
    <a href="https://www.notion.so/akinen/0156c2bfee4d438b891581bd7d22606c" target="_blank">
      <p class="tab">SKILLS</p>
      <img class="icon-open" src="@/assets/open_in_new.svg" alt="open in new tab">
    </a>

    <a class="twitter" href="https://twitter.com/_akinen" target="_blank">TWTR</a>
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
  position sticky
  top 16px
  left 32px
  margin-top 32px
  width calc(100% - 64px)
  height 72px
  display flex
  background-color rgba(255, 255, 255, 0.96)
  box-shadow 0 2px 12px rgba(0,0,0,.06)
  border-radius 8px

.logo
  margin-left 36px
  width 72px
  height 72px

.tab
  display inline-block
  color rgb(36, 40, 42)
  line-height 72px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin-left 32px

.icon-open
  width 22px
  heig 22px
  color rgb(36, 40, 42)
  display inline-block
  line-height 72px
  vertical-align: middle

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
</style>
