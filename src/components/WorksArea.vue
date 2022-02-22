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
        <li class="card mb-30 c-shadow" v-for="(project, num) in activeLists" :key="`project-${num}`">
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
      <div class="show-more c-shadow" @click="toggle" v-if="!isOpen">もっと見る</div>
      <div class="show-more c-shadow" @click="toggle" v-else>閉じる</div>
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

    <section class="mt-80">
      <h2 class="c-title c-title--center">STORE</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(store, num) in stores" :key="`store-${num}`">
          <a :href="store.url" rel="noopener noreferrer">
            <div class="photo" :style="{backgroundImage: 'url(' + store.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ store.title }}</p>
              <p class="detail__text">{{ store.date }}</p>
              <p class="detail__text">{{ store.description }}</p>
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
          title: 'Figmaたん',
          description: 'Figmaの非公式キャラクター「Figmaたん」です。Figmaに関する日本語記事を紹介しています。',
          url: 'https://www.figma.com/community/file/1063752787187389952',
          image_url: require('@/assets/image/figma.png'),
          date: '2022'
        },
        {
          title: 'STARLIGHT',
          description: 'サークル「STARLIGHT」として、一次創作イラストを中心に活動しています。',
          url: 'https://starlight.akinen.com/',
          image_url: require('@/assets/image/starlight.png'),
          date: '2014 - 2022'
        }
      ],
      stores: [
        {
          title: 'Chrome拡張機能「Drawer」',
          description: 'Drawer(旧Spott)は、Vue.jsでつくられたChrome拡張機能です。素材を探す煩わしい作業を軽減し、生産性を向上させます。',
          url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
          image_url: require('@/assets/image/spott.png'),
          date: '2020'
        },
        {
          title: '技術書を執筆＆頒布',
          description: '「デザイン読書日和」および「技術書典11」に出展し、約70部を頒布しました。',
          url: 'https://techbookfest.org/product/5108267816583168',
          image_url: require('@/assets/image/dezabiyo.png'),
          date: '2021'
        }
      ],
      count: 2,
      isOpen: false
    }
  },
  computed: {
    activeLists () {
      const count = this.isOpen ? 6 : 2
      return this.projects.slice(0, count)
    }
  },
  methods: {
    toggle () {
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

.show-more
  display block
  width 100%
  margin-top -8px
  padding 12px 0
  text-align center
  border-radius 4px
  border 1px solid rgba(0,0,0,0.2)
  font-size 13px
  font-weight 700
  color rgb(36, 40, 42)
  background-color white
  cursor pointer
  box-shadow 0px 1px 4px 0px rgba(0,0,0,0.08)
  transition all 0.2s

  &:hover
    box-shadow none
    color rgba(36, 40, 42, 0.4)
</style>
