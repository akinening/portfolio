<template>
<div>
  <header-area />
  <div class="top-margin">
    <router-link to="/">
      <img class="back" src="@/assets/arrow_back.svg" alt="前の画面に戻る">
    </router-link>
    <h1 class="c-page-title">{{ $route.params.id }}</h1>
  </div>
  <article class="skills c-centering">
    <stockr v-if="$route.params.id === 'Stockr'" />
    <build-it v-if="$route.params.id === 'Build It'" />
    <core v-if="$route.params.id === 'Core'" />
    <lobi v-if="$route.params.id === 'Lobi'" />
    <lobi-tournament v-if="$route.params.id === 'Lobi Tournament'" />
    <book v-if="$route.params.id === 'Book'" />
    <spott v-if="$route.params.id === 'Spott'" />
  </article>
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'
import Stockr from '@/components/articles/Stockr'
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
    Stockr,
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

.skills
  margin-bottom 100px
</style>
