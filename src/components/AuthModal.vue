<template>
  <transition name="modal" appear>
    <div class="overlay">
      <div class="card">
        <h1 class="card__title">限定公開</h1>
        <p class="card__text">この先は、あいことばをお伝えした方のみ閲覧できます。</p>
        <input class="card__input" v-model="aikotoba" @keydown.enter="authPW" placeholder="あいことばを入力">
        <div class="card__border"></div>
        <p class="card__text">
          <a href="https://forms.gle/p8h5Kx3q43pbnxbX9" target="_blank" rel="noopener noreferrer">こちら</a> より、アンケート調査にご協力ください。<br>
          回答すると、あいことばを確認できます。
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      aikotoba: ''
    }
  },
  methods: {
    authPW (event) {
      if (event.keyCode !== 13) return
      if (this.aikotoba === 'Saudade') {
        localStorage.setItem('isAuthed', true)
        location.reload()
      } else {
        alert('合言葉が違うようです。再度ご確認ください。')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.overlay
  display flex
  align-items center
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.25)
  backdrop-filter blur(10px)
  flex-direction row
  text-align center

  @media (max-width: 768px)
      flex-direction column
      .card
        width auto
        &__img
          height 200px

.card
  width 440px
  margin 20px
  padding 20px
  background-color white
  border-radius 20px

  &__title
    margin-top 8px

  &__text
    margin 16px 0
    color #666

  &__input
    height 44px
    width 100%
    max-width 280px
    padding 0 16px
    border 1px solid #aaa
    border-radius 8px
    box-sizing border-box

  &__border
    display block
    width 100%
    margin-top 32px
    border 1px solid #eee

.modal-enter-active, .modal-leave-active
  transition: opacity .25s

.modal-enter, .modal-leave-to
  opacity 0

.sns
  width 40px
  height 40px
  margin 0 10px
  opacity 1.0

  &:hover
    opacity 0.5
</style>
