<template>
  <section class="mt-60">
    <h2 class="c-title">Articles</h2>
    <a href="https://note.com/012" target="_blank" rel="noreferrer noreferrer">
      <img class="blog" src="@/assets/image/note.svg" alt="note">
    </a>
    <a href="https://zenn.dev/012" target="_blank" rel="noreferrer noreferrer">
      <img class="blog" src="@/assets/image/zenn.svg" alt="zenn">
    </a>
  </section>
</template>

<script>
export default {
  name: 'BlogArea',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.blog
  display block
  margin-top 30px
  height 32px
  opacity 1.0
  transition opacity 0.2s

  &:hover
    opacity 0.8
</style>
