<template>
  <section>
    <h2 class="c-title mt-80">Vision / Philosophy</h2>
    <ul class="visionaly">
      <li class="vision c-shadow"  v-for="(vision, num) in visions" :key="`vision-${num}`">
        <img class="vision__image" :src="vision.image" :alt="vision.title">
        <div class="detail">
          <p class="detail__title">{{ vision.title }}</p>
          <p class="detail__description">{{ vision.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VisionArea',
  data () {
    return {
      visions: [
        {
          image: require('@/assets/image/vision1.png'),
          title: 'Service Design',
          description: '幅広い媒体のデザイン経験をもとに、一貫したサービスデザインに取り組んでいます。「人から愛されるデザイン」がテーマ。'
        },
        {
          image: require('@/assets/image/vision2.png'),
          title: 'Design × Engineering',
          description: '元エンジニアとしての経験を活かし、他職種との意思疎通の橋渡し役となることで、より良いサービス開発を目指します。'
        },
        {
          image: require('@/assets/image/vision3.png'),
          title: 'Contribution to Society',
          description: '縁の下の力持ち。デザインを通じて、より多くの人々の暮らしを豊かにすることで、社会に貢献します。'
        }
      ]
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
  background-color white
  border-radius 6px
  box-sizing border-box
  overflow hidden

  &:not(:last-child)
    margin 0 20px 0 0

  @media (max-width: 768px)
    &:not(:last-child)
        margin 0 0 20px 0

  &__image
    width 100%

.detail
  padding 20px

  &__title
    font-size 20px
    font-weight 500

  &__description
    margin-top 10px
</style>
