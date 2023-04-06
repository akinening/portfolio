<template>
  <section class="skill mt-80 mb-30">
    <h2 class="title">海外移住アプリ「IJUIN」</h2>
    <p class="description">
      IJUIN(イジュウイン)は海外移住の準備を応援し、実現までサポートするアプリです。<br>
      Flutterでアプリを作成し、Google Playストアに公開しています。
      <img class="image image--w80" src="@/assets/image/ijuin.jpg" alt="IJUIN">
      <span class="link">
        <a href="https://kaigai-iju.studio.site/" target="_blank" class="link__button">Webサイト</a>
      </span>
    </p>
    <h2 class="title">Chrome拡張機能「Drawer」</h2>
    <p class="description">
      Drawer(旧Spott)は、Vue.jsでつくられたChrome拡張機能です。素材を探す煩わしい作業を軽減し、生産性を向上させます。
      <span class="link">
        <a href="https://chrome.google.com/webstore/detail/kpnbnomomocjoefkpghaeoddmadinoid" target="_blank" class="link__button">Chromeストア</a>
      </span>
    </p>
    <h2 class="title">Zenb (Closed)</h2>
    <p class="description">
      Zenbは、「オフ会を開きたい!」「ゲームでフレンドを募集したい!」「クリエイターの仲間がほしい!」といった際に、部活やサークルをWeb上で気軽に立ち上げられるサービスです。<br>
      必要な機能をつくるためのリソースや、集客方法など、やるべきことが多く個人開発するには向いていないサービスだったため、クローズしました。
    </p>
    <h2 class="title">SakugaHub (Closed)</h2>
    <p class="description">
      海外では、アニメーターの「作画」が一部で高く評価されています。そこで作画のファンコミュニティをつくったら面白いのではないかと考え、Webサービスを考案しました。<br>
      Firebaseでフォームの投稿機能までは実装しましたが、①ターゲットユーザーの少なさ、②コミュニティ形成の難しさ、③多言語対応のハードル、等の観点からクローズしました。
    </p>
    <h2 class="title">Unityちゃんと喋るVR (2017)</h2>
    <p class="description">
      Microsoft社のWatson TTS/STT APIを用いて、Unityちゃんに向かった状態で話しかけると、それに応じた返事をしてくれるVRアプリを作成しました。<br>
      毎回APIで通信するためラグが大きく、実用には至りませんでしたが、構想としては面白いものが出来たのかなと思います。
      <span class="link">
        <a href="https://youtu.be/LxA9zLAJ4l4" target="_blank" class="link__button">YouTube</a>
      </span>
    </p>
    <h2 class="title">スクショをツイートするやつ (2015)</h2>
    <p class="description">
      Twitter APIを使用し、Windowsでスクショを撮ってそのままツイートできるアプリをC#で作成しました。上からペンで線を引くことも可能です。
      <span class="link">
        <a href="https://github.com/akinening/captcha_tool" target="_blank" class="link__button">GitHub</a>
      </span>
      <span class="link">
        <router-link to="/" class="link__button">
          ←TOPに戻る
        </router-link>
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Develop',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
