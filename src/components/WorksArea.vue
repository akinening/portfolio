<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-plus">
      <p class="sub-title">
        デジタルプロダクトを通じて、より多くの人々の暮らしを豊かにしたい。<br class="hide-sp">
        その思いから、日々デザイナーとして試行錯誤しています。<br>
        一貫したサービスデザインによって、ユーザーに体験を届けます。
      </p>
    </section>

    <section class="mt-80">
      <h2 class="c-title c-title--center">PROJECTS</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(project, num) in projects" :key="`project-${num}`">
          <router-link :to="project.url">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ project.title }}</p>
              <p class="detail__text">{{ project.date }}</p>
              <p class="detail__text">{{ project.description }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title c-title--center">ACTIVITIES</h2>
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
  name: 'WorksArea',
  data () {
    return {
      projects: [
        {
          title: '大手損保グループ - DX推進',
          description: 'UI/UXデザインの内製化やDX推進に取り組んでいます。コンプライアンスの観点から実績は非公開です。',
          url: '/',
          image_url: require('@/assets/image/tmnf.png'),
          date: '2021.11 - 現在'
        },
        {
          title: 'Stockr - 新規自社事業のリードデザイン',
          description: '企画段階からデザイナーとして参加。1→10では、ユーザーリサーチをもとに機能を改善しました。',
          url: '/works/Stockr',
          image_url: require('@/assets/image/stockr/ogp2.png'),
          date: '2020.06 - 2021.10'
        },
        {
          title: '株式会社BuildIt 公式サイト - リードデザイン',
          description: '株式会社ビルディットのコーポレートサイトを全面リニューアルしました。現在、コンテンツ差し替えのためデザインが崩れています。',
          url: '/works/Build%20It',
          image_url: require('@/assets/image/bldt/ogp.jpg'),
          date: '2020.05 - 2020.06'
        },
        {
          title: '人財育成支援SaaS「Core」 - UIリニューアル',
          description: 'ホーム画面や管理画面のリデザインを担当しました。',
          url: '/works/Core',
          image_url: require('@/assets/image/core/ogp.jpg'),
          date: '2019.11 - 2020.03'
        },
        {
          title: 'Lobi - 日本最大級のゲームコミュニティ事業',
          description: 'AngularJSからNuxt.jsへのリニューアルや、WebRTCを用いた生配信機能の実装を行いました。',
          url: '/works/Lobi',
          image_url: require('@/assets/image/lobi/lobi.png'),
          date: '2019'
        },
        {
          title: 'Lobi Tournament - 日本有数のe-sports大会開催サービス',
          description: '複数大会への一括エントリー機能や、スイスドロー形式の大会開催機能の実装を行いました。',
          url: '/works/Lobi%20Tournament',
          image_url: require('@/assets/image/lobi/lobi-tournament.png'),
          date: '2018'
        }
      ],
      activities: [
        {
          title: 'DRAWER',
          description: '「クリエイターの生産性を向上する」を目的としたプロジェクトです。現在サイト構築中。',
          url: 'https://draw-from.studio.site/',
          image_url: require('@/assets/image/drawer.png'),
          date: '2020 - 2021'
        },
        {
          title: 'STARLIGHT',
          description: 'サークル「STARLIGHT」として、一次創作イラストを中心に活動しています。',
          url: 'https://starlight.akinen.com/',
          image_url: require('@/assets/image/starlight.png'),
          date: '2014 - 2022'
        }
      ]
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
