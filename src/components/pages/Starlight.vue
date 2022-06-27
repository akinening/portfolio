<template>
<div>
  <div class="loader" v-show="loading">
    <vue-loaders-ball-pulse color="#FF5894" scale="1"></vue-loaders-ball-pulse>
    <p>
      よみこみちゅう<br>
      <br>
      このページは音声が流れます。<br>
      音量をONにしてお楽しみください。
    </p>
  </div>

  <transition name="loaded">
    <div class="screen" v-show="!loading">
      <div class="bg" :style="{backgroundImage: 'url(' + BG + ')', cursor: 'url(' + cursor + ') 10 4, auto'}">
        <div class="character">
          <img v-on:click="greet" class="character__img" src="@/assets/image/starlight/idol.png" alt="">
          <div v-if="msgVisible" class="character__msg">お疲れさまです！今日も無理せず頑張ってくださいね！</div>
        </div>

        <!-- 上部エリア -->
        <div class="top-right">
          <div class="clock">
            <p class="clock__text">{{ clock }}</p>
          </div>
          <div class="share">
            <p class="share__text">SHARE</p>
          </div>
        </div>

        <!-- 下部エリア -->
        <img class="btn btn--change" src="@/assets/image/starlight/btn/change.png" alt="change">
        <img class="btn btn--project" src="@/assets/image/starlight/btn/project.png" alt="project">
        <img class="btn btn--help" src="@/assets/image/starlight/btn/help.png" alt="help">
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'Starlight',
  components: {
  },
  data () {
    return {
      loading: true,
      cursor: require('@/assets/image/starlight/icon/cursor.png'),
      BG: require('@/assets/image/starlight/BG.png'),
      clock: '00:00:00',
      voice: new Audio(require('@/assets/sound/idol_1.wav')),
      msgVisible: false
    }
  },
  created () {
    this.tick()
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    tick () {
      const date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()

      if (h < 10) h = '0' + h
      if (m < 10) m = '0' + m
      if (s < 10) s = '0' + s
      this.clock = h + ':' + m + ':' + s

      setTimeout(() => {
        this.tick()
      }, 100)
    },
    greet () {
      this.msgVisible = true
      this.voice.currentTime = 0
      this.voice.play()
      this.voice.onended = () => {
        this.msgVisible = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"
shadow044 = drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))
shadow022 = drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))

.loader
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  flex-direction column
  text-align center
  background-color #FFEDF3

.loaded-enter-active
  transition opacity 1s

.loaded-enter
  opacity 0

.screen
  width 100vw
  height 100vh
  background-color black
  font-family 'M PLUS 1p' // 400, 800

.bg
  z-index 0
  margin 0 auto
  width 100%
  max-width 1440px
  height 100%
  max-height 1440px
  overscroll-behavior none
  background-position center
  background-repeat no-repeat
  background-attachment fixed
  background-size cover

.character
  z-index 5
  display flex
  align-items flex-end
  justify-content center
  width 100%
  height 100%

  &__img
    width auto
    height calc(100vh - 80px)
    transition all .3s ease

    &:hover
      transform translateY(10px)

    @media (max-width: 768px)
      height calc(100vh - 100px)

  &__msg
    position fixed
    bottom 168px
    left calc(50% - 240px)
    width 480px
    padding 40px
    box-sizing border-box
    border 3px solid white
    background rgba(white 0.5)
    backdrop-filter blur(10px)
    border-radius 100px

// 上部エリア
.top-right
  z-index 10
  position fixed
  top 20px
  right 32px
  display flex

  @media (max-width: 768px)
    top 16px
    right 16px

.clock
.share
  margin-left 20px
  padding 12px 28px
  background-color rgba(46,0,46,0.6)
  border-radius 100px
  filter shadow044

  @media (max-width: 768px)
    margin-left 16px
    padding 8px 20px

  &__text
    font-weight 800
    font-size 20px
    color white
    filter shadow022

    @media (max-width: 768px)
      font-size 16px

// 下部エリア
.btn
  z-index 10
  filter shadow044
  position fixed

  &:hover
    opacity 0.8

  &--change
    bottom 32px
    left 32px

    @media (max-width: 768px)
      bottom 108px
      left 16px
      height 56px

  &--project
    bottom 32px
    left calc(50% - 240px)

    @media (max-width: 768px)
      bottom 16px
      left 16px
      width calc(100% - 32px)

  &--help
    bottom 32px
    right 32px
    border-radius 500px

    @media (max-width: 768px)
      bottom 108px
      right 16px
      width 120px
</style>
