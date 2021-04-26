<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="core_ogp">

    <p class="description">
      UI/UXデザイナーとして、機能改善を中心に担当しました。当初はアシスタントとして細部のUIを改善、2020年からはリデザインを主担当しました。<br>
      チーム構成：エンジニア３名、PM１名、デザイナー２名（私含む）
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Coreは企業の人財育成をフォローし、働く人の経験学習を促進するSaaSです。2019年現在、大手企業20社+の導入実績があります。<br>
      従来の企業の人財育成では「研修を実施したものの、実務に活かされているか分からない」「自己成長に繋がっている実感がない」といった課題が多く見られます。Coreは業務や研修の「振り返り」を促すことで、人財育成をフォローアップします。
      <a href="https://ousia.me/product/" target="_blank" class="top-btn">製品ページ</a>
    </p>

    <h2 class="title">主な機能</h2>
    <p class="description">
      ① 問いかけ<br>
      毎週金曜日に、その週を振り返るための質問を配信。言語化することで、本人のなかにストックが生まれます。<br>
      ②フォローアップ<br>
      上司や人事は受講生の取り組みを把握し、適切なタイミングでアドバイスをすることで成長を促進します。<br>
      ③分析レポート<br>
      投稿データをもとにレポートを作成。現場の取り組みが可視化され、タレントマネジメントにも繋がります。
    </p>

    <h2 class="title">ペルソナ</h2>
    <p class="description">
      Coreは現在、大企業の研修向けにサービスを提供しており、ユーザーは①受講者、②コーチ(上司)、③HR（人事）の３種類に分けられます。<br>
      研修は「社員に成長の機会を与えたい」「優秀なタレント人財を選抜したい」といった、企業の人課題を解決するために実施されます。<br>
      そのため研修は多くの受講者にとって「受け身」ですが、上司や人事がCoreを通して声をかけることで、主体的に研修を受講してもらうことを目指しています。またCoreの利用状況を分析することで、企業は現在の成績に囚われず将来性のある人財を発掘できます。
      <a href="https://www.notion.so/akinen/b419b6e3afd044048774c9d02ff17fc6" target="_blank" class="top-btn">ペルソナを見る</a>
    </p>

    <h2 class="title">取り組み1. ホーム画面のリデザイン・実装</h2>
    <p class="description">
      旧ホーム画面ではCoreの全体像や自分の役割が把握しづらく、Coreにアクセスしても次のアクションが分からないという課題がありました。そこで課題感を洗い出し、ユーザーの導線や情報設計、UXライティングを見直しました。<br>
      まず、改めてホーム画面にアクセスしたユーザーのシナリオを考え、ユーザーがなぜ戸惑うのか仮説を立ててみることにしました。<br>
      すると「初めてログインしたユーザーはこのサービスのページ構造やドメイン知識がなく、『最新のスレッド』というものが表示されてもどこに遷移するのか、その先で何をすれば良いのかイメージ出来ないのではないか」という仮説が立ちました。<br>
      <img class="image image--w80" :src="core_home" loading="lazy">
      上記の仮説をもとに<br>
      ①サイドバーと表現を合わせて、自分の見るべき箇所を明示する<br>
      ②Tipsで、ユーザーの役割に応じて端的にやるべきことを伝える<br>
      修正をしました。またフロントエンドの実装も自ら行い、レスポンシブにも対応した、プロトタイプ通りの実装を実現しました。<br>
    </p>

    <h2 class="title">取り組み2. 管理画面の全面リニューアル</h2>
    <p class="description">
      従来のCoreではCLIでデータを変更していたためヒューマンエラーが発生し、受講生がログイン出来なくなる等の問題がありました。そこで、管理画面のリデザインを行いました。<br>
      ①ヒアリング<br>
      はじめに、既存の実装仕様や運用をヒアリングしました。CSVファイルの運用方法やデータ構造を把握することで、情報設計がスムーズになりました。<br>
      ②情報設計・UIデザイン<br>
      7画面・モーダル数約30種類に及ぶ管理項目の情報設計を見直し、実装面を考慮しながらパターンごとに出し分けを行いました。<br>
      <img class="image" :src="core_dashboard" loading="lazy">
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
      core_ogp: require('@/assets/image/core.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
