<template class="c-centering">
  <header class="header">
    <nav class="tabs">
      <router-link to="/" class="tab">TOP</router-link>
      <router-link to="/about" class="tab">ABOUT</router-link>
      <p class="tab" @click="toggleLang">{{lang}}</p>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
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
  margin 0 80px
  text-align center
  box-sizing border-box
  background-color #fafafa

  @media (max-width: 768px)
    margin 0 20px

.tab
  position relative
  display inline-block
  color rgb(36, 40, 42)
  line-height 64px
  vertical-align middle
  font-size 16px
  font-weight bold
  margin 4px 0 0 32px

  @media (max-width: 768px)
    margin-left 16px

  &:hover
    color #00C4DC

  &.router-link-exact-active
    &::before
      content ''
      position absolute
      bottom 12px
      left calc(50% - 3px)
      width 6px
      height 6px
      background-color #00C4DC
      border-radius 6px
</style>
