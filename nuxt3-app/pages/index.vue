<template>
<div>
  <div class="hero" style="background-image: url('/assets/image/bg_top.jpg')">
    <div class="hero__content" style="text-align: center;">
      <h1 class="title">Design can change our lives.</h1>
      <nuxt-link to="/about" class="top-btn c-shadow">私について</nuxt-link>
    </div>
  </div>

  <works-area />
</div>
</template>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.title
  font-size 64px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px

.top-btn
  display inline-block
  margin 60px 0
  padding 16px 60px
  width fit-content
  border-radius 4px
  font-size 16px
  font-weight 700
  color #015898
  background-color white
  transition all 0.2s

  &:hover
    box-shadow none
    opacity 0.8

  @media (max-width: 768px)
    display none
</style>
