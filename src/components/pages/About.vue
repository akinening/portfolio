<template>
<div>
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_about + ')' }">
    <header-area />
    <span class="hero__content">About</span>
  </h1>
  <header-bar />
  <article class="mt-plus" itemscope="" itemtype="http://schema.org/Person">
    <section class="c-centering">
      <h2 class="message">
        Create valuable products.
      </h2>
      <p class="sub-title">
        たとえ良い商品や企画があっても、ユーザーが価値を感じられなければ意味がありません。<br>以下の３つの力でサービスの価値を届けます。
      </p>

      <div class="development mt-plus">
        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-1.jpg" alt="アイコン１">
          <div class="skill__box">
            <h2 class="title">価値の発見</h2>
            <ul class="description">
              <li>ユーザーの行動を観察しながら、未来を想像し、課題を発見します。</li>
              <li><b>定性・定量評価</b>:Analyticsなどの定量データや、インタビューなどの定性データをもとにサービスの改善に繋げます。</li>
              <li><b>体験設計</b>:HCDプロセスをもとにインサイトを把握し、暮らしのなかにサービス体験を届けます。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-2.jpg" alt="アイコン２">
          <div class="skill__box">
            <h2 class="title">設計する力</h2>
            <ul class="description">
              <li>toB・toC、ネイティブアプリからWebサービスまで幅広くデジタルプロダクトのデザイン経験があります。</li>
              <li><b>情報設計</b>:OOUIなどに基づき、複雑なドメイン言語を整理し、シンプルなUIに落とし込みます。</li>
              <li><b>UI設計</b>:直感的に触れる、インタラクティブなUIを目指しています。</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <img class="skill__image" src="@/assets/image/skill/skill-3.jpg" alt="アイコン３">
          <div class="skill__box">
            <h2 class="title">具象化する力</h2>
            <ul class="description">
              <li>実装・プロトタイピングによって、試しながらつくるのが得意です。</li>
              <li>エンジニアの経験があり、実際の挙動などを考慮したデザインが可能です。</li>
              <li>好奇心が強く、新しいものに興味関心を持ちながら日々手を動かしています。</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-plus mb-30">
        <h2 class="message message--2">
          Prototyping Tools
        </h2>
        <div class="tools">
          <img class="tool" src="@/assets/image/skill/tool-vue.png" alt="vue">
          <img class="tool" src="@/assets/image/skill/tool-nuxt.png" alt="nuxt">
          <img class="tool" src="@/assets/image/skill/tool-flutter.png" alt="flutter">
          <img class="tool" src="@/assets/image/skill/tool-unity.png" alt="unity">
          <img class="tool" src="@/assets/image/skill/tool-figma.png" alt="figma">
          <img class="tool" src="@/assets/image/skill/tool-xd.png" alt="xd">
        </div>
        <p class="sub-title">その他、必要に応じてツールを活用しています。</p>
      </div>

      <div class="mt-plus mb-100">
        <h2 class="message message--2">
          READ ME
        </h2>
        <p class="sub-title" @click="toggleModal(true)">
          採用担当者の方へ(β)
        </p>
      </div>
    </section>

    <project-modal v-if="isOpen" @close="toggleModal(false)" />

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
import ProjectModal from '@/components/modal/ProjectModal'

export default {
  name: 'About',
  data () {
    return {
      bg_about: require('@/assets/image/bg_sunset.jpg'),
      akinen: require('@/assets/image/akinen_illust.png'),
      isOpen: false
    }
  },
  components: {
    HeaderArea,
    FooterArea,
    HeaderBar,
    ProjectModal
  },
  methods: {
    toggleModal (status) {
      this.isOpen = status
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.message
  margin-bottom -20px
  font-size 24px
  font-weight 700
  text-align center
  line-height 1.8
  letter-spacing 0.1rem

  &--2
    margin 0

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
