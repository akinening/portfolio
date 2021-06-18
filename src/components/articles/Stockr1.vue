<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="ogp" alt="ストッカー">
    <p class="description">
      弊社の「一人ひとりの成長が、世界をより良くする」というビジョンを実現するため、Stockrの開発が始動しました。<br>
      チーム構成はPM１名、エンジニア２名、そして私。私はデザイナーとしてコンセプト立案からプロトタイピング、リリース、グロースに至るまでの工程に一貫して携わっています。
    </p>

    <h2 class="title">サービス概要</h2>
    <p class="description">
      せわしなく過ぎる時間の中で、自分と向き合いふりかえる時間を意識的に取ることは、中々難しいものです。<br>
      Stockrは、投稿した気づきを定期的にピックアップすることで<b>ふりかえりの習慣化</b>をサポートするアプリです。「ストック」「ふりかえり」「スコア」の３つを主な機能としています。
      <span class="link">
        <a href="https://stockr.bldt.jp/" target="_blank" class="link__button">公式HP</a>
      </span>
    </p>

    <h2 class="title">気づきを貯める「ストック」</h2>
    <p class="description">
      Stockrでは投稿のことを「ストック」と呼びます。StockrはTODOリストではなく、自分だけの思考を書き込む場所であるというコンセプトや、自己投資の意味も込めています。<br>
      ストックのコンセプトはツイートというよりも、ブログに近い概念です。「自分の思考を深める」ことを可能にするため、何度も追記して更新できるようにしました。<br>
      <img class="image" :src="stockr_process2" alt="デザインの検討">
      UIについては、何度も検討を重ねました。当初はストックを月ごとに気づきをまとめるUIでしたが、プロトタイピングで<br>
      「<b>投稿したのが何月のことだったか覚えてない</b>ので、月ごとに分けられると逆に探しにくい」<br>
      「関連する気づきを連投した際に月をまたぐと、<b>気付きが分断されてしまう</b>」<br>
      といった意見をいただき、現在の形に着地しました。あえて投稿日時を目立たせないことで、<b>後ろめたさなく積み重ねを実感できるUI</b>になっています。<br>
    </p>

    <h2 class="title">ふりかえり機能</h2>
    <p class="description">
      「気づき」とは、Tipsやハウツーのようなものというよりは、「常に意識したい」「忘れないようにしたい」といった、<b>将来の自分のための事柄</b>を指します。このことから、アプリ側からサジェストして振り返りを促してくれる「ふりかえり」機能を考案しました。<br>
      <br>
      毎日投稿が５件ピックアップされ、ユーザーはそれを棚卸しします。朝7時(始業前)と19時(退社後)に通知で問いかけることで、無理なく振り返りを促進します。<br>
      <br>
      自分が考えていたことを思い出す機会は、一日のうちあまり無いのではないかと思います。また単に投稿を見返しただけでは、内容が頭に入ってきづらく、振り返りになりません。<br>
      <br>
      そこでStockrでは、ただリマインドするのではなく<b>過去の自分の投稿に追記する</b>ことで、手を動かしながら思考の深掘りができるようにしました。追記を繰り返すことで内容が整理され、思考を体系化できます。
    </p>

    <h2 class="title">スコア機能</h2>
    <p class="description">
      ユーザーのLTVについて、Google Play全アプリの平均継続率は「翌日で50%」「3日後には80%が休眠」するというデータがあります。言い換えるとダウンロードから3日が経過した時には、全体の20%のユーザーしかアプリを利用しなくなるということです。そこで、継続するモチベーションとなる<b>リワード設計</b>が必要であると考えました。<br>
      <br>
      自然とユーザーの習慣に定着するものとして、バッジ機能、投稿のテキスト解析など幾つものパターンを出して検討し、最終的にスコア機能に着地しました。ユーザー自身の<b>思考した量</b>をスコアで表現し、成長を可視化してくれます。<br>
      <br>
      ただし、スコアを上げることが目的化しないようにする必要がありました。スコアリングはあくまでサポートするためのものであり、<b>プラスアルファで嬉しい体験</b>になるように意識しています。
      <img class="image" :src="reward" alt="プラスアルファの体験の提供">
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
  </section>
</template>

<script>
export default {
  name: 'Stockr1',
  data () {
    return {
      ogp: require('@/assets/image/stockr/ogp1.jpg'),
      stockr_process2: require('@/assets/image/stockr-process2.png'),
      reward: require('@/assets/image/stockr/reward.png'),
      color: require('@/assets/image/stockr/color.png'),
      component: require('@/assets/image/stockr/component.png'),
      skin: require('@/assets/image/stockr/skin.png'),
      illust: require('@/assets/image/stockr/illust.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
