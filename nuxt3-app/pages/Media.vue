<template>
<div>
  <h1 class="hero" style="background-image: url('/assets/image/bg_media.jpg')">
    <span class="hero__content">Media</span>
  </h1>

  <article class="c-centering">
    <section class="mt-plus mb-100">
      <h2 class="c-title">Article</h2>
      <ul class="cards">
        <li class="card mb-30" v-for="(article, num) in articles" :key="`article-${num}`">
          <a :href="article.url" target="_blank" rel="noopener noreferrer">
            <img class="photo" :src="article.image_url" loading="lazy" alt="新しいタブで記事を読む">
          </a>
        </li>
      </ul>
    </section>
  </article>
</div>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          url: 'https://zenn.dev/012/articles/328ae694e07d54',
          image_url: '/assets/image/media/figma-2-xd.png'
        },
        {
          url: 'https://zenn.dev/012/articles/537115a9d8020d79479e',
          image_url: '/assets/image/media/movie.png'
        },
        {
          url: 'https://zenn.dev/012/articles/b6ef35b68e0e1494141e',
          image_url: '/assets/image/media/css.png'
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
@import "../assets/css/common.styl"

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
    background url('../assets/image/svg/open_in_new.svg') no-repeat center center / cover
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
