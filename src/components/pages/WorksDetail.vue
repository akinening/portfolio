<template>
<div>
  <header-area />
  <div class="top-margin">
    <router-link to="/">
      <img class="back" src="@/assets/arrow_back.svg" alt="前の画面に戻る">
    </router-link>
    <h1 class="c-page-title">{{ $route.params.id }}</h1>
  </div>
  <article class="c-centering mb-100">
    <stockr1 v-if="$route.params.id === 'Stockr1'" />
    <stockr10 v-if="$route.params.id === 'Stockr10'" />
    <build-it v-if="$route.params.id === 'Build It'" />
    <core v-if="$route.params.id === 'Core'" />
    <lobi v-if="$route.params.id === 'Lobi'" />
    <lobi-tournament v-if="$route.params.id === 'Lobi Tournament'" />
    <book v-if="$route.params.id === 'Book'" />
    <spott v-if="$route.params.id === 'Spott'" />
  </article>
  <footer-area />
  <scroll-top />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import ScrollTop from '@/components/ScrollTop'
import Stockr1 from '@/components/articles/Stockr1'
import Stockr10 from '@/components/articles/Stockr10'
import BuildIt from '@/components/articles/BuildIt'
import Core from '@/components/articles/Core'
import Lobi from '@/components/articles/Lobi'
import LobiTournament from '@/components/articles/LobiTournament'
import Book from '@/components/articles/Book'
import Spott from '@/components/articles/Spott'

export default {
  name: 'WorksDetail',
  components: {
    HeaderArea,
    FooterArea,
    ScrollTop,
    Stockr1,
    Stockr10,
    BuildIt,
    Core,
    Lobi,
    LobiTournament,
    Book,
    Spott
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
  margin 180px 80px 0

  @media (max-width: 768px)
    margin 120px 20px 0 20px

  @media (min-width: 1200px)
    margin 180px auto 0
    width 960px
</style>
