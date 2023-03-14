<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/tmnf/insure.jpg" alt="TMNF">

    <h2 class="title">損害保険事業のPoC・新規事業創出</h2>
    <p class="description">
      保険サービスの多様化や、スマホを通した保険の需要拡大から、保険業界では新規事業の創出が課題になっています。<b>２人目の中途デザイナーとして入社</b>し、本部のプロダクトオーナーと協力しながら、実際の顧客ニーズに沿ったプロダクトデザインを行っています。<br>
      <br>
      ※コンプライアンスの観点から、基本的に画面デザインについては非公開です。
    </p>

    <h2 class="title">UX/UIデザイン</h2>
    <h3 class="title title--sub">1. ギグワーカー向けサービスのIA・UIデザイン</h3>
    <p class="description">
      2022.08 ~ 現在<br>
      最大手のECサイトと協業し、福利厚生が適用できないギグワーカーに向けたサービスを開発しました。ドライバーに向けたサービスのため、自動車関連のクーポンを提供しています。<br>
      <br>
      <b>課題①：クーポン毎に利用方法が異なる</b><br>
      企業や店舗ごとに利用方法が異なり、サービス内に表示する情報も変わってくるという課題がありました。そこで今後クーポンが増える事も見越して、記載内容を共通化しフォーム化し、提携企業に項目を埋めていただく形で対応しました。<br>
      <br>
      <b>課題②：保険見積もり画面のデザイン</b><br>
      クーポンサイトでありつつも、弊社としては団体割引によって自動車保険加入者を増やしたい、という課題がありました。そこでペルソナであるギグワーカーの関心事項を洗い出しLPに落とし込みました。また、見積もりから加入相談までの障壁を出来るだけ取り払い、3ステップで簡単に申込みができるフローに改善しました。<br>
      <br>
      <b>課題③：実装のデザイン品質の不足・修正反映漏れの発生</b><br>
      タイトなスケジュールであったことから、デザイン面の品質が低いという課題がありました。そこでXDのデザインと実装の乖離が発生しないよう、認知的ウォークスルーによるデザインレビューの実施や、各要素のFIX状況管理を行いました。<br>
      <!-- <img class="image image--w80 blur" src="@/assets/image/tmnf/reward.jpg" alt="Reward"> -->
    </p>

    <h3 class="title title--sub">2. Apple Watchを用いたヘルスケアアプリ</h3>
    <p class="description">
      2022.04 ~ 2022.07<br>
      Apple Watchで疾病の予兆を検知し、その対策や医療相談するまでをサポートするiOSアプリのリードデザインを担当しました。<br>
      <br>
      <b>課題①：医療行為にあたらない表現</b><br>
      Apple Watchで心拍の乱れを検知することは可能ですが、それを元に病状を診断することは医療行為にあたりNGになります。そこでApple Japan社の協力を得て、デザイン面や適切な文言を相談しながらデザインに当たりました。<br>
      <br>
      <b>課題②：初期設定におけるApple Watchとの連携の複雑化</b><br>
      OS側で「心房細動を検知する」をONにしないと機能が使えないものの、その設定場所がわかりづらいという課題がありました。そこでオンボーディングのステップを練り直し、端的にStep by Stepで説明することで、ユーザーが設定できずに離脱することを防ぎました。<br>
      <img class="image blur" src="@/assets/image/tmnf/apple_watch.png" alt="Apple Watch">
      ※未リリースのため本サイトでは非公開です。詳しくはお問い合わせください。<br>
    </p>

    <h3 class="title title--sub">3. BCP（事業継続計画）策定支援サービス</h3>
    <p class="description">
      2021.11 ~ 2022.03<br>
      10分で将来的に起こりうる地震・水災・感染症（コロナ等）への対策が策定できるWebサービス、「BCPかんたんナビ」のPD・UIデザインを担当しました。<br>
      リリース後、<b>製造業や介護など、登録企業数が4桁を超える</b>など大きな反響があり、現在も機能改善が進んでいます。
      <span class="link">
        <a href="https://sme-bcp.tokiomarine-e.jp" target="_blank" class="link__button">公式HP</a>
      </span>
      <img class="image image--w80" src="@/assets/image/tmnf/bcp_top.png" alt="BCP">
      <b>課題：業態や現場によって計画内容が異なる</b><br>
      たとえば介護施設では、おむつや流動食などの貯蓄や、自主避難できない患者さんを避難させるための手順など、現場に沿った計画が必要になります。<br>
      そこで、業態ごとのモックアップを作成し、実際に製造業や介護に従事されている方に観ていただくことで、実用的な計画が立てられるシートに仕上げていきました。質問に回答するだけで業態に合わせたシートが生成され、そのままPDFで印刷することも可能です。<br>
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
