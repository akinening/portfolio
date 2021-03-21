<template>
<div class="index">
  <header-area />
  <hero-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeroArea from '@/components/HeroArea'

export default {
  name: 'Index',
  components: {
    HeaderArea,
    HeroArea
  }
}
</script>

<style scoped lang="stylus">

</style>
