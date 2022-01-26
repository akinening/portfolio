<template>
<div>
  <auth-modal v-if="!isAuthed" />

  <div class="hero" style="background-image: url('/assets/image/bg_top.jpg')">
    <div class="hero__content">
      <h1 class="title">Design can change our lives.</h1>
    </div>
  </div>

  <works-area />
</div>
</template>

<script>
export default {
  data() {
    return {
      isAuthed: true
    }
  },
  beforeMount() {
    this.isAuthed = localStorage.getItem('isAuthed')
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.title
  font-size 64px
  font-weight bold
  line-height 1.0

  @media (max-width: 768px)
    font-size 40px
</style>
