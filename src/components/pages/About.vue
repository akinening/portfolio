<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_about + ')' }">
    <span class="hero__content">About</span>
  </h1>
  <article class="mb-100 mt-plus" itemscope="" itemtype="http://schema.org/Person">
    <section class="c-centering">
      <h2 class="message">
        ヒトと事業の「間」をデザインし、<br class="hide-sp">日々の暮らしに体験価値を届けます。
      </h2>
      <p class="sub-title">
        たとえ良いアイデア・良い機能があっても、<br class="hide-sp">それがユーザーに届かなければ意味がありません。<br>
        ユーザーフレンドリーなUI・UXデザインを通じて、人々の暮らしのなかに体験を届けます。
      </p>

      <div class="development mt-plus mb-30">
        <div class="skill c-shadow">
          <img class="skill__image" src="@/assets/image/skill-1.png" alt="体験設計">
          <div class="skill__box">
            <h2 class="title">体験設計</h2>
            <ul class="description">
              <li>新規立ち上げ、運用での改善サイクルの両方で、体験設計の経験があります。</li>
              <li><b>定量評価</b>：アナリティクスやA/Bテスト等から、ペルソナ像をアップデートしたり、施策に落とし込みます。</li>
              <li><b>定性評価</b>：ユーザーインタビューをデザイナー主導で実施。インサイトを把握し、プロダクトの改善に活かします。</li>
            </ul>
          </div>
        </div>

        <div class="skill c-shadow">
          <img class="skill__image" src="@/assets/image/skill-2.png" alt="情報設計">
          <div class="skill__box">
            <h2 class="title">情報設計</h2>
            <ul class="description">
              <li>元エンジニアとしての経験を活かし、メンタルモデルを意識した構造設計が可能です。</li>
              <li>ユーザビリティを考慮し、目的の行動がスムーズに行えるよう意識しています。</li>
            </ul>
          </div>
        </div>

        <div class="skill c-shadow">
          <img class="skill__image" src="@/assets/image/skill-3.png" alt="UI設計">
          <div class="skill__box">
            <h2 class="title">UI設計</h2>
            <ul class="description">
              <li>toBの業務管理システム、toCのネイティブアプリやWebサービスの経験があります。</li>
              <li>ワイヤーフレームの段階からご相談しながら、情報設計を行いUIに落とし込んでいくことが出来ます。</li>
              <li>開発過程で生まれた成果物をアセット化していくことでデザインガイドラインを作成し、開発を効率化します。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="profiles c-shadow c-centering">
      <img class="akinen" :src="note1" alt="プロフィール画像">
      <div class="profile">
        <h2 class="profile__name">AKINORI OZAWA</h2>
        <p class="profile__discription">PRODUCT DESIGNER</p>
        <p class="profile__discription">
          大学卒業後、面白法人カヤックに入社。フロントエンドエンジニアとしてNuxt.jsやTypeScriptを用いたゲームコミュニティ事業の開発に参画。<br>
          その後UI/UXデザイナーに転向し、現在は新規自社事業の立ち上げフェーズからグロースまで一貫して携わっている。<br>
          <!-- 現在は東京海上日動システムズにて、損害保険事業のデザインに取り組んでいる。 -->
        </p>
      </div>
    </section>
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'About',
  data () {
    return {
      bg_about: require('@/assets/image/bg_about.jpg'),
      note1: require('@/assets/image/logo_sp.png')
    }
  },
  components: {
    HeaderArea,
    FooterArea
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
  background-color white
  border-radius 4px
  box-sizing border-box
  overflow hidden

  &__image
    width 100%

  &__box
    padding 20px

.title
  font-size 20px
  font-weight 600
  margin-bottom 12px
  text-align center
  color #22746C

.description
  > li
    list-style-type disc
    line-height 1.8
    margin 0 0 6px 20px

.development
  display flex
  flex-direction row

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
.profiles
  position relative
  padding 20px
  border-radius 4px
  background-color white
  box-sizing border-box

  @media (max-width: 768px)
    height auto
    padding 20px

.akinen
  position absolute
  top 16px
  left 40px
  width 200px
  height 200px
  border-radius 4px

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

  &__discription
    padding-top 8px
    line-height 2.0
    letter-spacing 0.04rem

    @media (max-width: 768px)
      text-align center
</style>
