<template>
  <footer class="footer">
    <a class="contact" href="mailto:akinening@gmail.com" target="blank" rel="noopener noreferrer">
      <img class="icon-mail" src="@/assets/mail.svg" alt="mail">
      話しかける
    </a>
    <p class="footer__or">または</p>
    <div>
      <a href="https://youtrust.jp/users/20ca252fa4912648d743818f92fec59f" target="_blank" rel="noreferrer noreferrer">
        <img class="icon" src="@/assets/image/sns/youtrust.svg" alt="youtrust">
      </a>
      <a href="https://www.wantedly.com/users/12054465" target="_blank" rel="noreferrer noreferrer">
        <img class="icon" src="@/assets/image/sns/wantedly.svg" alt="wantedly">
      </a>
      <a href="https://www.facebook.com/ackiena" target="_blank" rel="noreferrer noreferrer">
        <img class="icon" src="@/assets/image/sns/facebook.svg" alt="facebook">
      </a>
      <a href="https://twitter.com/_akinen" target="_blank" rel="noreferrer noreferrer">
        <img class="icon" src="@/assets/image/sns/twitter.svg" alt="twitter">
      </a>
    </div>
    <p class="footer__text">
      お仕事のご相談、個人的な話や友達申請など<br>
      なんでもお気軽にご連絡ください！
    </p>
    <p class="footer__copy">©︎ 2020 Akinen</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterArea'
}
</script>

<style scoped lang="stylus">
.footer
  padding-top 63px
  padding-bottom 32px
  text-align center
  background-color #f0f3f7

  &__text
    margin 24px 0 32px
    line-height 1.8

  &__or
    margin 24px 0

  &__copy
    font-weight 500
    margin-top 32px

.icon
.contact
  opacity 1.0
  transition opacity 0.2s

  &:hover
    opacity 0.8

.icon-mail
  display inline-block
  margin 0 4px 2px 0
  color rgb(36, 40, 42)
  line-height 19px
  vertical-align middle

.contact
  display inline-block
  width 280px
  padding 12px 30px
  color rgb(36, 40, 42)
  background-color white
  border-radius 8px
  font-size 16px
  font-weight 500
</style>
