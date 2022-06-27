<template>
  <div id="app">
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
      <router-view v-show="!loading" />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style>
#app {
  overflow: hidden;
}

body {
  font-family: "Helvetica Neue", Helvetica, "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", Roboto, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 22px;
  font-feature-settings: "palt";
  letter-spacing: 0.4px;
  color: rgb(36, 40, 42);
  background-color: #FAFAFA;
}

::selection {
  background-color: #80d8d0;
}

h1, h2, h3, h4, h5, h6, p, ul, li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.loaded-enter-active {
  transition: opacity 1s;
}

.loaded-enter {
  opacity: 0;
}
</style>
