<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <img class="img" :src="val.image_url" alt="">
      <div class="card" :style="{backgroundColor: val.color }">
        <div class="card__close" @click="$emit('close')">閉じる</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['val']
}
</script>

<style scoped lang="stylus">
@import "../assets/css/common.styl"

.overlay
  display flex
  align-items top
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  color white
  background rgba(0, 0, 0, 0.3)
  backdrop-filter blur(10px)
  text-align center

.img
  width auto
  height 75vh

.card
  position absolute
  bottom 0
  width 100%
  height 25vh
  text-align center

  &__close
    position absolute
    padding 12px 48px
    width 280px
    left calc(50% - 140px)
    bottom 28px
    border-radius 4px
    border 1px solid white
    font-size 14px
    font-weight 700
    text-align center
    box-sizing border-box

    @media (max-width: 768px)
      bottom 36px

.modal-enter-active, .modal-leave-active
  transition: all .25s ease

.modal-enter, .modal-leave-to
  opacity 0

  // @media (max-width: 768px)
  //  transform: translateY(100vh)

</style>
