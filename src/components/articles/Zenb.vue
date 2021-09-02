<template>
  <section class="skill mt-80 mb-30">
    <div class="slide">
      <iframe
        class="slide__iframe"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8ayN91Z7cahWOGOkYD4tI2%2FWe%E9%83%A8%3Fpage-id%3D1101%253A2%26node-id%3D1126%253A31%26viewport%3D241%252C48%252C0.15%26scaling%3Dcontain"
        allowfullscreen
      ></iframe>
    </div>

    <p class="description">
      夏期休暇を利用してWebサービスのプロトタイプをざっくりと作成しました。<br>
      ただいまデザイン・開発中。
      <span class="link">
        <a href="https://bosyu.club/" target="_blank" class="link__button">プロトタイプ</a>
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Zenb'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"

.slide
  position relative
  margin-bottom 32px
  padding-bottom 56.25%

  &__iframe
    position absolute
    width 100%
    height 100%
    border-radius 8px
    border none
</style>
