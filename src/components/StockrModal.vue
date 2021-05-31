<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close')">
      <router-link to="/works/Stockr1" class="card">
        <img class="card__img" src="@/assets/image/stockr0.jpg" alt="0から1のデザイン">
        <p class="card__text">0→1のデザイン</p>
      </router-link>
      <router-link to="/works/Stockr10" class="card">
        <img class="card__img" src="@/assets/image/stockr.png" alt="1から10のデザイン">
        <p class="card__text">1→10のデザイン</p>
      </router-link>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'StockrModal'
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
  flex-direction row

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
  border-radius 8px

  &:hover > &__img
      opacity 0.88

  &__img
    width 100%
    height 230px
    border-radius 8px
    object-fit cover

  &__text
    margin-top 12px
    font-size 20px
    font-weight 500
    text-align center
    color base-black

.modal-enter-active, .modal-leave-active
  transition: opacity .25s

.modal-enter, .modal-leave-to
  opacity 0
</style>
