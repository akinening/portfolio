<template class="c-centering">
  <header class="header c-shadow">
    <nav class="tabs">
      <router-link to="/" class="tab">TOP</router-link>
      <router-link to="/creative" class="tab">STUDIES</router-link>
      <router-link to="/about" class="tab">ABOUT</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped lang="stylus">
.header
  position sticky
  top 10px
  z-index 100
  margin 10px auto 0
  width fit-content
  text-align center
  box-sizing border-box
  background-color white
  border-radius 100px

.tabs
  padding 10px

  @media (max-width: 768px)
    padding 10px 8px

.tab
  display inline-block
  padding 8px
  width 120px
  color rgb(36, 40, 42)
  border-radius 100px
  font-size 16px
  font-weight bold
  margin-left 20px
  transition all 0.2s

  @media (max-width: 768px)
    margin-left 0
    padding 8px
    width 94px

  &:first-child
    margin-left 0

  &:hover
  &.router-link-exact-active
    color white
    background-color rgb(36, 40, 42)
    background-color rgb(36, 40, 42)

</style>
