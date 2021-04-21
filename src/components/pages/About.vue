<template>
<div>
  <header-area />
  <h1 class="c-top-margin c-page-title">About</h1>
  <article class="contents c-centering" itemscope="" itemtype="http://schema.org/Person">
    <exp-area />
  </article>

  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import ExpArea from '@/components/ExpArea'

export default {
  name: 'About',
  data () {
    return {

    }
  },
  components: {
    HeaderArea,
    FooterArea,
    ExpArea
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.contents
  margin-top 80px

  @media (max-width: 768px)
    margin-top 60px
</style>
