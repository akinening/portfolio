<template>
<div>
  <header-area />
  <h1 class="c-page-title">About</h1>
  <article class="contents" itemscope="" itemtype="http://schema.org/Person">
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
  max-width 960px
  margin 120px 80px

  @media (max-width: 768px)
    margin 60px 20px

  @media (min-width: 1200px)
    margin 120px auto

</style>
