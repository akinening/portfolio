<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp">
    <p class="description">
      メインのデザイナーとして自社事業の立ち上げからリリース、グロースの段階まで携わっています。<br>
      チーム構成：ディレクター1名、エンジニア3名、デザイナー1名
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Stockrは、投稿した気づきを定期的にピックアップすることで「ふりかえりの習慣化」をサポートするアプリです。
      <a href="https://stockr.bldt.jp/" target="_blank" class="top-btn">公式HP</a>
    </p>

    <h2 class="title">０→１のデザイン</h2>
    <p class="description">
      新規プロダクトの計画立案や体験設計、仮説検証のためのプロトタイプ作成などに取り組みました。<br>
      詳しくはこちらをご覧ください。
      <a href="https://inside.bldt.jp/entry/2020/11/26/104143" target="_blank" class="top-btn">取り組み事例</a>
    </p>

    <h2 class="title">デザインガイドラインの作成</h2>
    <p class="description">
      FlutterはMaterial Designを標準サポートしていることから、Material Designに寄せ、iOSとAndroidでデザインは極力同じにすることとしました。フォントについては英字はRoboto, 日本語はNoto Sans JPを使用しています。ただしログイン周りや通知の権限要求など、OSに依存する部分は別で対応しています。<br>
      色については、当初は暖色系を使っていましたが、ビジネスパーソン向けのサービスであることや、普段使いするアプリであることから基本色は寒色系で、かつ優しい印象のあるシアンに落ち着きました。フォント等で使用するBlackも、若干青みを持たせています。
      <img class="image" :src="stockr_color" loading="lazy">
    </p>

    <h2 class="title">1→10のデザイン</h2>
    <p class="description">
      現在執筆中です‥
    </p>
  </section>
</template>

<script>
export default {
  name: 'Stockr',
  data () {
    return {
      stockr_color: require('@/assets/image/stockr-color.png'),
      stockr_ogp: require('@/assets/image/stockr.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
