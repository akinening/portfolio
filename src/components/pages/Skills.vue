<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_skills + ')' }">
    <span class="hero__content">Skills</span>
  </h1>
  <article class="c-centering">
    <section class="development mt-minus">
      <div class="skill mb-30 c-shadow">
        <h2 class="title">UXデザイン</h2>
        <ul class="description">
          <li>新規立ち上げ、運用での改善サイクルの両方で、体験設計の経験があります。</li>
          <li>定量評価：アナリティクスやA/Bテスト等から、ペルソナ像をアップデートしたり、施策に落とし込みます。</li>
          <li>定性評価：ユーザーインタビューをデザイナー主導で実施。インサイトを把握し、プロダクトの改善に活かします。</li>
        </ul>
      </div>

      <div class="skill mb-30 c-shadow">
        <h2 class="title">UIデザイン</h2>
        <ul class="description">
          <li>toBの業務管理システム、toCのネイティブアプリやWebサービスの経験があります。</li>
          <li>ワイヤーフレームの段階からご相談しながら、情報設計を行いUIに落とし込んでいくことが出来ます。</li>
          <li>開発過程で生まれた成果物をアセット化していくことでデザインガイドラインを作成し、開発を効率化します。</li>
        </ul>
      </div>

      <div class="skill mb-30 c-shadow">
        <h2 class="title">エンジニアリング</h2>
        <ul class="description">
          <li>フロントエンドの開発経験があります。なかでもVue.js での開発が得意です。Nuxt.js + TypeScriptでの開発経験もあります。</li>
          <li>CSS設計のノウハウがあります。BEMやAtomic Design, Tailwindでの経験があります。</li>
        </ul>
      </div>
    </section>

    <h2 class="c-title mt-80">チームとして</h2>
    <section class="development mb-100">
      <div class="skill mb-30 c-shadow">
        <h2 class="title">ドメインの理解</h2>
        <ul class="description">
          <li>業界によって使われる用語や前提知識が異なるため、デザイナーとして参画する際はまず、ヒアリングや調査。認識をあわせた上で体験設計・情報設計することを心がけています。</li>
        </ul>
      </div>

      <div class="skill mb-30 c-shadow">
        <h2 class="title">コミュニケーション</h2>
        <ul class="description">
          <li>フロントエンドエンジニアとしての経験があるため、既存の運用や実装上の制約を考慮したデザインやコミュニケーションが得意です。</li>
        </ul>
      </div>

      <div class="skill mb-30 c-shadow">
        <h2 class="title">仕様の明文化</h2>
        <ul class="description">
          <li>UIの意図を言語化し、チームに相談しながらデザインしています。議論や仕様については流さず、適宜文章化することを心がけています。</li>
        </ul>
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
  name: 'Skills',
  components: {
    HeaderArea,
    FooterArea
  },
  data () {
    return {
      bg_skills: require('@/assets/image/bg_skills.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.title
  font-size 20px
  font-weight 600
  margin-bottom 20px

.skill
  width 100%
  padding 20px
  background-color white
  border-radius 8px
  box-sizing border-box

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
</style>
