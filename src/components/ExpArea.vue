<template>
  <section>
    <h2 class="c-title mt-80">Work Experience</h2>
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
        <span class="c-time">2019-11 - </span>

        <div class="lab">
          <h3 class="lab__title">
            <span>複数の受託開発、新規自社事業の立ち上げに参加</span>
          </h3>
          <p class="c-description">
            教育系SaaS「Core」のUIリニューアルや、士業の業務管理システムの画面設計などの受託開発にUI/UXデザイナーとして参加。<br>
            また新規自社事業「Stockr」では、プロトタイプ作成から公開、グロースに至るまで、デザインを担当しています。
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
        <span class="c-time">2018-04 - 2019-08</span>

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
    </ul>

    <h2 class="c-title mt-80">Education</h2>
    <ul class="c-entries">
      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a>東京電機大学</a>
          </span>
        </h3>
        <p class="font-13">情報工学 / HCD</p>
        <span class="c-time">2018-03</span>

        <div class="lab">
          <h3 class="lab__title">
            <span>
              <a>情報通信サービス研究室(大山研)</a>
            </span>
          </h3>
          <p class="lab__date">2016-4 - 2018-3</p>
          <p class="c-description">主にUCDやVUI (Voice User Interface)に関する研究を行いました。<br><br>▼「ユーザの操作を補助する音声ブラウザの開発」<br>Webスクレイピング，音声認識等を用いて、音声だけでWebブラウザの操作を可能とするアプリを開発。UIの提案を行いました。<br><br>▼「スマホVRにおける対話型エージェントに関する研究」<br>Watsonを用いて、空間内のエージェントと会話できる、スマホVR向けアプリを開発。視点を用いることで、複数の対話型エージェントとの会話を実現しました。</p>
        </div>
      </li>
      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a href="https://w.wiki/ibi">諏訪清陵高等学校</a>
          </span>
        </h3>
        <p class="font-13">SSHコース</p>
        <p class="c-description">「VBAを用いた渋滞シミュレーション」が 第56回長野県学生科学賞を受賞</p>
        <span class="c-time">2013-03</span>

        <div class="lab">
          <h3 class="lab__title">
            <span>空手道初段(黒帯)</span>
          </h3>
          <p class="lab__date">2001-4 - 2018-3</p>
          <p class="c-description">
            2001年から空手を学び始め、大学では週三回、品川と新宿で小学生～一般の約３０名の稽古生に空手の指導をしていました。<br>
            また高校時代の１年間、空手の道場で住み込み生活を送り、礼節や武道家としての精神を学びました。
          </p>
        </div>
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
    background-color #f0f3f7
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
</style>
