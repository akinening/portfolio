<template>
<div>
  <header-area />
  <hero-area />
  <works-area />
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeroArea from '@/components/HeroArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    HeroArea,
    WorksArea,
    FooterArea
  }
}
</script>

<style scoped lang="stylus">

</style>
