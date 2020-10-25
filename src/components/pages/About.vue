<template>
<div>
  <header-area />
  <h1 class="about-title">About</h1>

  <article class="contents" itemscope="" itemtype="http://schema.org/Person">
    <profile-area />
    <vision-area />
    <exp-area />

    <section class="mt-60">
      <h2 class="c-title">License</h2>
      <ul class="c-entries">
        <li>
          <h3 class="c-entry-title">
            <span>空手道初段(黒帯)</span>
          </h3>
          <p class="c-description">2001年から空手を学び始め、大学では週三回、品川と新宿で小学生～一般の約３０名の稽古生に空手の指導をしていました。<br>また高校時代の１年間、空手の道場で住み込み生活を送り、礼節や武道家としての精神を学びました。</p>
          <p class="c-line" style="background-image:url(https://de7iszmjjjuya.cloudfront.net/assets/linethrough-bg-ca1a0157a77da0bca2ace712e4d6037a7aa1dec69db54d1491c4e7918a33855a.gif);">
            <span>2001-4 - 2018-3</span>
          </p>
        </li>
      </ul>
    </section>

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
