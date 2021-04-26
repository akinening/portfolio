<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp">
    <p class="description">
      メインのデザイナーとして自社事業のコンセプト立案、プロトタイピング、リリース、検証・グロースまで一貫して携わっています。<br>
      チーム構成：ディレクター1名、エンジニア3名、デザイナー1名
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Stockrは、投稿した気づきを定期的にピックアップすることで「ふりかえりの習慣化」をサポートするアプリです。
      時事ドットコムやアスキーなどに掲載され、順調にファンを増やしています。
      <a href="https://stockr.bldt.jp/" target="_blank" class="top-btn">公式HP</a>
    </p>
    <p class="description">
      ０→１のデザインでは計画立案や体験設計、仮説検証のためのプロトタイプ作成などに取り組みました。<br>
      詳しくはこちらをご覧ください。
      <a href="https://inside.bldt.jp/entry/2020/11/26/104143" target="_blank" class="top-btn">取り組み事例</a>
    </p>

    <h2 class="title">デザインシステムの構築</h2>
    <p class="description">
      FlutterはMaterial Designを標準サポートしていることから、Material Designに寄せ、iOSとAndroidでデザインは極力同じにすることとしました。フォントについては英字はRoboto, 日本語はNoto Sans JPを使用しています。ただしログイン周りや通知の権限要求など、OSに依存する部分は別で対応しています。<br>
      色については、当初は暖色系を使っていましたが、ビジネスパーソン向けのサービスであることや、普段使いするアプリであることから基本色は寒色系で、かつ優しい印象のあるシアンに落ち着きました。フォント等で使用するBlackも、若干青みを持たせています。<br>
      <img class="image image--2col" :src="stockr_color" loading="lazy">
      <img class="image image--2col" :src="stockr_component" loading="lazy">
      フロントエンドエンジニアとしての知識を活かし、共通化できる要素はコンポーネント化してからエンジニアに共有しています。
    </p>

    <h2 class="title">定性・定量調査と、それに基づく改善</h2>
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
      stockr_component: require('@/assets/image/stockr-component.png'),
      stockr_ogp: require('@/assets/image/stockr.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"

.image--2col
  display inline-block
  width calc(50% - 48px)

  @media (max-width: 768px)
    width 100%
</style>
