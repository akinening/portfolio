<template>
  <footer class="footer">
    <p class="title">Contact</p>
    <div class="contacts">
      <a class="contact" href="https://www.facebook.com/ackiena" target="_blank" rel="noopener noreferrer">
        <img class="contact__img" src="/assets/image/svg/facebook.svg" alt="facebook">
        <p>Facebook</p>
      </a>
    </div>
    <p class="footer__copy">©︎ 2021 Akinen</p>
  </footer>
</template>

<style scoped lang="stylus">
.footer
  padding-top 40px
  text-align center
  color white
  background-color rgb(36, 40, 42)

  &__copy
    font-weight 500
    padding 24px 0 16px

.title
  font-size 24px
  font-weight 600
  margin-bottom 32px

.contacts
  display flex
  justify-content center
  margin 0 10px

.contact
  display inline-block
  margin 0 10px 10px
  width 200px
  padding 12px 30px
  color rgba(36, 40, 42, 1.0)
  background-color white
  border-radius 4px
  font-size 16px
  font-weight 500
  transition all 0.15s

  &__img
    opacity 1
    transition all 0.15s

  &:hover
    color rgba(36, 40, 42, 0.6)

    > .contact__img
      opacity 0.6
</style>
