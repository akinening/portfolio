<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/tmnf.png" alt="TMNF">
    <h2 class="title">組織のデザイン理解促進</h2>
    <p class="description">
      インハウスデザイナーとして、デザイン文化の浸透を促進することを目指して、組織や業務プロセス改善に主体的に取り組んでいます。<br>
      <br>
      ・<b>HCD-Net</b><br>
      組織内で人間中心設計（HCD）の理解を深める課題に取り組み、賛助会員として加入を提言し、HCDの普及活動を推進しました。<br>
      ・<b>Figmaの社内導入</b><br>
      デザインツールの効率化と情報共有の課題に対処するため、Figmaの導入を提案し、CSとのコンタクトを通じて組織のデザイン力向上を主導しました。<br>
      ・<b>デザイガイドライン</b><br>
      社内デザインの一貫性と効率性の課題を解決するために、デザイガイドラインの整理や共通イラストの仕様に関する相談・提言を行い、デザインの基盤整備に努めました。<br>
      ・<b>社内報の発信</b><br>
      デザインへの理解と関心を高めるため、毎日1000人以上が閲覧する社内ページで、デザインに関する情報を月1回発信しています。
      <img class="image image--w80 blur" src="@/assets/image/tmnf/mail.png" alt="メール">
    </p>

    <h2 class="title title--sub">社内ポータルのリデザイン</h2>
    <p class="description">
      部内ポータルが情報の秘伝のタレ化していた課題を解決するため、リデザインを提案し、実施しました。<br>
      ミッション・ビジョンを共通認識としてページトップに掲載することで、組織の目的と方向性を明確にしました。また、新人向けの環境構築手順をまとめたページを作成することで、暗黙知を可視化し、情報アクセスの効率化を図りました。この取り組みは部内メンバーだけでなく、その後に入社した新卒やキャリアの方からも好評をいただく結果となりました。
      <img class="image image--w80" src="@/assets/image/tmnf/portal.png" alt="ポータル">
    </p>

    <h2 class="title title--sub">社内デザインコミュニティの運営、発信</h2>
    <p class="description">
      デザインの理解・認知向上という課題を解決するため、デザインコミュニティの運営を主導しました。社内から60名以上のノンデザイナーが参加し、デザインへの興味を喚起しました。<br>
      また、UIデザインに興味のある若手が効率的に学べる環境を提供するため、デザインWikiを整備しました。これにより、参加者が最短距離でデザインを学ぶ道標を得ることができました。
      <span class="link">
        <router-link to="/" class="link__button">
          ←TOPに戻る
        </router-link>
      </span>
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
