<template>
  <article class="works" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-80">
      <h2 class="c-title">最近の取り組み</h2>
      <ul class="cards">
        <li class="card card--top mb-30">
          <a :href="top.url" target="_blank" rel="noreferrer noreferrer">
            <div class="photo photo--top" :style="{backgroundImage: 'url(' + top.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ top.title }}</h3>
              <p class="detail__text">{{ top.date }}</p>
              <p class="detail__text">{{ top.description }}</p>
              <div class="top-btn">事例を見る</div>
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">プロジェクト</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(project, num) in projects" :key="`project-${num}`">
          <a :href="project.url" target="_blank" rel="noreferrer noreferrer">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ project.title }}</h3>
              <p class="detail__text">{{ project.date }}</p>
              <p class="detail__text">{{ project.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">個人活動</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a :href="activity.url" target="_blank" rel="noreferrer noreferrer">
            <div class="photo" :style="{backgroundImage: 'url(' + activity.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ activity.title }}</h3>
              <p class="detail__text">{{ activity.date }}</p>
              <p class="detail__text">{{ activity.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'WorksArea',
  data () {
    return {
      top: {
        title: 'Stockr - 自社事業の立ち上げからグロースまでデザイン全般を担当',
        description: '企画段階からデザイナーとして参加。1→10では、ユーザーインタビューを実施して機能を改善。',
        url: 'https://inside.bldt.jp/entry/2020/11/26/104143',
        image_url: require('@/assets/image/stockr.png'),
        date: '2020-6 - 現在'
      },
      projects: [
        {
          title: 'Build It 公式サイト - リードデザイン',
          description: '株式会社ビルディットのコーポレートサイトを全面リニューアルしました。',
          url: 'https://inside.bldt.jp/entry/2020/08/04/080823',
          image_url: require('@/assets/image/bldt.png'),
          date: '2020-5 - 2020-6'
        },
        {
          title: 'Core - UIリニューアル',
          description: 'Coreは企業の人財育成をフォローし、働く人の経験学習を促進するSaaSです。主にホーム画面や管理画面のリデザインを担当しました。',
          url: 'https://akinening.studio.site/posts/core',
          image_url: require('@/assets/image/core.png'),
          date: '2019-11 - 2020-3'
        },
        {
          title: 'Lobi - 日本最大級のゲームコミュニティ',
          description: 'AngularJSからNuxt.jsへのリニューアルや、WebRTCを用いた生配信機能の実装を行いました。そのほか、ユニットテスト(Jest)やA/Bテストなど。',
          url: require('@/assets/image/doc-lobi.jpg'),
          image_url: require('@/assets/image/lobi.png'),
          date: '2019-1 - 2019-8'
        },
        {
          title: 'Lobi Tournament - 日本有数のe-sports大会開催サービス',
          description: '主に複数大会への一括エントリー機能や、スイスドロー形式の大会開催機能の実装を行いました。',
          url: require('@/assets/image/doc-lobi-tournament.jpg'),
          image_url: require('@/assets/image/lobi-tournament.png'),
          date: '2018-4 - 2018-12'
        }
      ],
      activities: [
        {
          title: '技術書を執筆＆頒布',
          description: 'オンライン即売会「デザイン読書日和」に出展し、本を執筆・頒布しました。',
          url: 'https://booth.pm/ja/items/2470035',
          image_url: require('@/assets/image/dezabiyo.jpg'),
          date: '2021-2'
        },
        {
          title: 'Chrome拡張機能を個人開発',
          description: '「Spott」というChrome拡張機能をつくり、公開しました。日々のデザイン業務で便利な「おすすめスポット」をまとめています。レスポンシブ未対応。',
          url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
          image_url: require('@/assets/image/spott.png'),
          date: '2020-9'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.works
  margin 0 80px 40px
  padding-bottom 60px

  @media (max-width: 768px)
    margin 0 20px 40px
    padding-top 0

  @media (min-width: 1200px)
    margin 0 auto 40px
    width 960px

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  position relative
  width calc(50% - 16px)
  min-width 320px
  background-color white
  border-radius 8px

  .detail__title
  .detail__text
    color rgb(36, 40, 42)

  &:hover
    .detail__title
    .detail__text
      opacity 0.6

  @media (max-width: 768px)
    width 100%

.photo
  float left
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 8px 8px 0 0

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px

.detail
  padding 20px
  overflow hidden

  &__title
    line-height 1.6
    margin 0 0 10px
    font-size 20px
    font-weight 500

  &__text
    line-height 1.8
    overflow hidden
    text-overflow ellipsis

.card--top
  @media (min-width: 769px)
    width 100%

    &:hover
      .top-btn
        opacity 0.6

.photo--top
  @media (min-width: 769px)
    float right
    width calc(50% - 20px)
    height calc(100% - 40px)
    margin 20px
    border-radius 8px

.top-btn
  display block
  margin-top 48px
  padding 8px 32px
  width fit-content
  border 1px solid rgb(36, 40, 42)
  border-radius 4px
  font-size 13px
  font-weight 700
  color rgb(36, 40, 42)

  @media screen and (max-width: 768px)
    display none
</style>
