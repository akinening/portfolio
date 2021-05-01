<template>
<div>
  <header-area />
  <h1 class="c-top-margin c-page-title">Skills</h1>
  <article class="skills c-centering">
    <h2 class="c-title mt-80">デザイン</h2>
    <section class="skill mb-30">
      <h2 class="title">サービスの体験設計、リサーチ</h2>
      <ul class="description">
        <li>新規立ち上げ、運用での改善サイクルの両方の経験があります。</li>
        <li>定量評価：アナリティクスやA/Bテスト等から、ペルソナ像をアップデートしたり、施策に落とし込みます。</li>
        <li>定性評価：ユーザーインタビューをデザイナー主導で実施。インサイトを把握し、プロダクトの改善に活かします。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="title">WebやアプリのUIデザイン</h2>
      <ul class="description">
        <li>toBの業務管理システム、toCのアプリケーションやWebサービス、Web LPの経験があります。</li>
        <li>ワイヤーフレームの段階からご相談しながら、情報設計を行いUIに落とし込んでいくことが出来ます。</li>
        <li>開発過程で生まれた成果物をアセット化していくことでデザインガイドラインを作成し、開発を効率化します。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="title">エンジニアリング</h2>
      <ul class="description">
        <li>フロントエンドの開発経験があります。なかでもVue.js での開発が得意です。Nuxt.js + TypeScriptでの開発経験もあります。</li>
        <li>CSS設計のノウハウがあります。BEMやAtomic Design, Tailwindでの経験があります。</li>
      </ul>
    </section>

    <h2 class="c-title mt-80">その他</h2>
    <section class="skill mb-30">
      <h2 class="title">チームとして</h2>
      <ul class="description">
        <li>ドメインの理解：業界によって使われる用語や前提知識が異なるため、デザイナーとして参画する際はまず、ヒアリングや調査。認識をあわせた上で体験設計・情報設計することを心がけています。</li>
        <li>表層のデザインだけで完結するのではなく、事業やサービスの成功にコミットすることを意識しています。常に事業の未来像を見据え、チームと共有しながらデザインに取り組みます。</li>
        <li>UIの意図を言語化し、チームに相談しながらデザインしています。議論や仕様については流さず、適宜文章化することを心がけています。</li>
        <li>フロントエンドエンジニアとしての経験があるため、既存の運用や実装上の制約を考慮したデザインやコミュニケーションが得意です。また、コードレビューだけでなく自らも実装することで、最終的なアウトプットをよりよいものにします。</li>
      </ul>
    </section>

    <h2 class="c-title mt-80">対応不可</h2>
    <section class="skill mb-30">
      <h2 class="title">副業案件</h2>
      <ul class="description">
        <li>現在、副業案件のご依頼は承っておりません。</li>
        <li>例外として、本業での案件やお知り合いからの依頼、同人のデザイン(趣味)は承っております。</li>
      </ul>
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
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.title
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;

.skills
  margin-bottom 100px

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
</style>
