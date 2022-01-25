<template>
  <div>
    <Head lang="ja">
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G1G5Q76XK4"></Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-G1G5Q76XK4');
      </Script>

      <Title>Akinen | Digital Product Designer</Title>
      <Meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <Meta name="description" content="長野県出身、八王子在住のデジタルプロダクトデザイナー Akinen のポートフォリオサイトです。UI/UXデザインやサービスデザインの事例をまとめています。" />
      <Meta name="keywords" content="ポートフォリオサイト, UI/UXデザイン, サービスデザイン, ユーザーインタビュー, 長野県諏訪市, 東京都八王子市" />
      <Meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <Meta property="og:title" content="Akinen | Digital Product Designer" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://akinen.com" />
      <Meta property="og:image" content="https://raw.githubusercontent.com/akinening/portfolio/0f639cb0815b828b2b3031ac31fc8cc692854d8f/src/assets/image/ogp.png" />
      <Meta property="og:site_name" content="Akinen | Digital Product Designer" />
      <Meta property="og:description" content="あきねんのポートフォリオサイトです。" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@_akinen" />
      <Meta property="og:image" content="https://raw.githubusercontent.com/akinening/portfolio/0f639cb0815b828b2b3031ac31fc8cc692854d8f/src/assets/image/ogp.png" />
      <Meta name="theme-color" content="#80d8d0" />

      <Link rel="icon" type="image/png" href="/assets/image/logo_sp.png" />
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    </Head>

    <header-area />
    <NuxtPage/>
    <footer-area />
  </div>
</template>

<script>
export default {
  layout: "app",
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@600&display=swap',
      }
    ]
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
</style>