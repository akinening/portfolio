<template>
  <article class="c-centering" itemscope="" itemtype="http://schema.org/Person">
    <view-modal v-if="isOpen" :val="illustData" @close="closeModal" />

    <section class="mt-plus">
      <p class="sub-text">
        STARLIGHTは喫茶店をコンセプトにした創作サークルです。デザイン、ときどき絵。
      </p>
    </section>

    <section class="mt-80">
      <h2 class="c-title">PROJECTS</h2>
      <ul class="cards">
        <li class="card mb-30 c-shadow" v-for="(activity, num) in activities" :key="`activity-${num}`">
          <a :href="activity.url" rel="noopener noreferrer" target="_blank">
            <img class="photo" :src="activity.image_url" alt="">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">ILLUSTRATION</h2>
      <ul class="cards">
        <li class="card-illust mb-30 c-shadow" v-for="(illust, num) in illusts" :key="`illust-${num}`">
          <img @click="openModal(illust)" class="photo" :src="illust.image_url" alt="">
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import ViewModal from '@/components/ViewModal'

export default {
  name: 'WorksArea',
  components: {
    ViewModal
  },
  data () {
    return {
      isOpen: false,
      activities: [
        {
          url: 'https://www.figma.com/community/file/1063752787187389952',
          image_url: require('@/assets/image/starlight/banner_figma.png')
        },
        {
          url: 'https://dezabiyo.studio.site',
          image_url: require('@/assets/image/starlight/banner_mook.png')
        },
        {
          url: 'https://techbookfest.org/product/5108267816583168',
          image_url: require('@/assets/image/starlight/banner_book.png')
        },
        {
          url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
          image_url: require('@/assets/image/starlight/banner_drawer.png')
        }
      ],
      illusts: [
        {
          title: 'ほげほげ',
          description: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。',
          image_url: require('@/assets/image/starlight/cafe.png')
        },
        {
          title: 'ほげほげ',
          description: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。',
          image_url: require('@/assets/image/starlight/dezabiyo.png')
        },
        {
          title: 'ほげほげ',
          description: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。',
          image_url: require('@/assets/image/starlight/idol.png')
        },
        {
          title: 'ほげほげ',
          description: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。',
          image_url: require('@/assets/image/starlight/obog.png')
        },
        {
          title: 'ほげほげ',
          description: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。',
          image_url: require('@/assets/image/starlight/senju.png')
        }
      ],
      illustData: {
        title: '',
        description: '',
        image_url: ''
      }
    }
  },
  methods: {
    openModal (illust) {
      this.isOpen = true
      this.illustData = illust
    },
    closeModal () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.sub-text
  margin 40px 0 60px
  font-size 16px
  font-weight 400
  line-height 2
  letter-spacing 0.1rem

  @media (max-width: 768px)
    font-size 14px

  @media (min-width: 1200px)
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
  border-radius 4px

  @media (max-width: 768px)
    width 100%

.card-illust
  position relative
  width calc((100% - 20px) / 3)
  background-color white
  border-radius 4px

  @media (max-width: 768px)
    width calc((100% - 20px) / 2)

  &:before {
    content ""
    display block
    padding-top 100%
  }

  img {
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    object-fit cover
    object-position center top
  }

.photo
  float left
  width 100%
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 4px

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
