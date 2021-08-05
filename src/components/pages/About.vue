<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_about + ')' }">
    <span class="hero__content">About</span>
  </h1>
  <article class="mb-100 mt-minus" itemscope="" itemtype="http://schema.org/Person">
    <section class="profiles c-shadow c-centering">
      <img class="akinen" :src="note1" alt="プロフィール画像">
      <div class="profile">
        <h2 class="profile__name">AKINORI OZAWA</h2>
        <p class="profile__discription">PRODUCT DESIGNER</p>
        <p class="profile__discription">
          長野県諏訪市出身。面白法人カヤックにてエンジニアとして自社事業の開発に携わる。現在はビルディットにて、Web製品のデザインを包括的に担当。空手道初段。<br>
          <br>
          デジタルプロダクトを通じて、より多くの人々の暮らしを豊かにしたい。その思いから、日々プロダクトデザイナーとして試行錯誤しています。
        </p>
      </div>
    </section>
    <!-- <vision-area class="c-centering" /> -->
    <exp-area class="c-centering" />
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
// import VisionArea from '@/components/VisionArea'
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
    // VisionArea,
    ExpArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.profiles
  position relative
  padding 20px
  border-radius 4px
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
  border-radius 4px

  @media (max-width: 768px)
    position relative
    top 0
    left 0
    margin 0 auto
    display block

.profile
  margin 20px 20px 20px 260px

  @media (max-width: 768px)
    height auto
    margin 0

  &__name
    font-size 32px
    font-weight bold
    line-height 2rem
    letter-spacing 0.2rem

    @media (max-width: 768px)
      text-align center

  &__discription
    padding-top 8px
    line-height 2.0
    letter-spacing 0.04rem

    @media (max-width: 768px)
      text-align center
</style>
