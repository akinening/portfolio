<template>
  <div id="app">
    <router-view />
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
  /* overflow: hidden; */
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
  background-color: #FAFAFA;
}

::selection {
  background-color: #92F3FF;
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
  /* cursor: url('@/assets/image/cursor.svg') 8 8, auto;
  cursor: url('@/assets/image/cursor_active.svg') 8 8, pointer; */
}
</style>
