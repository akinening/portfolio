<template>
  <footer class="footer">
    <p class="title">Contact</p>
    <a class="contact" href="https://www.facebook.com/ackiena" target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
    <a class="contact" href="https://twitter.com/_akinen" target="blank" rel="noopener noreferrer">
      Twitter
    </a>
    <p class="footer__copy">©︎ 2021 Akinen</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterArea'
}
</script>

<style scoped lang="stylus">
.footer
  padding-top 40px
  text-align center
  background-color white

  &__copy
    width 100%
    background-color #80d8d0
    font-weight 500
    margin-top 32px

.title
  font-size 24px
  font-weight 600
  margin-bottom 40px

.icon
.contact
  color rgba(36, 40, 42, 1.0)
  transition all 0.2s

  &:hover
    color rgba(36, 40, 42, 0.6)

.icon-mail
  display inline-block
  margin 0 4px 2px 0
  color rgb(36, 40, 42)
  line-height 19px
  vertical-align middle

.contact
  display block
  margin 0 auto 20px
  width 280px
  padding 12px 30px
  color rgb(36, 40, 42)
  background-color white
  border 1px solid rgb(36, 40, 42)
  border-radius 4px
  font-size 16px
  font-weight 500
</style>
