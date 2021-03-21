<template>
<div>
  <header-area />
  <h1 class="c-page-title">Works</h1>
  <works-area />
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import WorksArea from '@/components/WorksArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Works',
  components: {
    HeaderArea,
    WorksArea,
    FooterArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
</style>
