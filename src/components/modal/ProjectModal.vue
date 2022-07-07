<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close', '')">
      <div class="toast" :style="{backgroundImage: 'url(' + toast + ')' }">
        <p class="toast__msg">
          STARLIGHTとしてのプロジェクト一覧です。<br>
          （クリックすると外部ページが開きます）
        </p>
      </div>

      <div class="select">
        <div v-for="(project, num) in projects" :key="`project-${num}`">
          <a :href="url" target="_blank">
            <img class="select__img" :src="project.image_url" alt="">
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectModal',
  data () {
    return {
      toast: require('@/assets/image/starlight/toast.png'),
      projects: [
        {
          url: 'https://www.figma.com/community/file/1063752787187389952',
          image_url: require('@/assets/image/starlight/banner_figma.png')
        },
        {
          url: 'https://dezabiyo.studio.site',
          image_url: require('@/assets/image/starlight/banner_mook.png')
        },
        {
          url: 'https://techbookfest.org/product/5108267816583168',
          image_url: require('@/assets/image/starlight/banner_book.png')
        },
        {
          url: 'https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid',
          image_url: require('@/assets/image/starlight/banner_drawer.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.overlay
  z-index 200
  display flex
  flex-direction column
  align-items center
  justify-content center
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  color white
  background rgba(#39000A, 0.12)
  backdrop-filter blur(16px)

.modal-enter-active, .modal-leave-active
  transition all .25s ease

.modal-enter, .modal-leave-to
  opacity 0

.toast
  width 975px
  height 110px
  margin-bottom 56px

  &__msg
    font-family 'M PLUS 1p'
    font-weight 800
    font-size 20px
    filter drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))
    text-align center
    margin 46px auto

.select
  display flex
  flex-direction row

  &__img
    width 170px
    height 400px
    margin 0 12px
    border-radius 100px
    border 6px solid white
    object-fit cover
    object-position 50% 50%
    transition all 0.25s ease

    &:hover
      background-color rgba(#FF5894, 0.75)
      height 424px
      margin -12px 12px
</style>
