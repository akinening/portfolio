<template>
<div>
  <auth-modal v-if="!isAuthed" />
  <header-area />
  <div class="top-margin">
    <router-link to="/">
      <img class="back" src="@/assets/arrow_back.svg" alt="前の画面に戻る">
    </router-link>
    <h1 class="c-page-title">{{ $route.params.id }}</h1>
  </div>
  <article class="c-centering mb-100">
    <stockr v-if="$route.params.id === 'Stockr'" />
    <build-it v-if="$route.params.id === 'Build It'" />
    <core v-if="$route.params.id === 'Core'" />
    <lobi v-if="$route.params.id === 'Lobi'" />
    <tmnf v-if="$route.params.id === 'Tmnf'" />
    <inhouse-design v-if="$route.params.id === 'InhouseDesign'" />
    <develop v-if="$route.params.id === 'Develop'" />
  </article>
  <footer-area />
  <scroll-top />
</div>
</template>

<script>
import AuthModal from '@/components/AuthModal'
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import ScrollTop from '@/components/ScrollTop'
import Stockr from '@/components/articles/Stockr'
import BuildIt from '@/components/articles/BuildIt'
import Core from '@/components/articles/Core'
import Lobi from '@/components/articles/Lobi'
import Tmnf from '@/components/articles/Tmnf'
import InhouseDesign from '@/components/articles/InhouseDesign'
import Develop from '@/components/articles/Develop'

export default {
  name: 'WorksDetail',
  components: {
    AuthModal,
    HeaderArea,
    FooterArea,
    ScrollTop,
    Stockr,
    BuildIt,
    Core,
    Lobi,
    Tmnf,
    InhouseDesign,
    Develop
  },
  data () {
    return {
      isAuthed: true
    }
  },
  beforeMount () {
    this.isAuthed = localStorage.getItem('isAuthed')
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

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
