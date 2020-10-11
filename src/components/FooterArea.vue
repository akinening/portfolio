<template>
  <footer class="footer">
    <a class="contact" href="mailto:akinening@gmail.com" target="blank" rel="noopener noreferrer">
      <img class="icon-mail" src="@/assets/mail.svg" alt="mail">
      CONTACT ME
    </a>
    <p class="footer__text">
      お仕事のご相談、個人的な話や友達申請など<br>
      なんでもお気軽にご連絡ください！
    </p>

    <!-- <div class="footer__link"> -->

      <!-- TODO -->
      <!-- <li class="facebook">
        <a target="_blank"
          href="https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEhQOWNpTTlrS2x3M0V4TkJ0OVd3UlE2VWptc2pCQV9fZAWJ2ZA2pvNGs1ZATAtTEZALYmNCSERjT0txRmhZAZAkw0Qm16a3ZABVEduMTFPaFl3dTRJUE15TmxocHZAjQWZA6bXctbUZABd2hHUFNtdzdUajlr/"><i
            class="icon-facebook"></i></a>
      </li>
      <li class="twitter">
        <a target="_blank" href="https://twitter.com/_akinen"><i class="icon-twitter"></i></a>
      </li>
      <li class="linkedin">
        <a target="_blank" href="https://www.linkedin.com/search/results/all/?keywords=Ozawa%20Akinori"><i
            class="icon-linkedin"></i></a>
      </li>
      <li>
        <div>akinening@gmail.com</div>
      </li> -->
    <!-- </div> -->
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
  margin 160px auto 0
  padding-top 63px
  padding-bottom 32px
  text-align center
  background-color #f0f3f7

  &__text
    margin 24px 0 32px
    line-height 1.8

  // &__link
  //   display: flex;
  //   width: 222px;
  //   margin: 0 auto;
  //   align-items: center;
  //   justify-content: space-between;

  &__copy
    font-weight 500
    margin-top 32px

.icon-mail
  display inline-block
  margin 0 4px 2px 0
  color rgb(36, 40, 42)
  line-height 19px
  vertical-align middle

.contact
  display inline-block
  width 280px
  padding 10px 30px
  color rgb(36, 40, 42)
  background-color white
  border 2px solid rgba(36, 40, 42, 0.4)
  border-radius 8px
  font-size 16px
  font-weight bold
</style>
