<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  cursor: url('https://raw.githubusercontent.com/akinening/portfolio/85385e0949697392e28cf9da46f88107c2279335/src/assets/image/cursor.svg') 7 7, auto;
}

body {
  font-family: 'Montserrat', "Helvetica Neue", Helvetica, "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", Roboto, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 22px;
  font-feature-settings: "palt";
  letter-spacing: 0.4px;
  color: rgb(36, 40, 42);
  background-color: white;
}

::selection {
  background-color: rgba(255, 88, 148, 0.5);
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
  cursor: url('https://raw.githubusercontent.com/akinening/portfolio/85385e0949697392e28cf9da46f88107c2279335/src/assets/image/cursor_active.svg') 7 7, pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.16s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
