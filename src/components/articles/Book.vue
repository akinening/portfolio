<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="book_ogp">

    <p class="description">
      現在、技術書展に向けて準備中です。
      <a href="https://booth.pm/ja/items/2470035" target="_blank" class="top-btn">旧版はこちら</a>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      book_ogp: require('@/assets/image/dezabiyo.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
