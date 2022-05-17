<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <div class="text">◀ 左右にスワイプ ▶</div>
      <div class="card">
        <img class="card__img" :src="val.image_url" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['val'],
  data () {
    return {
      aikotoba: ''
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.overlay
  display flex
  align-items end
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  color white
  background rgba(36, 40, 42, 0.75)
  backdrop-filter blur(10px)
  text-align center

.text
  position absolute
  top 14vh

.card
  width 100%
  margin 0
  border-radius 16px 16px 0 0
  text-align center
  overflow-x scroll

  &__img
    height 80vh

  &__title
    margin 28px 20px 0

  &__close
    display block
    margin 0 auto 20px
    padding 12px 48px
    width 280px
    border-radius 4px
    border 1px solid white
    font-size 14px
    font-weight 700
    text-align center
    box-sizing border-box

.modal-enter-active, .modal-leave-active
  transition: all .25s ease

.modal-enter, .modal-leave-to
  opacity 0
  transform: translateY(40px)

</style>
