<template>
<div>
  <header-area />
  <h1 class="about-title">About</h1>

  <article class="contents" itemscope="" itemtype="http://schema.org/Person">
    <profile-area />
    <vision-area />
    <exp-area />
    <blog-area />
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import ProfileArea from '@/components/ProfileArea'
import VisionArea from '@/components/VisionArea'
import ExpArea from '@/components/ExpArea'
import BlogArea from '@/components/BlogArea'

export default {
  name: 'About',
  data () {
    return {

    }
  },
  components: {
    HeaderArea,
    FooterArea,
    ProfileArea,
    VisionArea,
    ExpArea,
    BlogArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.about-title
  margin 224px 80px 0
  font-size 88px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px
    margin 164px 20px 0 20px

  @media (min-width: 1200px)
    margin 224px auto 0
    width 1040px

.contents
  max-width 1040px
  margin 120px 80px
  background-color white

  @media (max-width: 768px)
    margin 60px 20px

  @media (min-width: 1200px)
    margin 120px auto

</style>
