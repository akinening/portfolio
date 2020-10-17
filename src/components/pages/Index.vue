<template>
<div>
  <header-area />
  <hero-area />
  <works-area />
  <footer-area />
  <social-link />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeroArea from '@/components/HeroArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'
import SocialLink from '@/components/SocialLink'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    HeroArea,
    WorksArea,
    FooterArea,
    SocialLink
  }
}
</script>

<style scoped lang="stylus">

</style>
