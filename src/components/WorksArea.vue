<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <section class="mt-80">
      <h2 class="c-title">NEWS</h2>
      <div class="news">
        <p class="news__content">
          <!-- <a class="news-link" href="" target="_blank" rel="noopener noreferrer">2023/02/01&emsp;京都大学の「京都府観光経営セミナー」においてプロダクトデザインについて講義を行いました。</a> -->
          <a class="news-link" href="https://dezabiyo.studio.site" target="_blank" rel="noopener noreferrer">2022/09/04&emsp;第2回デザイン読書日和・技術書典13に出展しました。</a><br>
          <a class="news-link" href="https://www.facebook.com/ackiena/posts/pfbid02tJyrAixUZVz4CW4oEzPU7WDGQSa4qCCPsd1Dn6oscam3rKt1bRNCuYWi1G2ARvHKl" target="_blank" rel="noopener noreferrer">2022/07/28&emsp;Figma Japan Community EventのShow and Tellで登壇しました。</a><br>
          <a class="news-link" href="https://www.wantedly.com/companies/tmn-systems/post_articles/377750" target="_blank" rel="noopener noreferrer">2022/03/04&emsp;インタビューがWantedlyに掲載されました。</a><br>
          <a class="news-link" href="https://dezabiyo.studio.site/archive-01" target="_blank" rel="noopener noreferrer">2021/02/27&emsp;デザイン読書日和・技術書典11に出展し、技術書が100部完売しました。</a><br>
          <a class="news-link" href="https://80b8e4c56e481ebe3c218550bd.doorkeeper.jp/events/22708" target="_blank" rel="noopener noreferrer">2015/04/20&emsp;Ruby on Rails勉強会を主催しました。</a>
        </p>
      </div>
    </section>

    <section class="mt-80">
      <h2 class="c-title">PICKUP</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(project, num) in projects" :key="`project-${num}`">
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
      <h2 class="c-title">OTHERS</h2>
      <ul class="others">
        <li class="other mb-30" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a :href="activity.url" class="">
            <img class="photo-other" :src="activity.image_url" alt="">
            <!-- <div class="detail">
              <p class="detail__title">{{ activity.title }}</p>
              <p class="detail__text">{{ activity.date }}</p>
            </div> -->
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
          title: 'InsurTech - Product Design',
          url: '/works/Tmnf',
          image_url: require('@/assets/image/tmnf/insure.jpg'),
          date: '2021.11 - Now / Tokio Marine'
        },
        {
          title: 'Design Culture',
          url: '/works/DesignCulture',
          image_url: require('@/assets/image/tmnf.png'),
          date: '2021.11 - Now / Tokio Marine'
        },
        {
          title: 'Stockr - UX, UI Design',
          url: '/works/Stockr',
          image_url: require('@/assets/image/stockr/ogp2.png'),
          date: '2020.06 - 2021.10 / BuildIt.inc'
        }
      ],
      activities: [
        {
          title: 'Company Website - Design Lead',
          url: '/#/works/Build%20It',
          image_url: require('@/assets/image/bldt/ogp.jpg'),
          date: '2020 / BuildIt.inc'
        },
        {
          title: 'Core(SaaS) - UI Design',
          url: '/#/works/Core',
          image_url: require('@/assets/image/core/ogp.jpg'),
          date: '2019 / BuildIt.inc'
        },
        {
          title: 'Lobi(Game Community) - Frontend Development',
          url: '/#/works/Lobi',
          image_url: require('@/assets/image/lobi/lobi.png'),
          date: '2018 - 2019 / Kayac.inc'
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
  background-color white

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
  border-radius 16px
  transition all 0.25s

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px

// OTHERS
.others
  display flex
  justify-content space-between

  @media (max-width: 768px)
      flex-wrap wrap

.other
  width calc(33.3% - 22px)

  @media (max-width: 768px)
    width calc(50% - 16px)

.photo-other
  width 100%
  height 20vw
  object-fit cover
  border-radius 16px
  transition all 0.25s

  &:hover
    width calc(100% - 32px)
    height calc(20vw - 32px)
    margin 16px

.detail
  padding 20px 1px
  overflow hidden

  &__title
    line-height 1.6
    font-size 20px
    font-weight 600

  &__text
    line-height 1.8
    overflow hidden
    text-overflow ellipsis

// NEWS
.news
  width 100%

  &__content
    display block
    width fit-content
    padding 20px 0
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
</style>
