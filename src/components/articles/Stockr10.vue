<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp" alt="ストッカー">
    <p class="description">本項目は現在執筆中です。</p>

    <p class="description">
      <img class="image image--2col" :src="stockr_flow1" alt="基本機能の改善">
      <img class="image image--2col" :src="stockr_flow2" alt="マーケ施策">
      主に基本機能の改善、プレミアム機能、マーケ施策の３つのデザインを行いました。マーケ施策については、広報やマーケターの方と相談しながらデザインに取り組みました。
    </p>

    <h2 class="title">デザインガイドライン</h2>
    <p class="description">
      現在Stockrのデザインはほぼ自分１人で行っているため、デザインが属人的になっています。そこで少しずつデザインガイドラインを構築したり、デザイン意図を明文化しています。<br>
      FlutterはMaterial Designを標準サポートしていることから、Material Designに寄せ、iOSとAndroidでデザインは極力同じにすることとしました。フォントについては英字はRoboto, 日本語はNoto Sans JPを使用しています。<br>
      <img class="image image--2col" :src="stockr_color" alt="カラー" loading="lazy">
      <img class="image image--2col" :src="stockr_component" alt="コンポーネントの例" loading="lazy">
      フロントエンドエンジニアとしての知識を活かし、職種間での意思疎通がスムーズになるよう取り組んでいます。
    </p>
  </section>
</template>

<script>
export default {
  name: 'Stockr10',
  data () {
    return {
      stockr_color: require('@/assets/image/stockr-color.png'),
      stockr_component: require('@/assets/image/stockr-component.png'),
      stockr_ogp: require('@/assets/image/stockr.png'),
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
