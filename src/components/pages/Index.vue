<template>
<div class="index">
  <header-area />
  <div class="c-page-title">
    <h1 class="title">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title">― A Digital Product Designer.</p>
  </div>
  <div class="heroes">
    <hero-area />
    <vision-area />
  </div>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeroArea from '@/components/HeroArea'
import FooterArea from '@/components/FooterArea'
import VisionArea from '@/components/VisionArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    HeroArea,
    FooterArea,
    VisionArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
.title
  font-size 88px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px

.sub-title
  margin-top 16px
  font-size 32px
  font-weight 500
  line-height 1.0

  @media (max-width: 768px)
    font-size 18px
    margin-top 8px

  @media (min-width: 1200px)
    margin-top 16px
    width 960px

.heroes
  margin 0 80px 40px
  padding-bottom 60px

  @media (max-width: 768px)
    margin 0 20px 40px
    padding-top 0

  @media (min-width: 1200px)
    margin 0 auto 40px
    width 960px
</style>
