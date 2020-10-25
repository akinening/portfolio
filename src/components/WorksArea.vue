<template>
  <article class="works" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-80">
      <h2 class="c-title">プロジェクト</h2>
      <ul class="cards">
        <li class="card mb-25" v-for="(project, num) in projects" :key="`project-${num}`">
          <a :href="project.url" target="_blank" rel="noreferrer noreferrer">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ project.title }}</h3>
              <p class="detail__text">{{ project.date }}</p>
              <p class="detail__text">{{project.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">個人活動</h2>
      <ul class="cards">
        <li class="card mb-25" v-for="(activity, num) in activities" :key="`activity-${num}`">
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
      projects: [
        {
          title: 'Stockr - 気づきの習慣化をサポートするアプリ',
          description: '自社事業のアプリデザイン全般を担当しています。そのほか、ブランドデザイン・LPデザイン(STUDIOで作成)など。',
          url: 'https://www.notion.so/akinen/Stockr-94d91c23ed0741498af4635ba40b0d7a',
          image_url: require('@/assets/image/stockr.png'),
          date: '2020-6 - 2020-10'
        },
        {
          title: 'Build It 公式サイト',
          description: '株式会社ビルディットのコーポレートサイトを全面リニューアルしました。',
          url: 'https://inside.bldt.jp/entry/2020/08/04/080823',
          image_url: require('@/assets/image/bldt.png'),
          date: '2020-5 - 2020-6'
        },
        {
          title: 'Core - Learning Enhancement System',
          description: 'Coreは企業の人財育成をフォローし、働く人の経験学習を促進するSaaSです。',
          url: 'https://www.notion.so/akinen/Core-f73918f86f324ccfb33be0835dabb5bf',
          image_url: require('@/assets/image/core.png'),
          date: '2019-11 - 2020-3'
        },
        {
          title: 'Lobi - 日本最大級のゲームコミュニティ',
          description: 'AngularJSからNuxt.jsへのリニューアルや、WebRTCを用いた生配信機能の実装を行いました。そのほか、ユニットテスト(Jest)やA/Bテストなど。「Lobi」がスマホ画面をシェア配信できる配信機能(β版)を本日リリース！ https://www.kayac.com/news/2019/04/lobi_haishin',
          url: require('@/assets/image/doc-lobi.jpg'),
          image_url: require('@/assets/image/lobi.png'),
          date: '2019-1 - 2019-8'
        },
        {
          title: 'Lobi Tournament - 日本有数のe-sports大会開催サービス',
          description: '主に複数大会への一括エントリー機能や、スイスドロー形式の大会開催機能の実装を行いました。勇者杯 https://vs.lobi.co/event/An4dY スイスドローに対応 https://www.kayac.com/news/2018/08/lobitournament',
          url: require('@/assets/image/doc-lobi-tournament.jpg'),
          image_url: require('@/assets/image/lobi-tournament.png'),
          date: '2018-4 - 2018-12'
        }
      ],
      activities: [
        {
          title: 'デザイン読書日和',
          description: '2021年2月に開催される「デザイン読書日和」に出展予定。',
          url: 'https://dezabiyo.studio.site/',
          image_url: require('@/assets/image/dezabiyo.jpg'),
          date: '2021-2'
        },
        {
          title: 'Spott - UIデザイナーの作業効率化ツール',
          description: '日々のデザイン業務で便利な「おすすめスポット」をまとめています。主に自分用に並び順や見せ方をカスタマイズしています。レスポンシブ未対応。',
          url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
          image_url: require('@/assets/image/spott.png'),
          date: '2020-9'
        },
        {
          title: 'ゼロから始めるRails講座',
          description: '株式会社Dive into Codeの野呂さんのご提案で、大学にてRuby on Railsの勉強会を開催しました。当日は約４０名の学生が集まり反応も好評でした。',
          url: 'https://diveintocode.doorkeeper.jp/events/52301',
          image_url: require('@/assets/image/ruby.png'),
          date: '2016-10'
        },
        {
          title: '創作活動',
          description: '学生時代、漫研の代表として組織を統率する一方で、個人でも創作活動を開始。イラスト本の頒布やポスター制作、展示会への出展など、積極的に活動していました。',
          url: 'https://example.com',
          image_url: require('@/assets/image/illust.png'),
          date: '2014-4 - 2018-12'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.mb-25
  display inline-block

.mb-25:not(:last-child)
  margin-bottom 25px

.works
  margin 0 80px 40px
  padding-top 60px

  @media (max-width: 768px)
    margin 0 20px 40px
    padding-top 0

  @media (min-width: 1200px)
    margin 0 auto 40px
    width 1040px

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  width calc(50% - 16px)
  min-width 320px

  @media (max-width: 768px)
    width 100%

.photo
  float left
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 8px
  transition opacity 0.2s

  &:hover
    opacity 0.86

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px

.detail
  width 100%
  height 200px
  overflow hidden

  &__title
    color rgb(36, 40, 42)
    margin 20px 0 10px
    font-size 20px
    font-weight 500

  &__text
    color rgb(36, 40, 42)
    line-height 1.8
    overflow hidden
    text-overflow ellipsis
</style>
