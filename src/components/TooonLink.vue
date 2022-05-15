<template>
  <footer class="footer">
    <div class="footer__left">
      <div class="link">
        <p class="link__title">ご依頼 受付窓口</p>
        <p class="">現在、ご依頼はTooonにて承っております。</p>
      </div>
    </div>
    <div class="footer__right">
      <a href="https://twitter.com/hosi_xyz" target="_blank"><img class="sns" src="@/assets/image/sns/twitter.png" alt="twitter"></a>
      <a href="https://www.instagram.com/_starl8" target="_blank"><img class="sns" src="@/assets/image/sns/instagram.png" alt="instagram"></a>
      <a href="https://note.com/hosi_xyz" target="_blank"><img class="sns" src="@/assets/image/sns/note.png" alt="note"></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterArea'
}
</script>

<style scoped lang="stylus">
.footer
  display flex
  justify-content space-between
  padding 40px 80px
  color white
  background-color rgb(36, 40, 42)

  @media (max-width: 768px)
    flex-direction column
    padding 20px

  &__left
    display block

    @media (max-width: 768px)
      margin 0 auto

  &__right
    display flex
    align-items center

    @media (max-width: 768px)
      margin 40px 0 20px
      justify-content center

.link
  font-family "Zilla Slab"
  font-weight 500
  font-size 16px

  &__title
    font-weight bold

.sns
  width 40px
  height 40px
  margin-left 20px
  opacity 0.5
  transition all 0.2s

  &:hover
    opacity 1.0
</style>
