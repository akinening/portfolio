<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="ogp">

    <p class="description">
      フロントエンドの開発を担当しました。 チームは数十名規模。エンジニアはフロントエンド３名、バックエンド３名
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Lobiは、日本最大級のゲームコミュニティです。アクティブブループ数は16万を突破。<br>
      肌の合うコミュニティが見つかり、共通の話題で盛り上がれる「だべり場」を目指してサービスの運用・新規開発を行っていました。<br>
      他にも Lobi Tournament(現Tonamel)との連携やゲームデベロッパー公認のオフ会の開催を通じて、ゲームの新たな楽しみ方をユーザーに提供しています。
    </p>

    <h2 class="title">全面リニューアル</h2>
    <p class="description">
      一時期は広告の差し替えといった保守運用がメインだったため、アプリと機能の乖離が発生していました。また、長年の運用により、過去の経緯を調べるのにも時間がかかる状況でした。<br>
      そこでAngularJSとCoffeeScriptで書かれていたものを、Nuxt.js + TypeScriptで置換えました。<br>
      これによって、負債となっていたバグが解消。さらにパフォーマンスも向上し、Googleのインデックス登録数が増加しました。
    </p>

    <h2 class="title">生配信機能の開発</h2>
    <p class="description">
      WebRTC (Agora.io SDK)を用いて、Web,  Android, iOSのマルチプラットフォームで配信や視聴が可能な、生配信機能の実装を行いました。<br>
      Web 3名, Android 3名, iOS 3名, デザイナー 2名, ディレクター 2名のチームで、要件定義や設計の段階から携わりました。アプリとWebでは仕様が異なることが多々あり、その把握や調整に苦労しました。
    </p>
    <img class="image" :src="lobi_live" loading="lazy">
  </section>
</template>

<script>
export default {
  name: 'LobiTournament',
  data () {
    return {
      lobi_live: require('@/assets/image/lobi_live.png'),
      ogp: require('@/assets/image/lobi.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
