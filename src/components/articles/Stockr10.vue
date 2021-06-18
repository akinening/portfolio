<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp" alt="ストッカー">
    <p class="description">本項目は現在執筆中です。</p>

    <p class="description">
      <img class="image image--2col" :src="stockr_flow1" alt="基本機能の改善">
      <img class="image image--2col" :src="stockr_flow2" alt="マーケ施策">
      主に基本機能の改善、プレミアム機能、マーケ施策の３つのデザインを行いました。マーケ施策については、広報やマーケターの方と相談しながらデザインに取り組みました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'Stockr10',
  data () {
    return {
      stockr_ogp: require('@/assets/image/stockr.png'),
      stockr_flow1: require('@/assets/image/stockr-flow1.png'),
      stockr_flow2: require('@/assets/image/stockr-flow2.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
