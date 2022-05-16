<template>
  <transition name="modal" appear>
    <div class="overlay">
      <div class="card">
        <img class="card__img" :src="val.image_url" alt="">
        <h1 class="card__title">{{ val.title }}</h1>
        <p class="card__text">{{ val.description }}</p>
        <div class="card__close" @click="$emit('close')">閉じる</div>
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

.card
  width 100%
  margin 20px
  color white
  background-color rgba(36, 40, 42, 0.75)
  border-radius 16px
  text-align center
  overflow hidden

  &__img
    width 100%

  &__title
    margin 28px 20px 0

  &__text
    margin 16px 20px 20px

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
  transition: opacity .25s

.modal-enter, .modal-leave-to
  opacity 0

</style>
