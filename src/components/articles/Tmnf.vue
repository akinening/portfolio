<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/tmnf/insure.jpg" alt="TMNF">

    <p class="description">
      UI/UXデザイナーとして、損害保険事業のPoC・新規事業創出に携わっています。<br>
      <br>
      保険サービスの多様化や、スマホを通した保険の需要拡大から、保険業界では新規事業の創出が課題になっています。<b>２人目の中途デザイナーとして入社</b>し、本部のプロダクトオーナーと協力しながら、実際の顧客ニーズに沿ったプロダクトデザインを行っています。<br>
      <br>
      ※コンプライアンスの観点から、案件の詳細は非公開です。詳しくはお問い合わせください。
    </p>

    <h2 class="title">UX/UIデザイン</h2>
    <h3 class="title title--sub">1. ギグワーカー向けサービスのUIデザイン</h3>
    <p class="description">
      2022.08 ~ 現在<br>
      最大手のECサイトと協業し、福利厚生が適用できないギグワーカーに向けたサービスを開発しています。<br>
      プロダクトオーナーやステークホルダーの意見を踏まえつつ、さらにUSのTechチームともコンタクトを取りながら、ユーザーが店頭で使うストーリーを描いてUIに落とし込んでいます。
    </p>

    <h3 class="title title--sub">2. Apple Watchを用いたヘルスケアアプリ</h3>
    <p class="description">
      2022.04 ~ 2022.07<br>
      <b>Apple Watchで疾病の予兆を検知し、その対策や医療相談するまでをサポートするiOSアプリ</b>のリードデザインを担当しました。<br>
      特にUIについては<b>Apple Japan社のデザイナーの協力</b>を得て、医療上適切な表現やHIGに則ったデザインを実現しました。
      <img class="image blur" src="@/assets/image/tmnf/apple_watch.png" alt="Apple Watch">
      ※未リリースのため本サイトでは非公開です。詳しくはお問い合わせください。<br>
    </p>

    <h3 class="title title--sub">3. BCP（事業継続計画）策定支援サービス</h3>
    <p class="description">
      2021.11 ~ 2022.03<br>
      10分で事業継続計画を策定できるWebサービス「BCPかんたんナビ」のPD・UIデザインを担当しました。<br>
      将来的に起こりうる地震・水災・感染症（コロナ等）への対策が10分で策定できます。リリース後、<b>製造業や介護など、登録企業数が4桁を超える</b>など大きな反響があり、現在も機能改善が進んでいます。
      <span class="link">
        <a href="https://sme-bcp.tokiomarine-e.jp" target="_blank" class="link__button">公式HP</a>
      </span>
      <img class="image image--w80" src="@/assets/image/tmnf/bcp_top.png" alt="BCP">
      策定した書類をPDF出力したり、スマホからでもアクセス可能にするなど、現場で使われることを想定しながら画面に落とし込んでいきました。質問に回答するだけで業態に合わせたシートが生成され、そのまま印刷することも可能です。
      <img class="image image--w80" src="@/assets/image/tmnf/bcp_form.png" alt="BCP">
    </p>
  </section>
</template>

<script>
export default {
  name: 'TMNF',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"

.blur
  filter blur(5px)
</style>
