<template>
  <section class="skill mt-80 mb-30">
    <img class="image image--2col" :src="stockr_flow1" alt="基本機能の改善">
    <img class="image image--2col" :src="stockr_flow2" alt="マーケ施策">

    <h2 class="title">1. ユーザーインタビュー</h2>
    <p class="description">
      ペルソナ像の見直しや、ユーザーのインサイトを見つけることを目的に、インタビューを実施しました。
    </p>

    <h3 class="title title--sub">1-1. 準備〜実施</h3>
    <p class="description">
      <b>①被験者の募集</b><br>
      募集用のフォームを作成し、FacebookやStockrのTwitterアカウントでユーザーを募りました。被験者にはメールで事前にスケジュール概要や個人情報の取扱についての説明を送り、できるだけ不安のないよう心がけました。<br>
      <span class="link">
        <a href="https://forms.gle/AzEPLFdrgUkN9AUc8" target="_blank" class="link__button">募集フォーム</a>
      </span>

      <b>②ヒアリングシートを用意</b><br>
      表面的な回答ではなく、できる限り潜在ニーズを探るため、事前にヒアリングシートを用意しました。Stockrの利用前や利用後の様子も見えるような質問を意識しています。<br>
      ただし当日はこの内容に拘りすぎず、半構造化インタビューのような形式で進めました。<br>
      <span class="link">
        <a href="https://gist.github.com/akinening/d141a6f1072a6c99144ce657311e5e4f" target="_blank" class="link__button">ヒアリングシート</a>
      </span>

      <b>③準備・実施、振り返り</b><br>
      録画・録音用機材の準備や、ユーザーインタビューのお礼(Amazonカード)等、事前に必要な準備をしました。また、記録係の方と事前に目線合わせをしました。<br>
    </p>

    <h3 class="title title--sub">1-2. ペルソナ像の見直し</h3>
    <p class="description">
      ユーザーインタビューや実際のユーザーの動向をもとに、ペルソナ像を見直しました。<br>
      リリース前のペルソナ像は「日々の生活が漠然としており、メモする習慣がない」ユーザーでしたが、見直した結果ペルソナは<b>「生活の改善に関心があり、メモツールは良いものを模索している」</b>ユーザーであるという変化がありました。
    </p>

    <h2 class="title">2. プレミアム機能のデザイン</h2>
    <p class="description">
      マネタイズの第一歩として、toCの課金機能をデザインしました。
    </p>

    <h3 class="title title--sub">2-1. レポート</h3>
    <p class="description">
      ユーザーインタビューからペルソナは<b>向上心が高く、自己投資に興味のある層</b>であると特定しました。そこでStockrの活用度を可視化する、レポート機能を有料機能とすることにしました。<br>
      課金機能の導線からグラフで表示する項目、その見せ方や更新タイミングなど、一連のデザインを考えました。
      <img class="image image--w80" src="@/assets/image/stockr/report.png" alt="レポート" loading="lazy">
    </p>

    <h3 class="title title--sub">2-2. トピック検索</h3>
    <p class="description">
      ユーザーからの要望の中でとくに多かったのが「ハッシュタグ」と「検索」でした。また、ユーザーインタビューから同じテーマについて<b>複数のストックを横断的に振り返りたい</b>、というニーズが見えてきました。<br>
      そこでUIの検討を重ね、「トピック検索」機能としてリリースしました。<br>
      <img class="image image--w80" src="@/assets/image/stockr/topic.png" alt="トピック検索" loading="lazy">
      タグの乱立を避けるため、Stockrでは<b>予め興味のあるキーワードを「トピック」として５つまで登録できる</b>ようにしました。これによりストックに毎回タグをつけることなく、ストックをまとめることができます。<br>
      トピックは投稿フォームの下部にも表示され、<b>タップするとその単語を自動入力できます</b>。これにより何を書けばいいかが明確になり「気づき」が生まれる機会を促進します。
    </p>

    <h2 class="title">3. マーケティング</h2>
    <br>
    <h3 class="title title--sub">3-1. LPのリニューアル</h3>
    <p class="description">
      ユーザーインタビューの結果をまとめ分析した結果、気づきの投稿よりもその<b>ふりかえりがStockrの本質的価値</b>だとわかりました。<br>
      そこで、キャッチコピーやヒーローエリアを見直し、LPを全面的にリニューアルしました。STUDIOで自らページを作成し、公開しました。<br>
      CMS機能を用いてキャンペーンごとにページを出し分けることで、掲載媒体ごとに流入が取れるようにしています。
      <img class="image image--w80" src="@/assets/image/stockr/landing-page.png" alt="LP" loading="lazy">
    </p>

    <h3 class="title title--sub">3-2. ASO対策</h3>
    <p class="description">
      CTRを測定しながら、説明文やスクリーンショットを磨いていきました。
      <img class="image image--w80" src="@/assets/image/stockr/aso.png" alt="ASO" loading="lazy">
    </p>

    <h3 class="title title--sub">3-3. mailchimpを用いたステップメール</h3>
    <p class="description">
      インストール初日のモチベーションが高い時期にStockrの価値やコンセプトを伝えることを目的として、アカウント登録をしたユーザーへ3日間メールを送る施策に取り組みました。<br>
      スパム感のないデザインやメール容量の削減、送信タイミングの検討といった工夫をした結果、<b>開封率は平均50%、最終日までの購読解除率は0%</b>と、高い水準で閲覧されるメールとなりました。
      <img class="image image--w80" src="@/assets/image/stockr/mailchimp.png" alt="ステップメール" loading="lazy">
    </p>
  </section>
</template>

<script>
export default {
  name: 'Stockr10',
  data () {
    return {
      stockr_ogp: require('@/assets/image/stockr/ogp2.png'),
      stockr_flow1: require('@/assets/image/stockr/flow1.png'),
      stockr_flow2: require('@/assets/image/stockr/flow2.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
