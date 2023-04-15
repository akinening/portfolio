<template>
<div>
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_about + ')' }">
    <header-area />
    <span class="hero__content">ABOUT</span>
  </h1>
  <header-bar />
  <article class="mt-plus" itemscope="" itemtype="http://schema.org/Person">
    <section class="c-centering">
      <h2 class="message">
        Create valuable products.
      </h2>
      <p class="sub-title">
        たとえチームや環境が変わっても「より多くの人に新しい価値を届けたい」という想いは変わりません。<br>
        これを実現するために、以下の３つの力でプロダクトに貢献します。
      </p>

      <div class="development mt-plus">
        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-1.jpg" alt="アイコン１">
          <div class="skill__box">
            <h2 class="title">課題を発見する力</h2>
            <ul class="description">
              <li>体験設計: ユーザーの課題感やインサイトを洗い出します。</li>
              <li>ユーザーの行動を観察しながら、未来を想像し、課題を発見します。</li>
              <li>未来の人々の生活像に興味関心があります。常に新しいアイデアや技術に対する好奇心を持ち、自己研鑽に励んでいます。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-2.jpg" alt="アイコン２">
          <div class="skill__box">
            <h2 class="title">問いを立て検証する力</h2>
            <ul class="description">
              <li>仮説を立てる：HCDプロセスを踏まえて「問い」を立てます。</li>
              <li>定性・定量評価:Analyticsなどの定量データや、インタビューなどの定性データをデザインに反映します。</li>
              <li>検証：実装・プロトタイピングによって、試しながらつくるのが得意です。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-3.jpg" alt="アイコン３">
          <div class="skill__box">
            <h2 class="title">設計し具象化する力</h2>
            <ul class="description">
              <li>toB・toC、ネイティブアプリからWebサービスまで幅広くデジタルプロダクトのデザイン経験があります。</li>
              <li>情報設計:OOUIなどに基づき、複雑なドメイン言語を整理し、シンプルなUIに落とし込みます。</li>
              <li>UI設計:直感的に触れる、インタラクティブなUIを目指しています。エンジニアの経験があり、実際の挙動などを考慮したデザインが可能です。</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-plus mb-100">
        <h2 class="message message--2">
          Prototyping Tools
        </h2>
        <div class="tools">
          <img class="tool" src="@/assets/image/skill/tool-vue.png" alt="vue">
          <img class="tool" src="@/assets/image/skill/tool-nuxt.png" alt="nuxt">
          <img class="tool" src="@/assets/image/skill/tool-flutter.png" alt="flutter">
          <img class="tool" src="@/assets/image/skill/tool-unity.png" alt="unity">
          <img class="tool" src="@/assets/image/skill/tool-figma.png" alt="figma">
          <img class="tool" src="@/assets/image/skill/tool-gpt.png" alt="gpt">
        </div>
        <p class="sub-title">目的を実現するための手段として、デザインプロセスに適宜ツールを導入しています。</p>
      </div>

      <nav class="move">
        <router-link to="/creative" class="move__to">← STUDIES</router-link>
        <router-link to="/" class="move__to"></router-link>
      </nav>
    </section>

    <section class="aboutme">
      <div class="profiles c-centering c-shadow">
        <img class="akinen" :src="akinen" alt="プロフィール画像">
        <div class="profile">
          <h2 class="profile__name">AKINORI OZAWA</h2>
          <p class="profile__discription">PRODUCT DESIGNER</p>
          <p class="profile__discription">
            損保業界のUX・UIデザイナー。趣味はXRUIを考えること。面白法人カヤックでフロントエンドエンジニアとして勤務した後、転職とともにデザイナーに転向。新規アプリのリードデザイナーを経験し、現在はInsurTech系の新規事業のデザインや、組織へのデザイン浸透に取り組んでいます。
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
import HeaderBar from '../HeaderBar.vue'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'About',
  data () {
    return {
      bg_about: require('@/assets/image/bg_sunset.jpg'),
      akinen: require('@/assets/image/akinen_illust.png')
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
  font-weight 700
  margin-bottom 12px
  text-align center

.description
  > li
    text-align left
    list-style-type disc
    line-height 1.8
    margin 0 0 6px 20px

.development
  display flex
  flex-direction row
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

.tools
  display flex
  justify-content center
  flex-wrap wrap

.tool
  margin 20px
  width 96px
  filter grayscale(100%)

  &:hover
    filter grayscale(0%)

// プロフィール
.aboutme
  width 100%
  padding 88px 0 44px
  background-color #222

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
