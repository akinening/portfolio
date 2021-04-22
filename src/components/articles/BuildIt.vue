<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="bldt_ogp">

    <p class="description">
      現在、記事を移行中です。お手数をおかけしますが、こちらをご覧ください。
      <a href="https://inside.bldt.jp/entry/2020/08/04/080823" target="_blank" class="top-btn">取り組み事例</a>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Build It',
  data () {
    return {
      bldt_ogp: require('@/assets/image/bldt.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
