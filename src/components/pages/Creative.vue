<template>
<div>
  <div class="hero" :style="{backgroundImage: 'url(' + bg_creative + ')' }">
    <header-area />
    <span class="hero__content">XRUI</span>
  </div>
  <header-bar />

  <article class="c-centering mb-100">
    <section class="skill mt-80 mb-30">
      <h1 class="title">XR(VR, AR, MR)のUIデザイン</h1>
      <h2 class="title title--sub">社内共有スライド</h2>
      <p class="description">
        現在作成中です。
      </p>
      <a href="https://www.figma.com/proto/obYFoTA8B34SX2zXUWCNeL/VRUI?page-id=526%3A65&node-id=540%3A108&viewport=-656%2C1342%2C0.25&scaling=contain" target="_blank">
        <img class="image" src="@/assets/image/creative/xrui_slide.jpg" alt="XRUI">
      </a>

      <br>
      <h2 class="title title--sub">NrealAir Prototype</h2>
      <p class="description">
        Nreal Air上で動作するデスクトップアプリケーションのプロトタイプを作成しました。背景はコンポジットです。
      </p>
      <iframe
        width="560" height="315"
        src="https://www.youtube.com/embed/D0_OCFrtvyk"
        title="Nreal Air"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <br>
      <h2 class="title title--sub">Bezel</h2>
      <p class="description">
        デザインツール「Bezel」を使って3Dのプロトタイピングを作成しています。
        <img class="image" src="@/assets/image/creative/shopping.png" alt="Shopping">
        <span class="link">
          <a href="https://www.bezel.it/x0mi5a" target="_blank" class="link__button">プロトタイプを見る</a>
        </span>
      </p>

      <br>
      <h2 class="title title--sub">Dribbble</h2>
      <p class="description">
        DribbbleにVRやARを想定したUIデザインを投稿しています。
        <span class="link">
          <a href="https://dribbble.com/akinen" target="_blank" class="link__button">Dribbble</a>
        </span>
      </p>
    </section>
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeaderBar from '@/components/HeaderBar'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Creative',
  components: {
    HeaderArea,
    HeaderBar,
    FooterArea
  },
  data () {
    return {
      bg_creative: require('@/assets/image/bg_sunrise.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
@import "../../assets/css/article.styl"
</style>
