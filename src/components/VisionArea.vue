<template>
  <section>
    <!-- <h2 class="c-title">Vision / Philosophy</h2> -->
    <div class="visionaly">
      <div class="vision">
        <h3 class="vision__title">Service Design</h3>
        <p class="vision__description">
          サービスの体験設計やUIデザインによって、事業やチームに貢献します。人から愛される／喜ばれるデザインを目指して、日々試行錯誤しています。
        </p>
      </div>
      <div class="vision">
        <h3 class="vision__title">Design × Engineering</h3>
        <p class="vision__description">
          元エンジニアとしての経験を活かし、エンジニアとの意思疎通の橋渡し役となることで、より良いサービス開発を目指します。
        </p>
      </div>
      <div class="vision">
        <h3 class="vision__title">Contribution to Society</h3>
        <p class="vision__description">
          デザインを通じて、ユーザーの日々の暮らしをより豊かにすることで、社会に貢献します。
        </p>
      </div>
    </div>
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
  border-radius 8px
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
