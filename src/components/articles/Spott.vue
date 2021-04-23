<template>
  <section class="skill mt-80 mb-30">
    <div class="slide">
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="//speakerdeck.com/player/991889f3485a4b039c6f2614ff82f7d3"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
    <a href="https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid" target="_blank" class="top-btn">Chromeウェブストア</a>
  </section>
</template>

<script>
export default {
  name: 'Spott',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"

.slide
  position relative
  padding-bottom 56.25%

  & > iframe
    position absolute
    width 100%
    height 100%
    border-radius 8px
</style>
