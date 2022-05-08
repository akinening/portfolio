<template class="c-centering">
  <header class="header">
    <router-link to="/">
      <img class="logo" width="auto" height="72" src="@/assets/image/logo.svg" alt="Akinen">
    </router-link>
    <nav class="tabs">
      <router-link to="/" class="tab">TOP</router-link>
      <router-link to="/about" class="tab">ABOUT</router-link>
      <a class="tab" href="https://drawer.akinen.com" target="_blank">DRAWER</a>
      <p class="tab" @click="toggleLang">{{lang}}</p>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderArea',
  data () {
    return {
      lang: 'EN'
    }
  },
  methods: {
    toggleLang () {
      this.lang = (this.lang === 'EN') ? 'JP' : 'EN'
    }
  }
}
</script>

<style scoped lang="stylus">
.header
  display flex
  justify-content space-between
  margin 0 80px
  box-sizing border-box
  background-color #fafafa

  @media (max-width: 768px)
    margin 0 20px

.logo
  margin 8px 0 0 12px

  @media (max-width: 768px)
    margin 8px 0 0

.tab
  position relative
  display inline-block
  color rgb(36, 40, 42)
  line-height 72px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin 4px 0 0 32px

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
