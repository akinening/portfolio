<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="book_ogp" alt="現場から見る デザインとエンジニアリングの間">

    <p class="description">
      「デザイン読書日和」にて初版を頒布。現在は技術書典に向けて準備中です。
      <span class="link">
        <a href="https://booth.pm/ja/items/2470035" target="_blank" class="link__button">BOOTH</a>
      </span>
      <span class="link">
        <a href="https://techbookfest.org/product/5108267816583168" target="_blank" class="link__button">技術書典11</a>
      </span>
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
