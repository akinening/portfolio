<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" width="auto" height="72" src="@/assets/image/logo.svg" alt="Akinen">
    </router-link>
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
  width 100%
  text-align center
  box-sizing border-box

.logo
  margin-top 8px
</style>
