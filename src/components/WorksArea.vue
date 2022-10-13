<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-80">
      <h2 class="c-title c-title--center">NEWS</h2>
      <div class="news c-shadow">
        <p class="news__content">
          <a class="news-link" href="https://dezabiyo.studio.site" target="_blank" rel="noopener noreferrer">2022/09/04&emsp;第2回デザイン読書日和・技術書典13に出展しました。</a><br>
          <a class="news-link" href="https://www.facebook.com/ackiena/posts/pfbid02tJyrAixUZVz4CW4oEzPU7WDGQSa4qCCPsd1Dn6oscam3rKt1bRNCuYWi1G2ARvHKl" target="_blank" rel="noopener noreferrer">2022/07/28&emsp;Figma Japan Community EventのShow and Tellで登壇しました。</a><br>
          <a class="news-link" href="https://www.wantedly.com/companies/tmn-systems/post_articles/377750" target="_blank" rel="noopener noreferrer">2022/03/04&emsp;インタビューがWantedlyに掲載されました。</a><br>
          <a class="news-link" href="https://dezabiyo.studio.site/archive-01" target="_blank" rel="noopener noreferrer">2021/02/27&emsp;デザイン読書日和・技術書典11に出展し、技術書が100部完売しました。</a><br>
          <a class="news-link" href="https://80b8e4c56e481ebe3c218550bd.doorkeeper.jp/events/22708" target="_blank" rel="noopener noreferrer">2015/04/20&emsp;Ruby on Rails勉強会を主催しました。</a>
        </p>
      </div>
    </section>

    <section class="mt-80">
      <h2 class="c-title c-title--center">PICKUP</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(project, num) in projects" :key="`project-${num}`">
          <router-link :to="project.url">
            <div class="photo" :style="{backgroundImage: 'url(' + project.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ project.title }}</p>
              <p class="detail__text">{{ project.date }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="mt-80 mb-100">
      <h2 class="c-title c-title--center">OTHER PROJECTS</h2>
      <ul class="cards">
        <li class="card-other mb-30 c-shadow" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a :href="activity.url" class="other">
            <div class="photo-other" :style="{backgroundImage: 'url(' + activity.image_url + ')' }"></div>
            <div class="detail">
              <p class="detail__title">{{ activity.title }}</p>
              <p class="detail__text">{{ activity.date }}</p>
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
          title: 'New Business Development',
          description: 'I’m working to bring UI/UX design in-house and promote DX at Japanese largest non-life insurance group.',
          url: '/works/Tmnf',
          image_url: require('@/assets/image/digital.jpg'),
          date: '2021.11 - Now / Tokio Marine'
        },
        {
          title: 'Digital Transformation',
          description: 'I’m working to bring UI/UX design in-house and promote DX at Japanese largest non-life insurance group.',
          url: '/works/DX',
          image_url: require('@/assets/image/tmnf.png'),
          date: '2021.11 - Now / Tokio Marine'
        },
        {
          title: 'Stockr - UX/UI Design',
          description: 'I participated as a designer from the planning stage. I have improved the functionality based on user research.',
          url: '/works/Stockr',
          image_url: require('@/assets/image/stockr/ogp2.png'),
          date: '2020.06 - 2021.10 / BuildIt.inc'
        }
      ],
      activities: [
        // {
        //   title: 'Chrome拡張機能「Drawer」',
        //   description: 'Drawer(旧Spott)は、Vue.jsでつくられたChrome拡張機能です。素材を探す煩わしい作業を軽減し、生産性を向上させます。',
        //   url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
        //   image_url: require('@/assets/image/spott.png'),
        //   date: '2020'
        // }
        {
          title: 'Graphics',
          description: 'I designed the DJ logo, CD jackets, etc.',
          url: '/#/works/Graphics',
          image_url: require('@/assets/image/graphics.png'),
          date: '2022 / Personal Work'
        },
        {
          title: 'Company Website - Design Lead',
          description: 'We renewed the corporate website of Buildit Inc. (The design is currently broken due to content replacement.)',
          url: '/#/works/Build%20It',
          image_url: require('@/assets/image/bldt/ogp.jpg'),
          date: '2020 / BuildIt.inc'
        },
        {
          title: 'Core(SaaS) - UI Design',
          description: 'Core is a SaaS that supports human resource development. I redesigned the home and admin screens.',
          url: '/#/works/Core',
          image_url: require('@/assets/image/core/ogp.jpg'),
          date: '2019 / BuildIt.inc'
        },
        {
          title: 'Lobi(Game Community) - Frontend Development',
          description: 'The development of the game community business "Lobi" and the e-sports holding service "Lobi Tournament".',
          url: '/#/works/Lobi',
          image_url: require('@/assets/image/lobi/lobi.png'),
          date: '2018 - 2019 / Kayac.inc'
        }
      ]
      // count: 2,
      // isOpen: false
    }
  }
  // computed: {
  //   activeLists () {
  //     const count = this.isOpen ? 6 : 2
  //     return this.activities.slice(0, count)
  //   }
  // },
  // methods: {
  //   toggle () {
  //     this.isOpen = !this.isOpen
  //   }
  // }
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
  border-radius 20px

  @media (max-width: 768px)
    width 100%

  .detail__title
  .detail__text
    color rgb(36, 40, 42)

  &:hover
    .photo
      width calc(100% - 32px)
      height calc(24vw - 32px)
      margin 16px
      border-radius 16px

      @media (max-width: 768px)
        height calc(50vw - 32px)

      @media (min-width: 1200px)
        height 256px

.photo
  float left
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 20px 20px 0 0
  transition all 0.25s

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px

.card-other
  position relative
  width calc(50% - 16px)
  min-width 320px
  background-color white
  border-radius 20px

  @media (max-width: 768px)
    width 100%

  .detail__title
  .detail__text
    color rgb(36, 40, 42)

.other
  display flex

.photo-other
  flex none
  width 108px
  height 108px
  margin 16px
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 16px

  @media (max-width: 768px)
    display none

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
  border-radius 20px

  &__content
    display block
    margin 0 auto
    width fit-content
    padding 20px
    font-size 16px
    font-weight 400
    line-height 2
    letter-spacing 0.1rem

    @media (max-width: 768px)
      font-size 14px

.news-link
  position relative
  color rgb(36, 40, 42)

  &:visited
  &:active
    color inherit

  &:hover
    text-decoration none

  &::before
    content ""
    display block
    position absolute
    inset 20px 0 0 0
    height 1px
    background #333
    transform scaleX(0)
    transform-origin bottom right
    transition transform .25s ease

  &:hover::before
    transform scaleX(1)
    transform-origin bottom left

.show-more
  display block
  width 80%
  margin -8px auto 0
  padding 10px 0
  text-align center
  border-radius 100px
  border 1px solid rgba(0,0,0,0.2)
  font-size 16px
  font-weight 600
  color rgba(36, 40, 42, 0.8)
  background-color white
  cursor pointer
  box-shadow 0px 1px 4px 0px rgba(0,0,0,0.08)
  transition all 0.2s

  &:hover
    width 100%
</style>
