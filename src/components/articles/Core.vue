<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="core_ogp" alt="Core">

    <p class="description">
      UI/UXデザイナーとして、機能改善を中心に担当しました。当初はアシスタントとして細部のUIを改善、2020年からはリデザインを主担当しました。<br>
      チーム構成：エンジニア３名、PM１名、デザイナー２名（私含む）
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Coreは企業の人財育成をフォローし、働く人の経験学習を促進するSaaSです。2019年現在、大手企業20社+の導入実績があります。<br>
      従来の企業の人財育成では「研修を実施したものの、実務に活かされているか分からない」「自己成長に繋がっている実感がない」といった課題が多く見られます。Coreは業務や研修の「振り返り」を促すことで、人財育成をフォローアップします。
      <span class="link">
        <a href="https://ousia.me/product/" target="_blank" class="link__button">製品ページ</a>
      </span>
    </p>

    <h2 class="title">取り組み1. ホーム画面のリデザイン・実装</h2>
    <p class="description">
      旧ホーム画面ではCoreの全体像や自分の役割が把握しづらく、Coreにアクセスしても次のアクションが分からないという課題がありました。そこで課題感を洗い出し、ユーザーの導線や情報設計、UXライティングを見直しました。<br>
      まず、改めてホーム画面にアクセスしたユーザーのシナリオを考え、ユーザーがなぜ戸惑うのか仮説を立ててみることにしました。<br>
      <br>
      すると「初めてログインしたユーザーはこのサービスのページ構造やドメイン知識がなく、『最新のスレッド』というものが表示されても<b>どこに遷移するのか、その先で何をすれば良いのかイメージ出来ない</b>のではないか」という仮説が立ちました。<br>
      <img class="image image--w80" :src="core_home" alt="解説図" loading="lazy">
      上記の仮説をもとに<br>
      ①サイドバーと表現を合わせて、自分の見るべき箇所を明示する<br>
      ②Tipsで、ユーザーの役割に応じて端的にやるべきことを伝える<br>
      修正をしました。またフロントエンドの実装も自ら行い、レスポンシブにも対応した、プロトタイプ通りの実装を実現しました。<br>
    </p>

    <h2 class="title">取り組み2. 管理画面の全面リニューアル</h2>
    <p class="description">
      従来のCoreではCLIでデータを変更していたためヒューマンエラーが発生し、受講生がログイン出来なくなる等の問題がありました。そこで、管理画面のリデザインを行いました。<br>
      <br>
      <b>①ヒアリング</b><br>
      はじめに、既存の実装仕様や運用をヒアリングしました。CSVファイルの運用方法やデータ構造を把握することで、情報設計がスムーズになりました。<br>
      <b>②情報設計・UIデザイン</b><br>
      7画面・モーダル数約30種類に及ぶ管理項目の情報設計を見直し、実装面を考慮しながらパターンごとに出し分けを行いました。<br>
      <img class="image" :src="core_dashboard" alt="管理画面" loading="lazy">
      ※受託案件のため、画面の詳細については公開を差し控えています。
    </p>
  </section>
</template>

<script>
export default {
  name: 'Core',
  data () {
    return {
      core_dashboard: require('@/assets/image/core_dashboard.png'),
      core_home: require('@/assets/image/core_home.png'),
      core_ogp: require('@/assets/image/core.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
