<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_about + ')' }">
    <span class="hero__content">About</span>
  </h1>
  <article class="mb-100 mt-minus" itemscope="" itemtype="http://schema.org/Person">
    <section class="profiles c-centering">
      <img class="akinen" :src="note1" alt="プロフィール画像">
      <div class="profile">
        <h2 class="profile__name">AKINORI OZAWA</h2>
        <p class="profile__discription">PRODUCT DESIGNER</p>
        <p class="profile__discription">長野県諏訪市出身。面白法人カヤックにて、ゲームコミュニティ事業のフロントエンド開発を行う。現在は株式会社ビルディットにて、経験学習支援アプリ「Stockr」のメインデザイナーを担当。</p>
        <a href="https://note.com/012/n/ne82251f29c00" class="profile__link" target="_blank" rel="noopener noreferrer">noteで自己紹介を読む</a>
      </div>
    </section>
    <vision-area class="c-centering" />
    <exp-area class="c-centering" />
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import VisionArea from '@/components/VisionArea'
import ExpArea from '@/components/ExpArea'

export default {
  name: 'About',
  data () {
    return {
      bg_about: require('@/assets/image/bg_about.jpg'),
      note1: require('@/assets/image/logo_sp.png')
    }
  },
  components: {
    HeaderArea,
    FooterArea,
    VisionArea,
    ExpArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.profiles
  position relative
  padding 20px
  height 280px
  border-radius 8px
  background-color white
  box-sizing border-box

  @media (max-width: 768px)
    height auto
    padding 20px

.akinen
  position absolute
  top 20px
  left 20px
  width 240px
  height 240px
  border-radius 8px

.profile
  position relative
  height 200px
  margin 20px 20px 20px 260px

  @media (max-width: 768px)
    height auto
    margin 240px 20px 20px

  &__name
    font-size 32px
    font-weight bold
    line-height 2rem
    letter-spacing 0.2rem

  &__discription
    padding-top 8px
    line-height 2.0
    letter-spacing 0.04rem

  &__link
    position absolute
    bottom 0
    left 0
    display block
    margin-top 26px
    padding 8px 32px
    width fit-content
    border 1px solid rgb(36, 40, 42)
    border-radius 4px
    font-size 13px
    font-weight 700
    color rgb(36, 40, 42)

    @media screen and (max-width: 768px)
      position relative
</style>
