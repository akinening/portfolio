<template>
<div>
  <header-area />
  <h1 class="c-top-margin c-page-title">Media</h1>
  <article class="media c-centering">
    <section class="mt-80">
      <h2 class="c-title">note</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(note, num) in notes" :key="`note-${num}`">
          <a :href="note.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="note.image_url" loading="lazy" alt="article">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">Zenn</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(zen, num) in zenn" :key="`zen-${num}`">
          <a :href="zen.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="zen.image_url" loading="lazy" alt="article">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">登壇資料</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(slide, num) in slides" :key="`slide-${num}`">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer">
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
          url: 'https://note.com/012/n/n94a5fb13ab60',
          image_url: require('@/assets/image/note2.png')
        },
        {
          url: 'https://note.com/012',
          image_url: require('@/assets/image/note4.png')
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.media
  margin-bottom 100px

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  position relative
  width calc(50% - 16px)
  min-width 320px
  border-radius 8px
  overflow hidden

  &:before
    opacity 0
    content ''
    background url('../../assets/open_in_new.svg') no-repeat center center / cover
    object-fit cover
    position absolute
    top calc(50% - 16px)
    left calc(50% - 16px)
    width 32px
    height 32px
    z-index 1
    transition all 0.25s

  &:hover
    &:before
      opacity 0.9

    .photo
      filter blur(1px) brightness(80%)

  @media (max-width: 768px)
    width 100%

.photo
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 8px
  object-fit cover
  transition all 0.25s

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px
</style>
