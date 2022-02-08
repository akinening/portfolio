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
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterArea',
  data () {
    return {
      facebook: require('@/assets/image/sns/facebook.svg')
    }
  }
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
  &__right
    display block

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
</style>
