<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-plus">
      <p class="sub-title">
        デジタルプロダクトを通じて、より多くの人々の暮らしを豊かにしたい。<br class="hide-sp">
        その思いから、日々デザイナーとして試行錯誤しています。<br>
        一貫したサービスデザインによって、ユーザーに体験を届けます。
      </p>
      <ul class="cards">
        <li class="card card--top mb-30 c-shadow allowed">
          <div @click="toggleModal">
            <div class="photo photo--top" :style="{backgroundImage: 'url(' + top.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ top.title }}</p>
              <p class="detail__text">{{ top.date }}</p>
              <p class="detail__text">{{ top.description }}</p>
              <div class="top-btn">事例を見る</div>
            </div>
          </div>
          <stockr-modal @close="toggleModal" v-if="isOpen"/>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">主なプロジェクト</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(project, num) in projects" :key="`project-${num}`">
          <nuxt-link :to="project.url">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ project.title }}</p>
              <p class="detail__text">{{ project.date }}</p>
              <p class="detail__text">{{ project.description }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">個人活動</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a :href="activity.url" rel="noopener noreferrer">
            <div class="photo" :style="{backgroundImage: 'url(' + activity.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ activity.title }}</p>
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
  data () {
    return {
      isOpen: false,
      top: {
        title: 'Stockr - 自社事業の立ち上げからグロースまで',
        description: '企画段階からデザイナーとして参加。1→10では、ユーザーリサーチをもとに機能を改善しました。',
        image_url: '/assets/image/stockr/ogp2.png',
        date: '2020-6 - 2021-現在'
      },
      projects: [
        {
          title: '株式会社BuildIt 公式サイト - リードデザイン',
          description: '株式会社ビルディットのコーポレートサイトを全面リニューアルしました。現在、コンテンツ差し替えのためデザインが崩れています。',
          url: '/works/buildit',
          image_url: '/assets/image/index/bldt.jpg',
          date: '2020-5 - 2020-6'
        },
        {
          title: '人財育成支援SaaS「Core」 - UIリニューアル',
          description: 'ホーム画面や管理画面のリデザインを担当しました。',
          url: '/works/core',
          image_url: '/assets/image/index/core.jpg',
          date: '2019-11 - 2020-3'
        },
        {
          title: 'Lobi - 日本最大級のゲームコミュニティ事業',
          description: 'AngularJSからNuxt.jsへのリニューアルや、WebRTCを用いた生配信機能の実装を行いました。',
          url: '/works/lobi',
          image_url: '/assets/image/index/lobi.png',
          date: '2019-1 - 2019-8'
        },
        {
          title: 'Lobi Tournament - 日本有数のe-sports大会開催サービス',
          description: '複数大会への一括エントリー機能や、スイスドロー形式の大会開催機能の実装を行いました。',
          url: '/works/lobitournament',
          image_url: '/assets/image/index/lobi-tournament.png',
          date: '2018-4 - 2018-12'
        }
      ],
      activities: [
        {
          title: 'DRAWER',
          description: '「クリエイターの生産性を向上する」を目的としたプロジェクトです。現在サイト構築中。',
          url: 'https://draw-from.studio.site/',
          image_url: '/assets/image/index/drawer.png',
          date: '2020-2021'
        },
        {
          title: 'STARLIGHT',
          description: '創作サークル「STARLIGHT」さんの企画・コンセプト立案をお手伝いしました。',
          url: 'https://akinen.com/#/works/starlight',
          image_url: '/assets/image/index/starlight.png',
          date: '2021-8'
        }
      ]
    }
  },
  methods: {
    toggleModal () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  position relative
  width calc(50% - 16px)
  min-width 320px
  background-color white
  border-radius 4px

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
  border-radius 4px 4px 0 0

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
    margin 20px
    border-radius 4px

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
