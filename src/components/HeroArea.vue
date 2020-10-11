<template>
  <div class="hero">
    <video class="bg-video" src="@/assets/bg.webm" poster="" autoplay loop muted></video>
    <div class="layer">
      <div class="msg">
        <h1 class="msg__title">Hi, I'm Akinen. 👋</h1>
        <p class="msg__description">
          はじめまして、UI/UXデザイナーのあきねんです。Webを通じて「リアル」をデザイン<br>することをミッションとして、日々デザインに取り組んでいます。<br>
          デザインを通じて人々と中長期的な接点を持ち、人々の体験や行動を変えることで、<br>世の中がより便利で過ごしやすいものになると信じています。
        </p>
        <router-link to="/about" class="msg__button">ABOUT ME</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroArea'
}
</script>

<style scoped lang="stylus">
.hero
  width calc(100vw - 32px)
  height calc(100vh - 32px)
  margin 16px
  margin-top -88px
  position relative
  background-color rgba(0, 0, 0, 0.14)
  border-radius 16px
  overflow hidden

.bg-video
  z-index -1
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  object-fit cover
  transform scale(1.25)

.layer
  height 100%
  display flex
  justify-content center
  align-items center

.msg
  margin-top 52px
  padding 8px 32px 32px
  width 640px
  color #45494B
  background-color rgba(255, 255, 255, 0.96)
  border-radius 8px

  &__title
    line-height 2.0
    font-size 48px
    font-weight bold

  &__description
    line-height 2.0
    font-size 16px

  &__button
    display block
    width fit-content
    margin-top 22px
    padding 12px 32px
    color white
    background-color #45494B
    border-radius 8px
    font-size 16px
    font-weight bold
    transition opacity .2s

  &__button:hover
    opacity 0.8
    text-decoration none
</style>
