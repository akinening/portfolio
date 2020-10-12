<template>
<div>
  <header-area />
  <hero-area />

  <article itemscope="" itemtype="http://schema.org/Person">
  <div class="contents">
    <section class="mt-60">
      <h2 class="c-title">プロジェクト</h2>
      <ul>
        <li class="mb-25" v-for="(project, num) in projects" :key="`project-${num}`">
          <a class="works" :href="project.url" target="_blank">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ project.title }}</h3>
              <p class="detail__text">{{ project.date }}</p>
              <p class="detail__text">
                <a target="_blank" :href="project.url" rel="ugc">{{ project.url }}</a>
              </p>
              <p class="detail__text">{{project.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-60">
      <h2 class="c-title">個人活動</h2>
      <ul>
        <li class="mb-25" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a class="works" :href="activity.url" target="_blank">
            <div class="photo" :style="{backgroundImage: 'url(' + activity.image_url + ')' }"></div>
            <div class="detail">
              <h3 class="detail__title">{{ activity.title }}</h3>
              <p class="detail__text">{{ activity.date }}</p>
              <p class="detail__text">
                <a target="_blank" :href="activity.url" rel="ugc">{{ activity.url }}</a>
              </p>
              <p class="detail__text">{{ activity.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
  </article>

  <footer-area />
  <social-link />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import HeroArea from '@/components/HeroArea'
import FooterArea from '@/components/FooterArea'
import SocialLink from '@/components/SocialLink'

export default {
  name: 'Index',
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
          url: '',
          image_url: require('@/assets/image/dezabiyo.png'),
          date: '2021-2'
        },
        {
          title: 'Spott - UIデザイナーの作業効率化ツール',
          description: '日々のデザイン業務で便利な「おすすめスポット」をまとめています。レビュー順ではなく、主に自分用に並び順や見せ方をカスタマイズしています。レスポンシブ未対応。',
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
  },
  components: {
    HeaderArea,
    HeroArea,
    FooterArea,
    SocialLink
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.works
  display flex
  flex-direction row

  @media (max-width: 768px)
    flex-direction column

.photo
  float left
  width 340px
  height 200px
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 8px

.detail
  width 280px
  height 200px
  padding-left 20px
  float left
  overflow hidden

  &__title
    color rgb(36, 40, 42)
    margin 10px 0
    font-size 20px
    font-weight 500

  &__text
    color #9DA0A4
    overflow hidden
    text-overflow ellipsis
</style>
