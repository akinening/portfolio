<template>
<div>
  <h1 class="c-top-margin c-page-title">STARLIGHT</h1>
  <article class="media c-centering">
    <section class="mt-80">
      <ul class="cards">
        <li class="card mb-30" v-for="(note, num) in notes" :key="`note-${num}`">
          <img class="photo" :src="note" loading="lazy" alt="新しいタブで記事を読む">
        </li>
      </ul>
    </section>
  </article>

  <footer class="footer">
    <p class="title">SNS</p>
    <div class="contacts">
      <a class="contact" href="https://twitter.com/hosi_xyz" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a class="contact" href="https://www.instagram.com/_starl8/" target="blank" rel="noopener noreferrer">
        Instagram
      </a>
    </div>
    <p class="footer__copy">©︎ 2021 STRLIGHT</p>
  </footer>
</div>
</template>

<script>
export default {
  name: 'Media',
  components: {
  },
  data () {
    return {
      notes: [
        require('@/assets/image/illust/cafe.png'),
        require('@/assets/image/illust/idol.png'),
        require('@/assets/image/illust/dezabiyo.png')
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

  @media (max-width: 768px)
    width 100%

.photo
  width 100%
  background-color #f0f3f7
  background-size cover
  background-position 50%
  border-radius 8px
  object-fit cover
  transition all 0.25s

.footer
  padding-top 40px
  text-align center
  color white
  background-color rgb(36, 40, 42)

  &__copy
    font-weight 500
    padding 16px 0

.title
  font-size 24px
  font-weight 600
  margin-bottom 40px

.contacts
  display flex
  justify-content center
  margin 0 10px

.contact
  display inline-block
  margin 0 10px 10px
  width 200px
  padding 12px 30px
  color rgba(36, 40, 42, 1.0)
  background-color white
  border-radius 4px
  font-size 16px
  font-weight 500
  transition all 0.2s

  &:hover
    color rgba(36, 40, 42, 0.6)
</style>
