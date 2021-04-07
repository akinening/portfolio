<template>
<div>
  <section class="message">
    <p class="message__text">
      はじめまして！ あきねんと申します。<br>
      Webを通じてリアルな「日常」をデザインするため、
      日々プロダクトと向き合っています。<br>
      デザインを通じて人々と中長期的な接点を持ち
      その人の体験や行動を変えることで、
      より便利で過ごしやすい世界を実現します。
    </p>
  </section>
</div>
</template>

<script>
export default {
  name: 'HeroArea'
}
</script>

<style scoped lang="stylus">
.hide-sp
  @media (max-width: 768px)
    display none

.message
  width 100%
  padding 80px 0
  background-size cover

  @media (max-width: 768px)
    padding 60px 0

  &__text
    line-height 2.0
    font-size 20px
    font-weight 500

    @media (max-width: 768px)
      font-size 16px

</style>
