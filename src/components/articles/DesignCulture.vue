<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/tmnf.png" alt="TMNF">
    <p class="description">
      組織へのデザイン浸透を目指し、社内で活動しています。与えられた仕事だけでなく、積極的に組織や業務プロセス改善に取り組んでいます。
    </p>

    <h2 class="title">組織へのデザイン浸透</h2>
    <p class="description">
        ・<b>HCD-Netへの加入</b>を提言し、賛助会員として活動に参加しています。<br>
        ・<b>Figmaの社内導入</b>を提案しCSとコンタクトするなど、組織のレベルアップのための取り組みを主導しました。<br>
        ・<b>デザイガイドライン</b>デザイガイドラインの整理や共通イラストの仕様についての相談・提言など、社内にデザインを広めるための基盤づくりを行っています。<br>
        ・<b>社内報の発信</b>毎日1000人以上が閲覧する社内ページで、デザインについての社内報を月1回発信し、デザインについて知ってもらう取り組みをしています。
      <img class="image image--w80 blur" src="@/assets/image/tmnf/mail.png" alt="メール">
    </p>

    <h2 class="title title--sub">社内ポータルのリデザイン</h2>
    <p class="description">
      秘伝のタレと化した部内ポータルのリデザインを提案し、自ら改善しました。<br>
      ミッション・ビジョンを共通認識とするためページトップに掲載したり、新人向けの環境構築手順をまとめたページを作成して暗黙知を可視化しました。部内メンバーだけでなく、その後に入社した新卒やキャリアの方から好評をいただきました。
      <img class="image image--w80" src="@/assets/image/tmnf/portal.png" alt="ポータル">
    </p>

    <h2 class="title title--sub">社内デザインコミュニティの運営、発信</h2>
    <p class="description">
      デザインの理解・認知向上を目的として、デザインコミュニティの運営を担当しています。社内で募集し、50名以上のノンデザイナーが参加しています。<br>
      <b>デザインWiki</b>を整備し、UIデザインに興味のある若手が出来るだけ最短距離でデザインを学べる道標を用意しました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'DesignCulture',
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
