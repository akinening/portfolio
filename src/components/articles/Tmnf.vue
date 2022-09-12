<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/digital.jpg" alt="TMNF">

    <p class="description">
      UI/UXデザイナーとして、損害保険事業のPoC・新規事業創出に携わっています。<br>
      保険サービスの多様化や、スマホを通した保険の需要拡大から、保険業界では新規事業の創出が課題になっています。２人目の中途デザイナーとして入社し、本部のプロダクトオーナーと協力しながら、実際の顧客ニーズに沿ったプロダクトデザインを行っています。<br>
      ※コンプライアンスの観点から、案件の詳細は非公開です。
    </p>

    <h2 class="title">UX/UIデザイン</h2>
    <br>
    <h3 class="title title--sub">Amazon関連サービスのUIデザイン</h3>
    <p class="description">
      2022.08 ~ 現在<br>
      詳細は非公開です。
    </p>

    <h3 class="title title--sub">Apple Watchを用いた疾病予防アプリ</h3>
    <p class="description">
      2022.04 ~ 2022.07<br>
      Apple Watchを用いて疾病の予兆を検知する、iOSネイティブアプリのUX/UIデザインを担当しました。<br>
      <img class="image blur" src="@/assets/image/tmnf/apple_watch.png" alt="Apple Watch">
      ※未リリースのため非公開です。<br>
      従来の保険商品は疾病が発覚した事後にお支払いするサービスでしたが、そもそもの疾病を未然に防ぐ特約として開発しました。<br>
      ユーザー体験とMVPのバランスをPOと議論しながら調整していきました。Apple Japan社の協力を得て、医療上適切な表現やHIGに則ったデザインを意識しました。
    </p>

    <h3 class="title title--sub">BCP（事業継続計画）策定支援サービス</h3>
    <p class="description">
      2021.11 ~ 2022.03<br>
      <img class="image image--w80" src="@/assets/image/tmnf/bcp_top.png" alt="BCP">
      10分で事業継続計画を策定できるWebサービス「BCPかんたんナビ」のUIデザインを担当しました。<br>
      将来的に起こりうる地震・水災・感染症（コロナ等）への対策が10分で策定できます。製造業や介護など、素早い復旧が必要な業態にとくに有効です。<br>
      リリース後各種メディアで取り上げられ、商工会議所を中心に多数の申込みがありました。
      <span class="link">
        <a href="https://sme-bcp.tokiomarine-e.jp" target="_blank" class="link__button">公式HP</a>
      </span>
      質問に回答するだけで以下のようなシートが生成され、そのまま印刷することも可能です。
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
