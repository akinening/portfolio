<template>
<div>
  <header-area />
  <h1 class="c-page-title">Media</h1>
  <article class="media">
    <section class="mt-80">
      <h2 class="c-title">note</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(note, num) in notes" :key="`note-${num}`">
          <a :href="note.url" target="_blank" rel="noreferrer noreferrer">
            <img class="photo" :src="note.image_url" loading="lazy" alt="article">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">Zenn</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(zen, num) in zenn" :key="`zen-${num}`">
          <a :href="zen.url" target="_blank" rel="noreferrer noreferrer">
            <img class="photo" :src="zen.image_url" loading="lazy" alt="article">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">登壇資料</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(slide, num) in slides" :key="`slide-${num}`">
          <a :href="slide.url" target="_blank" rel="noreferrer noreferrer">
            <img class="photo" :src="slide.image_url" loading="lazy" alt="article">
          </a>
        </li>
      </ul>
    </section>
  </article>
  <footer-area />
</div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea'
import FooterArea from '@/components/FooterArea'

export default {
  name: 'Media',
  components: {
    HeaderArea,
    FooterArea
  },
  data () {
    return {
      notes: [
        {
          url: 'https://note.com/012/n/ne82251f29c00',
          image_url: 'https://assets.st-note.com/production/uploads/images/28138463/rectangle_large_type_2_81f1d3774e9f841542a9ea5ee5b7a6fb.png?width=500'
        },
        {
          url: 'https://note.com/012/n/n94a5fb13ab60',
          image_url: 'https://assets.st-note.com/production/uploads/images/47006069/rectangle_large_type_2_0083257e95fb02580b91635088346b82.png?width=500'
        },
        {
          url: 'https://note.com/012/n/n6e7e5680013c',
          image_url: 'https://assets.st-note.com/production/uploads/images/47301491/rectangle_large_type_2_969fd3188d1d3ee638aca492e9c36ea7.png?width=500'
        }
      ],
      zenn: [
        {
          url: 'https://zenn.dev/012/articles/537115a9d8020d79479e',
          image_url: require('@/assets/image/zenn-movie.png')
        },
        {
          url: 'https://zenn.dev/012/articles/b6ef35b68e0e1494141e',
          image_url: require('@/assets/image/zenn-css.png')
        }
      ],
      slides: [
        {
          url: 'https://speakerdeck.com/akinen/efforts-i-made-to-regain-the-feeling-of-drawing',
          image_url: 'https://files.speakerdeck.com/presentations/8266f85cdbc940d88c966203b2ed47c7/slide_0.jpg'
        },
        {
          url: 'https://speakerdeck.com/akinen/examples-of-ui-prototyping-practices-for-new-businesses',
          image_url: 'https://files.speakerdeck.com/presentations/6d417c914c5049b39be80ed54c19f2f8/slide_0.jpg'
        },
        {
          url: 'https://speakerdeck.com/akinen/created-a-chrome-extension-in-vue-dot-js',
          image_url: 'https://files.speakerdeck.com/presentations/991889f3485a4b039c6f2614ff82f7d3/slide_0.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.mb-30
  display inline-block
  margin-bottom 30px

.media
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
  width calc(50% - 16px)
  min-width 320px

  @media (max-width: 768px)
    width 100%

.photo
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  border-radius 8px
  background-position 50%
  object-fit cover

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px
</style>
