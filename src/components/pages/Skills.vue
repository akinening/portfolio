<template>
<div>
  <header-area />
  <h1 class="c-page-title">Skills</h1>
  <article class="skills">
    <section class="skill mt-80 mb-30">
      <h2 class="c-title">ウェブ、アプリケーション(iOS, Android)のUI,UXデザイン</h2>
      <ul class="description">
        <li>toBの業務管理システム、toCのアプリケーションやWebサービス、Web LPの経験があります。ワイヤーフレームの段階からご相談しながら、情報設計を行いUIに落とし込んでいくことが出来ます。</li>
        <li>新規立ち上げ、運用での改善サイクルの両方の経験があります。</li>
        <li>LPデザインについては、グラフィック重視のデザインよりは機能的なデザインを得意としています。SEO対策やASO対策まで意識しています。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="c-title">デザインシステム、スタイルガイドラインの策定</h2>
      <ul class="description">
        <li>UIの作成とともに、必要に応じてスタイルガイドラインを作成します。</li>
        <li>開発過程で生まれた成果物をアセット化していくことで、デザインを体系化し作業を効率化します。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="c-title">定性・定量調査</h2>
      <ul class="description">
        <li>アナリティクスや実際のデータから、ペルソナ像をアップデートしたり、施策に落とし込みます。またA/Bテストを用いてデザインや施策の効果を測定した経験があります。</li>
        <li>ユーザーインタビューをデザイナー主導で実施。フィードバックをもとに行動の背景やニーズを把握し、プロダクトの改善に活かします。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="c-title">エンジニアリング</h2>
      <ul class="description">
        <li>フロントエンドの開発経験があります。なかでもVue.js での開発が得意です。Nuxt.js + TypeScriptでの開発経験もあります。</li>
        <li>CSS設計のノウハウがあります。BEMやAtomic Design, Tailwindでの経験があります。</li>
      </ul>
    </section>

    <section class="skill mb-30">
      <h2 class="c-title">チームとして</h2>
      <ul class="description">
        <li>ドメインの理解：業界によって使われる用語や前提知識が異なるため、デザイナーとして参画する際はまず、ヒアリングや調査。認識をあわせた上で体験設計・情報設計することを心がけています。</li>
        <li>表層のデザインだけで完結するのではなく、事業やサービスの成功にコミットすることを意識しています。常に事業の未来像を見据え、チームと共有しながらデザインに取り組みます。</li>
        <li>UIの意図を言語化し、チームに相談しながらデザインしています。議論や仕様については流さず、適宜文章化することを心がけています。</li>
        <li>フロントエンドエンジニアとしての経験があるため、既存の運用や実装上の制約を考慮したデザインやコミュニケーションが得意です。また、コードレビューだけでなく自らも実装することで、最終的なアウトプットをよりよいものにします。</li>
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

.skills
  margin 0 80px 40px
  padding-bottom 60px

  @media (max-width: 768px)
    margin 0 20px 40px
    padding-top 0

  @media (min-width: 1200px)
    margin 0 auto 40px
    width 960px

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
    margin-left 20px
</style>
