<template>
  <section class="skill mt-80 mb-30">
    <div class="slide description">
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="//speakerdeck.com/player/991889f3485a4b039c6f2614ff82f7d3"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>

    <h2 class="title">概要</h2>
    <p class="description">
      Spottは、デザイナーのための便利ツールを１つにまとめた拡張機能です。<br>
      イラストやアイコン、UI Kitといった素材を探す煩わしい作業を軽減し、本来の仕事であるUIづくりに集中することを目的としています。<br>
      もとは自分のためにつくったツールですが、せっかくなら公開しようということでChrome拡張機能を作成しました。
      <span class="link">
        <a href="https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid" target="_blank" class="link__button">Chromeウェブストア</a>
      </span>
    </p>
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
    border-radius 4px
    background-color #F0F4FA
</style>
