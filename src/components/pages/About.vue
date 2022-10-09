<template>
<div>
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_work + ')' }">
    <header-area />
    <span class="hero__content">About</span>
  </h1>
  <header-bar />
  <article class="mt-plus" itemscope="" itemtype="http://schema.org/Person">
    <section class="c-centering">
      <h2 class="message">
        <!-- ヒトとプロダクトの「間」をデザインし、<br class="hide-sp">日々の暮らしに体験価値を届けます。 -->
        I design between people and products <br class="hide-sp">to deliver experiential value to daily life.
      </h2>
      <p class="sub-title">
        <!-- たとえ良い商品や企画があっても、ユーザーが価値を感じられなければ意味がありません。<br>
        サービスデザインを通じてコアバリューを洗い出し、人々の暮らしのなかに体験を届けます。 -->
        Even if you have a good product or plan, it is meaningless if users do not find it valuable.<br>
        Through service design, I identify core values and deliver experiences in people's lives.
      </p>

      <div class="development c-shadow mt-plus mb-100">

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill-1.png" alt="体験設計">
          <div class="skill__box">
            <h2 class="title">UX設計</h2>
            <ul class="description">
              <li>新規立ち上げ、運用での改善サイクルの両方で、体験設計の経験があります。ストーリーを描き、ユーザーフレンドリーな体験を実現します。</li>
              <li><b>定量評価</b>：アナリティクスやA/Bテスト等から、ペルソナ像をアップデートしたり、施策に落とし込みます。</li>
              <li><b>定性評価</b>：ユーザーインタビューをデザイナー主導で実施。インサイトを把握し、プロダクトの改善に活かします。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill-3.png" alt="UI設計">
          <div class="skill__box">
            <h2 class="title">UI設計</h2>
            <ul class="description">
              <li>toB・toC、ネイティブアプリからWebサービスまで幅広くデジタルプロダクトのデザイン経験があります。</li>
              <li>ユーザーにもコンピュータにも優しい、直感的に触れるUIを目指しています。</li>
              <li>退会導線を複雑にしたり、許可なく通知を送るなどのBAD UIを未然に防ぎ、ユーザー目線のUIを提案します。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill-2.png" alt="情報設計">
          <div class="skill__box">
            <h2 class="title">手を動かす</h2>
            <ul class="description">
              <li>元エンジニアの経験を活かし、実際の挙動などを考慮したデザインが可能です。</li>
              <li>趣味でも「つくる」ことが好きで、技術書の即売会などにも積極的に出展しています。</li>
              <li>会社員としてだけでなく、個人としても新しいものに興味関心を持ちながら日々手を動かしています。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="aboutme" :style="{backgroundImage: 'url(' + bg_akinen + ')' }"> -->
    <section class="aboutme">
      <div class="profiles c-centering c-shadow">
        <img class="akinen" :src="akinen" alt="プロフィール画像">
        <div class="profile">
          <h2 class="profile__name">AKINORI OZAWA</h2>
          <p class="profile__discription">PRODUCT DESIGNER</p>
          <p class="profile__discription">
            Born in Nagano, Japan. Worked at Kayac.inc and Buildit.inc (educational venture) before assuming my current position. I have experience as both an engineer and designer, and am currently involved in the creation of new business for Japan's largest non-life insurance group.
          </p>
        </div>
      </div>
    </section>
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import HeaderBar from '../HeaderBar.vue'

export default {
  name: 'About',
  data () {
    return {
      bg_akinen: require('@/assets/image/bg_akinen.png'),
      bg_work: require('@/assets/image/bg_media.jpg'),
      akinen: require('@/assets/image/akinen.jpg')
    }
  },
  components: {
    HeaderArea,
    FooterArea,
    HeaderBar
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.message
  margin-bottom -20px
  font-size 24px
  font-weight 600
  text-align center
  line-height 1.8
  letter-spacing 0.1rem

// スキル
.skill
  width 100%
  text-align center
  box-sizing border-box
  overflow hidden

  &__image
    width 240px
    height 240px
    object-fit cover
    border-radius 16px

  &__box
    padding 20px

.title
  font-size 20px
  font-weight 600
  margin-bottom 12px
  text-align center
  color #00A0B4

.description
  > li
    text-align left
    list-style-type disc
    line-height 1.8
    margin 0 0 6px 20px

.development
  display flex
  flex-direction row
  padding 40px 20px 0
  border-radius 20px
  background-color white

  @media (max-width: 960px)
    flex-direction column

  > .skill
    &:last-child
      margin 0

    &:not(:last-child)
      margin 0 20px 0 0

    @media (max-width: 960px)
      &:not(:last-child)
          margin 0 0 20px 0

// プロフィール
.aboutme
  width 100%
  padding 88px 0 44px
  background-color #222
  // box-sizing border-box
  // background 50% 50% / cover no-repeat

.profiles
  position relative
  padding 20px
  border-radius 20px
  background-color white
  box-sizing border-box

  @media (max-width: 768px)
    height auto
    padding 20px

.akinen
  position absolute
  top 20px
  left 20px
  width 200px
  height 200px
  border-radius 16px

  @media (max-width: 768px)
    position relative
    top 0
    left 0
    margin 0 auto
    display block

.profile
  margin 20px 20px 20px 240px

  @media (max-width: 768px)
    height auto
    margin 0

  &__name
    font-size 32px
    font-weight bold
    line-height 2rem
    letter-spacing 0.2rem

    @media (max-width: 768px)
      text-align center
      margin-top 20px

  &__discription
    padding-top 8px
    line-height 2.0
    letter-spacing 0.04rem

    @media (max-width: 768px)
      text-align center
</style>
