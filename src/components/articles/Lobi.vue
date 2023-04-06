<template>
  <section class="skill mt-80 mb-30">
    <img class="image" src="@/assets/image/lobi/lobi.png" alt="Lobi">

    <h2 class="title">Lobi - 日本最大級のゲームコミュニティ事業</h2>
    <p class="description">
      フロントエンドエンジニアとして、AngularJSからNuxt.jsへのリニューアルや、WebRTCを用いた生配信機能の実装を行いました。 <br>
      チームは数十名規模。エンジニアはフロントエンド３名、バックエンド３名
    </p>
    <p class="description">
      Lobi(現在は Yay!)は、日本最大級のゲームコミュニティです。アクティブブループ数は16万を突破。<br>
      肌の合うコミュニティが見つかり、共通の話題で盛り上がれる「だべり場」を目指してサービスの運用・新規開発を行っていました。
    </p>

    <h3 class="title title--sub">全面リニューアル</h3>
    <p class="description">
      一時期は広告の差し替えといった保守運用がメインだったため、アプリと機能の乖離が発生していました。また、長年の運用により、過去の経緯を調べるのにも時間がかかる状況でした。<br>
      そこでAngularJSとCoffeeScriptで書かれていたものを、Nuxt.js + TypeScriptで置換えました。<br>
      これによって、負債となっていたバグが解消。さらにパフォーマンスも向上し、Googleのインデックス登録数が増加しました。
    </p>

    <h3 class="title title--sub">生配信機能の開発</h3>
    <p class="description">
      WebRTC (Agora.io SDK)を用いて、Web,  Android, iOSのマルチプラットフォームで配信や視聴が可能な、生配信機能の実装を行いました。<br>
      Web 3名, Android 3名, iOS 3名, デザイナー 2名, ディレクター 2名のチームで、要件定義や設計の段階から携わりました。アプリとWebでは仕様が異なることが多々あり、その把握や調整に苦労しました。
    </p>
    <img class="image image--w80 mb-30" src="@/assets/image/lobi/lobi_live.png" alt="生配信のスクリーンショット" loading="lazy">

    <img class="image" src="@/assets/image/lobi/lobi-tournament.png" alt="Lobi Tournament">

    <h2 class="title">Lobi Tournament - 日本有数のe-sports大会開催サービス</h2>
    <p class="description">
      フロントエンドエンジニアとして、複数大会への一括エントリー機能や、スイスドロー形式の大会開催機能の実装を行いました。<br>
      チームは数十名規模。エンジニアはフロントエンド３名、バックエンド３名
    </p>

    <p class="description">
      Lobi Tournament(現Tonamel)は、誰でも簡単にゲーム大会を開催・運営できる国内有数のトーナメント・プラットフォームです。<br>
      2017年にサービスを開始し、参加総数は10万人を突破。<br>
      個人向けに基本無料でサービスを提供しているほか、複数の大手ゲーム会社と提携して1000人超が同時接続するオンライン大会を開催しています。
      <span class="link">
        <a href="https://tonamel.com/" target="_blank" class="link__button">Webサイト</a>
      </span>
    </p>

    <h3 class="title title--sub">新規機能開発</h3>
    <p class="description">
      複数の日程の大会に一括でエントリーする「一括エントリー機能」や、「スイスドロー形式」と呼ばれるトーナメントの開催機能を実装しました。(フロントエンド3名、バックエンド2名)<br>
      Vue.js + TypeScript を使用し、できるだけ厳密に型定義をしていました。CSSにはStylusを使い、コンポーネントの共通化をしやすいようBEM記法で管理しました。
    </p>

    <h3 class="title title--sub">リファクタリング</h3>
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
  name: 'Lobi'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
