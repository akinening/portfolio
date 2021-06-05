<template>
  <section>
    <h2 class="c-title mt-80">Vision / Philosophy</h2>
    <ul class="visionaly">
      <li class="vision c-shadow">
        <p class="vision__title">Contribution to Society</p>
        <p class="vision__description">
          縁の下の力持ち。デザインを通じて、より多くの人々の暮らしを豊かにすることで、社会に貢献します。
        </p>
      </li>
      <li class="vision c-shadow">
        <p class="vision__title">Service Design</p>
        <p class="vision__description">
          一貫したサービスデザインによって、事業やチームに貢献します。人から愛されるデザインを目指して、日々試行錯誤しています。
        </p>
      </li>
      <li class="vision c-shadow">
        <p class="vision__title">Design × Engineering</p>
        <p class="vision__description">
          元エンジニアとしての経験を活かし、他職種との意思疎通の橋渡し役となることで、より良いサービス開発を目指します。
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VisionArea',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.visionaly
  display flex
  flex-direction row

  @media (max-width: 768px)
    flex-direction column

.vision
  width 100%
  min-height 108px
  padding 20px
  background-color white
  border-radius 6px
  box-sizing border-box

  &:not(:last-child)
    margin 0 20px 0 0

  @media (max-width: 768px)
    &:not(:last-child)
        margin 0 0 20px 0

  &__title
    font-size 20px
    font-weight 500

  &__description
    margin-top 10px
</style>
