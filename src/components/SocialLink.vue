<template>
  <div class="sns">
    <a class="link" href="https://twitter.com/_akinen" target="blank" rel="noopener noreferrer">
      <img class="link__img" src="http://asougi.me/wp-content/themes/renewal/images/icon-twitter.png" alt="twitter">
    </a>
    <a class="link" href="https://youtrust.jp/users/20ca252fa4912648d743818f92fec59f" target="blank" rel="noopener noreferrer">
      <img class="link__img" src="http://asougi.me/wp-content/uploads/2020/09/youtrust.png" alt="YOUTRUST">
    </a>
    <a class="link" href="https://dribbble.com/" target="blank" rel="noopener noreferrer">
      <img class="link__img" src="http://asougi.me/wp-content/themes/renewal/images/icon-dribbble.png" alt="dribbble">
    </a>
    <a class="link" href="https://www.wantedly.com/users/12054465" target="blank" rel="noopener noreferrer">
      <img class="link__img" src="http://asougi.me/wp-content/themes/renewal/images/icon-wantedly.png" alt="wantedly">
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLink'
}
</script>

<style scoped lang="stylus">
.sns
  position fixed
  bottom 0px
  left 0px
  padding 16px 32px
  border-radius 0 8px 0 0
  background-color rgba(255, 255, 255, 0.96)

.link
  display inline-block

  &__img
    width 36px
    height 36px
</style>
