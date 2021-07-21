<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="book_ogp" alt="現場から見る デザインとエンジニアリングの間">

    <p class="description">
      「デザイン読書日和」および「技術書典11」に出展し、およそ50部ほど頒布しました。
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
