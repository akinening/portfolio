<template>
  <footer class="footer">
    <p class="title">Contact</p>
    <div class="contacts">
      <a class="contact" href="https://www.facebook.com/ackiena" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a class="contact" href="https://twitter.com/_akinen" target="blank" rel="noopener noreferrer">
        Twitter
      </a>
    </div>
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
  color white
  background-color rgb(36, 40, 42)

  &__copy
    font-weight 500
    padding 16px 0

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

.contacts
  display flex
  justify-content center
  margin 0 10px

.contact
  display inline-block
  margin 0 10px 10px
  width 200px
  padding 12px 30px
  color rgb(36, 40, 42)
  background-color white
  border-radius 4px
  font-size 16px
  font-weight 500
</style>
