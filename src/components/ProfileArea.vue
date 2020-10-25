<template>
  <section class="profile">
    <div class="image" :style="{backgroundImage: 'url(' + bg_img + ')'}"></div>
    <div class="description">
      <h2 class="name">小澤 晶徳</h2>
      <p class="position">デジタルプロダクトデザイナー (UI/UXデザイナー)</p>
      <p>
        1995年、長野県諏訪市生まれ。<br>
        面白法人カヤックにて、フロントエンドエンジニアとしてゲームコミュニティ事業の開発を行う。
        現在は株式会社ビルディットにて、WebやネイティブアプリのUX/UIデザインおよびサービスデザインに携わっている。
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfileArea',
  data () {
    return {
      bg_img: require('@/assets/image/akinen.png')
    }
  }
}
</script>

<style scoped lang="stylus">
.profile
  display flex

.image
  width 25%
  height 168px
  background center / cover no-repeat
  border-radius 8px

  @media (max-width: 768px)
    width 96px
    height 96px

.description
  flex 1
  padding-left 20px

.position
  margin-bottom 20px

.name
  font-size 28px
  font-weight 600
  color #45494B
  padding 3px 0 6px
  line-height 1
</style>
