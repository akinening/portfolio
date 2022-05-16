<template>
  <div class="cover">
    <footer class="footer">
      <div class="footer__left">
        <div class="link">
          <p class="link__title">ご依頼 受付窓口</p>
          <p class="">現在、ご依頼はTooonにて承っております。</p>
          <a class="link__btn" href="https://tooon.app/illust" target="_blank" rel="noopener noreferrer">相談する</a>
        </div>
      </div>
      <div class="footer__right">
        <a href="https://twitter.com/hosi_xyz" target="_blank"><img class="sns" src="@/assets/image/sns/twitter.png" alt="twitter"></a>
        <a href="https://www.instagram.com/_starl8" target="_blank"><img class="sns" src="@/assets/image/sns/instagram.png" alt="instagram"></a>
        <a href="https://note.com/hosi_xyz" target="_blank"><img class="sns" src="@/assets/image/sns/note.png" alt="note"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterArea'
}
</script>

<style scoped lang="stylus">
.cover
  width 100%
  background-color rgb(36, 40, 42)
  color white

.footer
  display flex
  justify-content space-between
  margin 0 80px
  padding 40px 0

  @media (max-width: 768px)
    flex-direction column
    margin 0 20px
    padding 20px

  @media (min-width: 1200px)
    margin 0 auto
    width 960px

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

  @media (max-width: 768px)
    text-align center

  &__title
    font-weight bold

    @media (max-width: 768px)
      margin-top 20px

  &__btn
    display block
    margin-top 20px
    padding 12px 48px
    width 280px
    border-radius 4px
    font-size 14px
    font-weight 700
    text-align center
    color rgb(36, 40, 42)
    background-color white
    box-sizing border-box
    transition all 0.2s

    &:hover
      opacity 0.5

    @media (max-width: 768px)
      margin 20px 20px 0

.sns
  width 40px
  height 40px
  margin-left 20px
  opacity 0.5
  transition all 0.2s

  &:hover
    opacity 1.0
</style>
