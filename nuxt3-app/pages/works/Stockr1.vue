<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="ogp" alt="ストッカー">
    <p class="description">
      Stockrは、仕事や生活を改善したい社会人のための、ふりかえり支援アプリです。「一人ひとりの成長が、世界をより良くする」というビジョンを実現するため、開発が始動しました。<br>
      ゼロイチからグロースまで、UX/UIデザイン全般を担当しました。
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      Stockrは、<b>ふりかえりの習慣化</b>をサポートし、ユーザー自身の思考を促進するアプリです。「ストック」「ふりかえり」「スコア」の３つを主な機能としています。<br>
      ストックが毎日３件ピックアップされ、ユーザーはそれを棚卸しします。また、朝7時(始業前)と19時(退社後)に通知で問いかけてくれます。
      <span class="link">
        <a href="https://stockr.bldt.jp/" target="_blank" class="link__button">公式HP</a>
      </span>
    </p>

    <h2 class="title">デザインガイドラインの作成</h2>
    <p class="description">
      現在Stockrのデザインはほぼ自分１人で行っているため、デザインが属人的になっています。そこで少しずつデザインガイドラインを構築したり、デザイン意図を明文化しています。<br>
      FlutterはMaterial Designを標準サポートしていることから、Material Designに寄せ、iOSとAndroidでデザインは極力同じにすることとしました。フォントについては英字はRoboto, 日本語はNoto Sans JPを使用しています。<br>
      <img class="image image--2col" :src="color" alt="カラー" loading="lazy">
      <img class="image image--2col" :src="component" alt="コンポーネントの例" loading="lazy">
      フロントエンドエンジニアとしての知識を活かし、職種間での意思疎通がスムーズになるよう取り組んでいます。
    </p>

    <h2 class="title">スキン変更機能</h2>
    <p class="description">
      手帳のように自分好みにカスタマイズすることで、アプリを自分のものにしてもらうことを目的に、スキン変更機能をデザインしました。従来の色であるシアンとバランスが取れる色を選んでいます。<br>
      <img class="image" :src="skin" alt="５種類のスキン">
    </p>

    <h2 class="title">アプリ内イラスト制作</h2>
    <p class="description">
      Stockrの各機能をひと目で説明するために、SVGイラストを作成しました。Stockrに合うトンマナを検討し、線画＋ベースカラーのイラストに着地しました。<br>
      <img class="image" :src="illust" alt="イラスト">
    </p>

    <p class="description">
      1→10のデザイン実績についてはこちら
      <span class="link">
        <a href="https://akinen.com/#/works/stockr10" class="link__button">Stockr10</a>
      </span>
    </p>
  </section>
</template>

<script>
export default {
  layout: "works",
  data () {
    return {
      ogp: '/assets/image/stockr/ogp1.jpg',
      stockr_process2: '/assets/image/stockr-process2.png',
      reward: '/assets/image/stockr/reward.png',
      color: '/assets/image/stockr/color.png',
      component: '/assets/image/stockr/component.png',
      skin: '/assets/image/stockr/skin.png',
      illust: '/assets/image/stockr/illust.png'
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
