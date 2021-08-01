<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="book_ogp" alt="現場から見る デザインとエンジニアリングの間">

    <p class="description">
      「デザイン読書日和」および「技術書典11」に出展し、約70部を頒布しました。
      <span class="link">
        <a href="https://techbookfest.org/product/5108267816583168" target="_blank" class="link__button">技術書典11</a>
      </span>
    </p>

    <p class="description">
      主催者の方からもコメントをいただきました(うれしい)。
    </p>
    <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">技術書典オンラインマーケットでSTARLIGHTの「現場から見る デザインとエンジニアリングの間」を購入しました！ <a href="https://twitter.com/hashtag/%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B8?src=hash&amp;ref_src=twsrc%5Etfw">#技術書典</a> <a href="https://t.co/6MuRqvRCzZ">https://t.co/6MuRqvRCzZ</a> チームで共同作業してると当事者間だけなのか、一般的なのかわからない時があるのでこういうのは助かる</p>&mdash; mhidaka@DroidKaigi (@mhidaka) <a href="https://twitter.com/mhidaka/status/1419141749063127046?ref_src=twsrc%5Etfw">July 25, 2021</a></blockquote>
  </section>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      book_ogp: require('@/assets/image/dezabiyo.png')
    }
  },
  mounted () {
    setTimeout(() => {
      let tweetScript = document.createElement('script')
      tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      tweetScript.setAttribute('async', 'true')
      document.head.appendChild(tweetScript)
    }, 100)
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
