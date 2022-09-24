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
  position sticky
  top 0
  z-index 100
  margin 10px 0 0
  width 100%
  text-align center
  box-sizing border-box
  background-color #fafafa

.tabs
  padding 10px 20px

  @media (max-width: 768px)
    padding 10px 8px

.tab
  display inline-block
  padding 8px 36px
  color rgb(36, 40, 42)
  border-radius 100px
  font-size 16px
  font-weight bold
  margin-left 20px
  transition all 0.2s

  @media (max-width: 768px)
    margin-left 8px
    padding 8px 16px

  &:hover
    background-color rgba(0, 196, 220, 0.2)

  &.router-link-exact-active
    background-color rgba(0, 196, 220, 0.2)

</style>
