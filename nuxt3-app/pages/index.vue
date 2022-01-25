<template>
<div>
  <auth-modal />

  <div class="hero" style="background-image: url('/assets/image/bg_top.jpg')">
    <div class="hero__content">
      <h1 class="title">Design can change our lives.</h1>
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
</style>
