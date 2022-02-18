<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/lobi/lobi-tournament.png" alt="Lobi Tournament">

    <p class="description">
      フロントエンドの開発を担当しました。 チームは数十名規模。エンジニアはフロントエンド３名、バックエンド３名
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Lobi Tournament(現Tonamel)は、誰でも簡単にゲーム大会を開催・運営できる国内有数のトーナメント・プラットフォームです。<br>
      2017年にサービスを開始し、参加総数は10万人を突破。<br>
      個人向けに基本無料でサービスを提供しているほか、複数の大手ゲーム会社と提携して1000人超が同時接続するオンライン大会を開催しています。
      <span class="link">
        <a href="https://tonamel.com/" target="_blank" class="link__button">Webサイト</a>
      </span>
    </p>

    <h2 class="title">新規機能開発</h2>
    <p class="description">
      複数の日程の大会に一括でエントリーする「一括エントリー機能」や、「スイスドロー形式」と呼ばれるトーナメントの開催機能を実装しました。(フロントエンド3名、バックエンド2名)<br>
      Vue.js + TypeScript を使用し、できるだけ厳密に型定義をしていました。CSSにはStylusを使い、コンポーネントの共通化をしやすいようBEM記法で管理しました。
    </p>

    <h2 class="title">リファクタリング</h2>
    <p class="description">
      新規機能の開発が連続し、短期間で開発したため実装が複雑化してしまいました。そのため潜在的なBugが存在する可能性があり、操作が限定されたり、大規模な大会を開けない等の課題がありました。<br>
      そこでリファクタリング期間を設けることをエンジニアサイドで提案し、三ヶ月間コードの改修を行いました。その結果、安定的にサービスの運用が出来るようになり、Bug対応にリソースを割く頻度が減りました。
    </p>

    <h3 class="title title--sub">1. コードの改善</h3>
    <p class="description">
      class名や変数名の統一、CSSのvariableやmixinでの変数定義、エラーハンドリングの例外処理といった細かな修正を行いました。
    </p>

    <h3 class="title title--sub">2. any型の排除</h3>
    <p class="description">
      any型を許容していたTypeScriptをstrictモードにして、any型を排除しました。GraphQLでデータを取得している箇所にはPrisma.ioを利用し、型定義を自動生成しました。
    </p>

    <h3 class="title title--sub">3. 単体テスト</h3>
    <p class="description">
      不確実性を減らすことを目的として、Jestを用いてコンポーネントの単体テストを書きました。バグを未然に防ぐことができ、QAテスト前にバグ修正の工数を削減しました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'LobiTournament'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
