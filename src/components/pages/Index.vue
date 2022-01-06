<template>
<div class="index">
  <div class="c-centering">
    <h1 class="title">Akinen</h1>
    <p>出典: フリー百科事典『アキペディア（Akipedia）』</p>
    <div class="alert">
      <svg class="alert__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f28500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <p class="alert__text">この存命人物の記事には検証可能な出典が不足しています。信頼できる情報源の提供に協力をお願いします。存命人物に関する出典の無い、もしくは不完全な情報に基づいた論争の材料、特に潜在的に中傷・誹謗・名誉毀損あるいは有害となるものはすぐに除去する必要があります。</p>
    </div>
    <p>Akinen（あきねん）は、日本のデザイナー。長野県諏訪市出身。東京都在住。</p>

    <h2 class="title title--2nd">経歴</h2>
    <h3 class="title title--3rd">出生・幼少期</h3>
    <p class="mb-20">出生については諸説あるが、天竜川の川上からどんぶらこ、どんぶらこと諏訪湖に流れ着いたのを発見されたと言われる。幼少期は平和に過ごしていたが、節分の鬼のお面が怖すぎて号泣したのがトラウマである。</p>

    <h3 class="title title--3rd">大学時代</h3>
    <p class="mb-20">
      高校卒業後上京し、大学に進学。キャンパスが都内にあるかと思いきや、入学するのは千葉のほうであることに受かってから気づく。ピザとお酒目当てに日夜Web系のイベントに参加していたところ、「面白法人」を自称する会社に出会い内定をもらう。
    </p>

    <h3 class="title title--3rd">現在</h3>
    <p class="mb-20">
      前略オフクロ様、 晴れてエンジニアになったつもりが、いつの間にかデザイナーになっていました。デザイナーって全員丸眼鏡をかけてるイメージがありますが、僕だけはつけないようがんばります。
    </p>

    <h2 class="title title--2nd">エピソード</h2>

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

  &--2nd
    margin-top 32px
    font-size 24px
    font-weight normal

  &--3rd
    margin 0
    font-size 16px
    border none

.mb-20
  margin-bottom 20px

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
