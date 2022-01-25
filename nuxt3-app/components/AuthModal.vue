<template>
  <transition name="modal" appear v-if="!isAuthed">
    <div class="overlay">
      <div class="card">
        <h1>あいことば</h1>
        <p>このページを閲覧するには、合言葉が必要です。</p>
        <input v-model="aikotoba" @keydown.enter="authPW">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      aikotoba: '',
      isAuthed: false
    }
  },
  methods: {
    authPW(event) {
      if (event.keyCode !== 13) return
      if (this.aikotoba === 'ぽぽぽ') {
        this.isAuthed = true
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
  border-radius 4px

.modal-enter-active, .modal-leave-active
  transition: opacity .25s

.modal-enter, .modal-leave-to
  opacity 0
</style>
