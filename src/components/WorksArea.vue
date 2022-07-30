<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-plus">
      <p class="sub-title">
        <!-- 「より多くの人々の暮らしを豊かにしたい」<br class="hide-sp">
        その思いから、日々デジタルプロダクトと向き合っています。<br>
        事業戦略・デザイン・エンジニアリングの３つの視点から一貫して携わることで、プロダクトを成功に導きます。 -->
        "Enrich the lives of more people."<br class="hide-sp">
        With this in mind, I face digital products on a daily basis.<br>
        I'll lead products to success by consistently engaging from the three perspectives of business strategy, design, and engineering.
      </p>
    </section>

    <section class="mt-80">
      <h2 class="c-title c-title--center">NEWS</h2>
      <div class="news c-shadow">
        <p class="news__content">
          <a href="https://figmajapancommunityevent.splashthat.com" target="_blank" rel="noopener noreferrer">2022/07/28&emsp;Figma Japan Community EventのShow and Tellで登壇しました</a><br>
          <a href="https://techbookfest.org/product/5108267816583168" target="_blank" rel="noopener noreferrer">2021/07/10&emsp;技術書典11で技術書を頒布しました</a><br>
          <a href="https://dezabiyo.studio.site/archive-01" target="_blank" rel="noopener noreferrer">2021/02/27&emsp;デザイン読書日和で技術書を頒布しました</a>
        </p>
      </div>
    </section>

    <section class="mt-80">
      <h2 class="c-title c-title--center">RECENT PROJECTS</h2>
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

    <section class="mt-80 mb-100">
      <h2 class="c-title c-title--center">OTHERS</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(activity, num) in activeLists" :key="`activity-${num}`">
          <a :href="activity.url">
            <div class="photo" :style="{backgroundImage: 'url(' + activity.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ activity.title }}</p>
              <p class="detail__text">{{ activity.date }}</p>
              <p class="detail__text">{{ activity.description }}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="show-more c-shadow" @click="toggle" v-if="!isOpen">READ MORE</div>
      <div class="show-more c-shadow" @click="toggle" v-else>CLOSE</div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'WorksArea',
  data () {
    return {
      projects: [
        // {
        //   title: '大手損保グループ - DX推進',
        //   description: 'UI/UXデザインの内製化やDX推進に取り組んでいます。コンプライアンスの観点から詳細は非公開です。',
        //   url: '/works/Tmnf',
        //   image_url: require('@/assets/image/tmnf.png'),
        //   date: '2021.11 - 現在'
        // },
        // {
        //   title: 'Stockr - 新規自社事業のリードデザイン',
        //   description: '企画段階からデザイナーとして参加。1→10では、ユーザーリサーチをもとに機能を改善しました。',
        //   url: '/works/Stockr',
        //   image_url: require('@/assets/image/stockr/ogp2.png'),
        //   date: '2020.06 - 2021.10'
        // },
        // {
        //   title: '株式会社BuildIt 公式サイト - リードデザイン',
        //   description: '株式会社ビルディットのコーポレートサイトを全面リニューアルしました。現在、コンテンツ差し替えのためデザインが崩れています。',
        //   url: '/works/Build%20It',
        //   image_url: require('@/assets/image/bldt/ogp.jpg'),
        //   date: '2020'
        // },
        // {
        //   title: '人財育成支援SaaS「Core」 - UIリニューアル',
        //   description: 'ホーム画面や管理画面のリデザインを担当しました。',
        //   url: '/works/Core',
        //   image_url: require('@/assets/image/core/ogp.jpg'),
        //   date: '2019'
        // },
        // {
        //   title: 'Lobi - ゲームコミュニティ事業',
        //   description: 'フロントエンドエンジニアとして、ゲームコミュニティ事業「Lobi」やeスポーツ開催サービス「Lobi Tournament」の開発に携わりました。',
        //   url: '/works/Lobi',
        //   image_url: require('@/assets/image/lobi/lobi.png'),
        //   date: '2018 - 2019'
        // }
        {
          title: 'Tokio Marine - Digital Transformation',
          description: 'I’m working to bring UI/UX design in-house and promote DX at Japanese largest non-life insurance group.',
          url: '/works/Tmnf',
          image_url: require('@/assets/image/tmnf.png'),
          date: '2021.11 - Now'
        },
        {
          title: 'Stockr(Native App) - UX/UI Design',
          description: 'I participated as a designer from the planning stage. I have improved the functionality based on user research.',
          url: '/works/Stockr',
          image_url: require('@/assets/image/stockr/ogp2.png'),
          date: '2020.06 - 2021.10'
        }
      ],
      activities: [
        // {
        //   title: 'Figmaのムック本',
        //   description: '「第2回デザイン読書日和」に出展予定。FigmaをUIデザイン以外に使ってみようという話をします。',
        //   url: 'https://dezabiyo.studio.site',
        //   image_url: require('@/assets/image/dezabiyo2.png'),
        //   date: '2022.09'
        // },
        // {
        //   title: '技術書を執筆＆頒布',
        //   description: '「デザイン読書日和」および「技術書典11」に出展し、約70部を頒布しました。',
        //   url: 'https://techbookfest.org/product/5108267816583168',
        //   image_url: require('@/assets/image/dezabiyo.png'),
        //   date: '2021'
        // },
        // {
        //   title: 'Figmaたん',
        //   description: 'Figmaの非公式キャラクター「Figmaたん」です。',
        //   url: 'https://www.figma.com/community/file/1063752787187389952',
        //   image_url: require('@/assets/image/figma.png'),
        //   date: '2022'
        // },
        // {
        //   title: 'Chrome拡張機能「Drawer」',
        //   description: 'Drawer(旧Spott)は、Vue.jsでつくられたChrome拡張機能です。素材を探す煩わしい作業を軽減し、生産性を向上させます。',
        //   url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
        //   image_url: require('@/assets/image/spott.png'),
        //   date: '2020'
        // }
        {
          title: 'Company Website - Design Lead',
          description: 'We renewed the corporate website of Buildit Inc. (The design is currently broken due to content replacement.)',
          url: '/#/works/Build%20It',
          image_url: require('@/assets/image/bldt/ogp.jpg'),
          date: '2020'
        },
        {
          title: 'Core(SaaS) - UI Design',
          description: 'Core is a SaaS that supports human resource development. I redesigned the home and admin screens.',
          url: '/#/works/Core',
          image_url: require('@/assets/image/core/ogp.jpg'),
          date: '2019'
        },
        {
          title: 'Lobi(Game Community) - Frontend Development',
          description: 'As a front-end engineer, I was involved in the development of the game community business "Lobi" and the e-sports holding service "Lobi Tournament".',
          url: '/#/works/Lobi',
          image_url: require('@/assets/image/lobi/lobi.png'),
          date: '2018 - 2019'
        },
        {
          title: '#times - Personal Tech Blog',
          description: 'A blog about technology, design and product management.',
          url: 'https://times.akinen.com',
          image_url: require('@/assets/image/times.png'),
          date: '2022'
        },
        {
          title: 'STARLIGHT - Personal Work',
          description: 'STARLIGHT is a creative circle based on the concept of a coffee shop.',
          url: '/#/starlight',
          image_url: require('@/assets/image/starlight_captcha.png'),
          date: '2014 - Now'
        }
      ],
      count: 2,
      isOpen: false
    }
  },
  computed: {
    activeLists () {
      const count = this.isOpen ? 6 : 2
      return this.activities.slice(0, count)
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

.news
  width 100%
  margin 0 auto
  background-color white
  border-radius 4px

  &__content
    display block
    margin 0 auto
    width fit-content
    padding 20px
    font-size 16px
    font-weight 400
    line-height 2
    letter-spacing 0.1rem

    & > a:link
      color rgb(36, 40, 42)

      &:hover
        text-decoration underline

    @media (max-width: 768px)
      font-size 14px

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
