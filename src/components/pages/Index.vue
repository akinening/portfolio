<template>
<div class="index">
  <div class="c-centering">
    <h1 class="title">Akinen</h1>
    <p>出典: フリー百科事典『アキペディア（Akipedia）』</p>
    <div class="alert">
      <svg class="alert__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f28500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <p class="alert__text">この存命人物の記事には検証可能な出典が不足しています。信頼できる情報源の提供に協力をお願いします。存命人物に関する出典の無い、もしくは不完全な情報に基づいた論争の材料、特に潜在的に中傷・誹謗・名誉毀損あるいは有害となるものはすぐに除去する必要があります。</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.title
  margin 100px 0 12px
  font-size 32px
  padding-bottom 12px
  border-bottom 1px solid rgb(162, 169, 177)

.alert
  position relative
  margin 20px
  padding 20px
  border 1px solid rgb(162, 169, 177)

  &__icon
    position absolute
    top calc(50% - 12px)
    left 20px

  &__text
    margin-left 44px
</style>
