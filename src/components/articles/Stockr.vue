<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp" alt="ストッカー">
    <p class="description">
      メインのデザイナーとして自社事業のコンセプト立案、プロトタイピング、リリース、検証・グロースまで一貫して携わっています。<br>
      チーム構成：ディレクター1名、エンジニア3名、デザイナー1名
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Stockrは、投稿した気づきを定期的にピックアップすることで「ふりかえりの習慣化」をサポートするアプリです。
      <a href="https://stockr.bldt.jp/" target="_blank" class="top-btn">公式HP</a>
    </p>

    <h2 class="title">0→1のデザイン</h2>
    <p class="description">
      <img class="image" :src="stockr_process" alt="作業フロー">
      ０→１のデザインでは計画立案や体験設計、仮説検証のためのプロトタイプ作成などに取り組みました。<br>
      詳しくはこちらをご覧ください。
      <a href="https://inside.bldt.jp/entry/2020/11/26/104143" target="_blank" class="top-btn">取り組み事例</a>
    </p>

    <h2 class="title">1→10のデザイン</h2>
    <p class="description">
      <img class="image image--2col" :src="stockr_flow1" alt="基本機能の改善">
      <img class="image image--2col" :src="stockr_flow2" alt="マーケ施策">
      現在執筆中です。
      主に基本機能の改善、プレミアム機能、マーケ施策の３つのデザインを行いました。<br>
      マーケ施策については、広報やマーケターの方と相談しながらデザインに取り組みました。
    </p>

    <h2 class="title">デザインガイドライン</h2>
    <p class="description">
      現在Stockrのデザインはほぼ自分１人で行っているため、デザインが属人的になっています。そこで少しずつデザインガイドラインを構築したり、デザイン意図を明文化しています。
      FlutterはMaterial Designを標準サポートしていることから、Material Designに寄せ、iOSとAndroidでデザインは極力同じにすることとしました。フォントについては英字はRoboto, 日本語はNoto Sans JPを使用しています。<br>
      <img class="image image--2col" :src="stockr_color" alt="カラー" loading="lazy">
      <img class="image image--2col" :src="stockr_component" alt="コンポーネントの例" loading="lazy">
      フロントエンドエンジニアとしての知識を活かし、職種間での意思疎通がスムーズになるよう取り組んでいます。
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
      stockr_ogp: require('@/assets/image/stockr.png'),
      stockr_process: require('@/assets/image/stockr-process.png'),
      stockr_flow1: require('@/assets/image/stockr-flow1.png'),
      stockr_flow2: require('@/assets/image/stockr-flow2.png')
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
