<template>
  <footer class="footer">
    <div class="footer__left">
      <img class="logo" src="@/assets/image/logo_footer.svg" alt="Akinen">
      <div class="link">
        <p class="link__title">WEBSITE</p>
        <span class="link__border"></span>
        <a class="link__url" href="https://akinen.com">akinen.com</a>
      </div>
      <div class="link">
        <p class="link__title">STARLIGHT</p>
        <span class="link__border"></span>
        <a class="link__url" href="https://starlight.akinen.com">starlight.akinen.com</a>
      </div>
      <div class="link">
        <p class="link__title">DRAWER</p>
        <span class="link__border"></span>
        <a class="link__url" href="https://drawer.akinen.com">drawer.akinen.com</a>
      </div>
    </div>
    <div class="footer__right">
      <a href="" target="_blank"><img class="sns" src="@/assets/image/sns/twitter.png" alt="twitter"></a>
      <a href="" target="_blank"><img class="sns" src="@/assets/image/sns/facebook.png" alt="twitter"></a>
      <a href="" target="_blank"><img class="sns" src="@/assets/image/sns/instagram.png" alt="twitter"></a>
      <a href="" target="_blank"><img class="sns" src="@/assets/image/sns/note.png" alt="twitter"></a>
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
    padding 40px 4px

  &__left
    display block

  &__right
    display flex
    align-items center

.logo
  width 280px

.link
  display flex
  font-family "Zilla Slab"
  font-weight 500
  font-size 16px

  &__title
    width 104px
    margin-left 16px

  &__border
    height 12px
    border 1px solid white
    margin 5px 0

  &__url
    margin-left 16px
    color white

.sns
  width 40px
  height 40px
  margin-left 20px
  opacity 0.5

  &:hover
    opacity 1.0
</style>
