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
        <p class="link__title">BLOG</p>
        <span class="link__border"></span>
        <a class="link__url" href="https://times.akinen.com">times.akinen.com</a>
      </div>
    </div>
    <div class="footer__right">
      <a href="https://www.facebook.com/ackiena" target="_blank"><img class="sns" src="@/assets/image/sns/facebook.png" alt="facebook"></a>
      <a href="https://www.linkedin.com/in/akinen" target="_blank"><img class="sns" src="@/assets/image/sns/linkedin.png" alt="linkedin"></a>
      <a href="https://dribbble.com/akinen" target="_blank"><img class="sns" src="@/assets/image/sns/dribbble.png" alt="dribbble"></a>
      <a href="https://www.youtube.com/@akinen" target="_blank"><img class="sns" src="@/assets/image/sns/youtube.png" alt="youtube"></a>
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
  background-color #222

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

.logo
  width 280px

.link
  display flex
  font-family "Montserrat"
  font-weight 500
  font-size 16px

  &__title
    width 96px
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
  transition all 0.2s

  &:hover
    opacity 1.0
</style>
