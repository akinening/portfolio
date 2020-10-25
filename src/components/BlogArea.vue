<template>
  <section class="mt-60">
    <h2 class="c-title">Articles</h2>
    <a class="blog" href="https://note.com/012" target="_blank" rel="noreferrer noreferrer">
      <img class="blog__img" src="@/assets/image/note.svg" alt="note">
    </a>
    <a class="blog" href="https://zenn.dev/012" target="_blank" rel="noreferrer noreferrer">
      <img class="blog__img" src="@/assets/image/zenn.svg" alt="zenn">
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
  display inline-block
  min-width 320px
  width 33.3%
  height 160px
  margin 0 10px
  background-color #f0f3f7
  border-radius 8px
  opacity 1.0
  transition opacity 0.2s

  @media (max-width: 768px)
    width 100%
    margin 10px 0

  &:hover
    opacity 0.6

  &__img
    display block
    margin 64px auto
    height 32px
</style>
