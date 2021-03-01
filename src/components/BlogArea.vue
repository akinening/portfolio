<template>
  <section class="mt-80">
    <h2 class="c-title">Media</h2>
    <div class="link">
      <a class="blog" href="https://note.com/012" target="_blank" rel="noreferrer noreferrer">
        <img class="blog__img" src="@/assets/image/note.svg" alt="note">
      </a>
      <a class="blog" href="https://zenn.dev/012" target="_blank" rel="noreferrer noreferrer">
        <img class="blog__img" src="@/assets/image/zenn.svg" alt="zenn">
      </a>
      <a class="blog" href="https://speakerdeck.com/akinen" target="_blank" rel="noreferrer noreferrer">
        <img class="blog__img" src="@/assets/image/deck.svg" alt="speaker deck">
      </a>
    </div>
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

.link
  display flex
  justify-content space-between
  flex-direction row

  @media (max-width: 768px)
    flex-direction column

.blog
  display inline-block
  width 33.3%
  height 160px
  background-color #f0f3f7
  border-radius 4px
  opacity 1.0
  transition opacity 0.2s

  &:not(:last-child)
    margin 0 20px 0 0

  @media (max-width: 768px)
    width 100%

    &:not(:last-child)
      margin 0 0 20px 0

  &:hover
    opacity 0.6

  &__img
    display block
    margin 64px auto
    height 32px
</style>
