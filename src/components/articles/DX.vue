<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/tmnf.png" alt="TMNF">
    <p class="description">
      与えられた仕事だけでなく、積極的に組織や業務プロセス改善に取り組んでいます。
    </p>

    <h2 class="title">組織へのデザイン浸透</h2>
    <p class="description">
        ・Slackにチームメンバー全員の<b>timesチャンネル</b>を作成し、業務での気づきやデザインについての話題を共有する場をつくりました。<br>
        ・HCD-Netの賛助会員加入を提言し手続きをしたり、Figmaの社内導入を提案しCSとコンタクトするなど、組織のレベルアップのための取り組みを主導しました。<br>
        ・デザイガイドラインの整理や共通イラストの仕様についての相談・提言など、社内にデザインを広めるための基盤づくりを行っています。<br>
      <img class="image image--w80 blur" src="@/assets/image/tmnf/mail.png" alt="メール">
    </p>

    <h2 class="title title--sub">社内ポータルのリデザイン</h2>
    <p class="description">
      秘伝のタレと化した部内ポータルのリデザインを提案し、自ら改善しました。<br>
      ミッション・ビジョンを共通認識とするためページトップに掲載したり、新人向けの環境構築手順をまとめたページを作成して暗黙知を可視化しました。<br>
      部外からリデザインについて相談されるなど、社内からは好評をいただきました。
      <img class="image image--w80" src="@/assets/image/tmnf/portal.png" alt="ポータル">
    </p>

    <h2>社内デザインコミュニティの運営、発信</h2>
    <p class="description">
      デザインの理解・認知向上を目的として、デザインコミュニティの運営を担当しています。コミュニティは主催者が積極的に働きかける必要がありますが、業務の傍ら運営していくため、持続可能な運営方法を考えました。<br>
      コミュニティの認知度を上げるため、全社向けの発信やバナー・招待URLの配布などを行い、導線を増やしました。また、<b>デザインWiki</b>を整備し、UIデザインに興味のある若手が出来るだけ最短距離でデザインを学べる道標を用意しました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'DX',
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
