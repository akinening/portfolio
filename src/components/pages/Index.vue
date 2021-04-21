<template>
<div class="index">
  <header-area />
  <div class="c-top-margin c-page-title">
    <h1 class="title">Hi, I'm Akinen. 👋</h1>
    <p class="sub-title">― A Digital Product Designer.</p>
    <router-link to="/about" class="top-btn">私について</router-link>
  </div>
  <works-area />
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    WorksArea,
    FooterArea
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

.top-btn
  display block
  margin 40px 0 60px
  padding 16px 60px
  width fit-content
  border 1px solid rgb(36, 40, 42)
  border-radius 4px
  font-size 16px
  font-weight 700
  color rgb(36, 40, 42)

  &:hover
    opacity 0.6

  @media (max-width: 768px)
    display none
</style>
