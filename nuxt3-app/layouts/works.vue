<template>
<div>
  <div class="top-margin">
    <nuxt-link to="/">
      <img class="back" src="/assets/image/svg/arrow_back.svg" alt="前の画面に戻る">
    </nuxt-link>
    <h1 class="c-page-title">Title</h1>
  </div>
  <article class="c-centering mb-100">
    <slot />
  </article>
</div>
</template>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.back
  width 40px
  height 40px
  margin-bottom 4px

// 40pxぶん下げる
.top-margin
  margin 80px 80px 0

  @media (max-width: 768px)
    margin 40px 20px 0 20px

  @media (min-width: 1200px)
    margin 80px auto 0
    width 960px
</style>
