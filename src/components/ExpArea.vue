<template>
  <section>
    <h2 class="c-title mt-80">Experience</h2>
    <ul class="c-entries">
      <li class="card">
        <h3 class="c-entry-title">
          <span itemprop="affiliation">
            <a href="https://bldt.jp/">株式会社Build It</a>
          </span>
        </h3>
        <p class="font-13" itemprop="title">
          UI/UXデザイナー
        </p>
        <span class="c-time">2019.11 - 2021.現在</span>

        <div class="lab">
          <h3 class="lab__title">
            <span>教育・育成事業のDX推進。新規自社事業の立ち上げに参加</span>
          </h3>
          <p class="c-description">
            教育系SaaS「Core」のUIリニューアルにUI/UXデザイナーとして参加。<br>
            新規自社事業「Stockr」では、プロトタイプ作成から公開、グロースに至るまで、デザインを担当しています。<br>
            その他、士業の業務管理システム(ワイヤー作成、UIデザイン)など、複数の受託開発。
          </p>
        </div>
      </li>
      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a href="https://www.kayac.com/">面白法人カヤック</a>
          </span>
        </h3>
        <p class="font-13">
          フロントエンドエンジニア
        </p>
        <span class="c-time">2018.04 - 2019.08</span>

        <div class="lab">
          <h3 class="lab__title">
            <span>ゲームコミュニティ事業「Lobi」および「Lobi Tournament」</span>
          </h3>
          <p class="c-description">
            主要事業の１つである「Lobi」では、Nuxt.jsを用いてWebのリニューアルやリファクタリング、新規機能開発を行いました。<br>
            「Lobi Tournament」では、同時接続1000人を超える、比較的大規模なサービスの開発経験が得られました。
          </p>
        </div>
      </li>
      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a>東京電機大学</a>
          </span>
        </h3>
        <p class="font-13">情報工学 / HCD</p>
        <p class="c-description">VUI (Voice User Interface)に関心があり、「音声で操作できるブラウザ」や「Watsonを用いたVR上での対話UI」について研究を行いました。</p>
        <span class="c-time">- 2018</span>
      </li>
      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a href="https://w.wiki/ibi">諏訪清陵高等学校</a>
          </span>
        </h3>
        <p class="font-13">SSHコース</p>
        <p class="c-description">「VBAを用いた渋滞シミュレーション」が 第56回長野県学生科学賞を受賞</p>
        <span class="c-time">- 2013</span>
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
  padding 20px
  background-color white
  border-radius 8px

.lab
  position relative
  padding 20px 20px 20px 28px
  margin-top 20px

  &:before
    content ''
    display block
    position absolute
    top 0
    left 0
    width 8px
    height 100%
    background-color #f3f0ee
    border-radius 4px

  &__title
    z-index 2
    position relative

    & > span
      display inline-block
      font-size 20px
      font-weight 500

      & > a
        color #45494B

  &__date
    color #909294

.c-time
  position absolute
  top 20px
  right 20px
  text-align right
</style>
