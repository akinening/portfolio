<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <div class="card">
        <img class="card__img" :src="val.image_url" alt="">
      </div>
      <div class="close" @click="$emit('close')">閉じる</div>
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
  align-items top
  justify-content center
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  color white
  background rgba(0, 0, 0, 0.1)
  backdrop-filter blur(10px)
  text-align center

.card
  position relative
  width auto
  margin 48px 0
  border-radius 16px
  background-color rgba(36, 40, 42, 0.75)
  text-align center
  overflow-x scroll

  @media (max-width: 768px)
    width 100%
    margin 48px 0 0 0
    border-radius 16px 16px 0 0

  &__img
    height calc(100% - 120px)

.close
  position absolute
  display block
  padding 12px 48px
  width 280px
  left calc(50% - 140px)
  bottom 84px
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
  transform: translateY(100vh)

</style>
