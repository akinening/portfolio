<template>
  <section>
    <h2 class="c-title mt-80">Experience</h2>
    <ul>
      <li class="card c-shadow">
        <h3 class="c-entry-title">
          <span itemprop="affiliation">
            <a href="https://bldt.jp/">株式会社Build It</a>
          </span>
        </h3>
        <p class="font-13" itemprop="title">
          UI/UXデザイナー
        </p>
        <span class="c-time">2019 - 現在</span>
        <p class="c-description">
          新規自社事業「Stockr」の立ち上げからグロースまでを一貫してデザイン。<br>
          教育系SaaS「Core」の情報設計・UIデザイン。<br>
          その他、複数の受託開発にデザイナーとして参加。
        </p>
      </li>

      <li class="card c-shadow">
        <h3 class="c-entry-title">
          <span>
            <a href="https://www.kayac.com/">面白法人カヤック</a>
          </span>
        </h3>
        <p class="font-13">
          フロントエンドエンジニア
        </p>
        <span class="c-time">2018</span>
        <p class="c-description">
          ゲームコミュニティ事業「Lobi」および「Lobi Tournament」の開発。<br>
          AngularからNuxt.jsへの全面リニューアルや、生配信機能など。<br>
          ユーザーの声を聞くなかで体験設計に興味を持ち、デザイナーへの転向を決意。
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ExpArea',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.card
  position relative
  margin-bottom 20px
  padding 20px
  background-color white
  border-radius 8px

.c-time
  position absolute
  top 20px
  right 20px
  text-align right
</style>
