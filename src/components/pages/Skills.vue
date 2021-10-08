<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_skills + ')' }">
    <span class="hero__content">Skills</span>
  </h1>
  <article class="c-centering">

  </article>
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Skills',
  components: {
    HeaderArea,
    FooterArea
  },
  data () {
    return {
      bg_skills: require('@/assets/image/bg_skills.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
</style>
