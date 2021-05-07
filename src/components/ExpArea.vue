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
        <p class="c-description">教育・育成事業のDX推進。新規自社事業の立ち上げに参加</p>
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
        <p class="c-description">ゲームコミュニティ事業「Lobi」および「Lobi Tournament」の開発に参加。ユーザーの声を聞くなかで体験設計に興味を持ち、デザイナーへの転向を決意。</p>
      </li>

      <li class="card">
        <h3 class="c-entry-title">
          <span>
            <a>東京電機大学</a>
          </span>
        </h3>
        <p class="font-13">情報工学 / HCD</p>
        <p class="c-description">VUI (Voice User Interface)に関心を持ち、「音声で操作できるブラウザ」や「Watsonを用いたVR上での対話UI」について研究</p>
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

.c-time
  position absolute
  top 20px
  right 20px
  text-align right
</style>
