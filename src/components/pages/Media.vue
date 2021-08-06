<template>
<div>
  <header-area />
  <h1 class="hero" :style="{backgroundImage: 'url(' + bg_media + ')' }">
    <span class="hero__content">Media</span>
  </h1>
  <article class="c-centering">
    <section class="mt-plus">
      <ul class="cards">
        <li class="card mb-30" v-for="(note, num) in notes" :key="`note-${num}`">
          <a :href="note.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="note.image_url" loading="lazy" alt="新しいタブで記事を読む">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80">
      <h2 class="c-title">Zenn</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(zen, num) in zenn" :key="`zen-${num}`">
          <a :href="zen.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="zen.image_url" loading="lazy" alt="新しいタブで記事を読む">
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-80 mb-100">
      <h2 class="c-title">登壇資料</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(slide, num) in slides" :key="`slide-${num}`">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="slide.image_url" loading="lazy" alt="新しいタブで記事を読む">
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
      bg_media: require('@/assets/image/bg_media.jpg'),
      notes: [
        {
          url: 'https://note.com/012/n/n94a5fb13ab60',
          image_url: require('@/assets/image/note2.png')
        },
        {
          url: 'https://note.com/012/n/n6e7e5680013c',
          image_url: require('@/assets/image/note3.png')
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

.cards
  display flex
  flex-wrap wrap
  justify-content space-between

.card
  position relative
  width calc(50% - 16px)
  min-width 320px
  border-radius 4px
  overflow hidden

  &:before
    opacity 0
    content ''
    background url('../../assets/open_in_new.svg') no-repeat center center / cover
    filter drop-shadow(0 0 1px rgba(0,0,0,0.2))
    object-fit cover
    position absolute
    top calc(50% - 24px)
    left calc(50% - 24px)
    width 48px
    height 48px
    z-index 1
    transition all 0.22s

  &:hover
    &:before
      opacity 0.95

    .photo
      filter blur(1px) brightness(90%)

  @media (max-width: 768px)
    width 100%

.photo
  width 100%
  height 24vw
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 4px
  object-fit cover
  transition all 0.25s

  @media (max-width: 768px)
    height 50vw

  @media (min-width: 1200px)
    height 288px
</style>
