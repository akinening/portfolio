<template>
  <section class="mt-80">
    <h2 class="c-title">Experience</h2>
    <ul class="c-entries">
      <li>
        <h3 class="c-entry-title">
          <span itemprop="affiliation">
            <a href="https://bldt.jp/">Build It Inc.</a>
          </span>
        </h3>
        <p class="font-13" itemprop="title">
          UI/UXデザイナー
        </p>
        <p class="c-line" :style="{backgroundImage: 'url(' + bg_img + ')'}">
          <span>2019-11 - </span>
        </p>
      </li>
      <li>
        <h3 class="c-entry-title">
          <span>
            <a href="https://www.kayac.com/">面白法人カヤック</a>
          </span>
        </h3>
        <p class="font-13">
          フロントエンドエンジニア
        </p>
        <p class="c-line" :style="{backgroundImage: 'url(' + bg_img + ')'}">
          <span>2018-04 - 2019-08</span>
        </p>
      </li>
      <li>
        <h3 class="c-entry-title">
          <span>
            <a href="">東京電機大学</a>
          </span>
        </h3>
        <p class="font-13">情報工学 / HCD</p>
        <p class="c-line" :style="{backgroundImage: 'url(' + bg_img + ')'}">
          <span>2018-03</span>
        </p>

        <div class="lab">
          <h3 class="lab__title">
            <span><a target="_blank" rel="noreferrer noreferrer" href="http://www.ics.sie.dendai.ac.jp/">情報通信サービス研究室(大山研)</a></span>
          </h3>
          <p class="lab__date">2016-4 - 2018-3</p>
          <p class="c-description">主にUCDやVUI (Voice User Interface)に関する研究を行いました。<br><br>▼「ユーザの操作を補助する音声ブラウザの開発」<br>Webスクレイピング，音声認識等を用いて、音声だけでWebブラウザの操作を可能とするアプリを開発。UIの提案を行いました。<br><br>▼「スマホVRにおける対話型エージェントに関する研究」<br>Watsonを用いて、空間内のエージェントと会話できる、スマホVR向けアプリを開発。視点を用いることで、複数の対話型エージェントとの会話を実現しました。</p>
        </div>
      </li>
      <li>
        <h3 class="c-entry-title">
          <span>
            <a href="https://w.wiki/ibi">諏訪清陵高等学校</a>
          </span>
        </h3>
        <p class="font-13">SSHコース</p>
        <p class="c-description">「VBAを用いた渋滞シミュレーション」が 第56回長野県学生科学賞を受賞</p>
        <p class="c-line" :style="{backgroundImage: 'url(' + bg_img + ')'}">
          <span>2013-03</span>
        </p>

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
      bg_img: require('@/assets/line.gif')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.lab
  position relative
  padding 20px 28px
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
      padding-right 20px
      font-size 20px
      font-weight 500
      background-color white

      & > a
        color #45494B

  &__date
    color #909294
</style>
