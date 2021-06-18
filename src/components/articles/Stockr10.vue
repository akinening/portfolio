<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="stockr_ogp" alt="ストッカー">
    <img class="image image--2col" :src="stockr_flow1" alt="基本機能の改善">
    <img class="image image--2col" :src="stockr_flow2" alt="マーケ施策">

    <h2 class="title">1. ユーザーインタビュー</h2>
    <p class="description">
      リリース前からペルソナ像の作成やプロトタイプを用いた検証はしていましたが、ペルソナ像が実際のユーザーと合っているのか、どの部分が刺さっているのかが不明瞭でした。そこでインサイトを見つけることを目的に、ユーザーインタビューを実施しました。
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

      <b>③当日までの準備</b><br>
      録画・録音用機材の準備や、ユーザーインタビューのお礼(Amazonカード)等、事前に必要な準備をしました。また、記録係の方と事前に目線合わせをしました。<br>
      <br>
      <b>④実施→振り返り</b><br>
      現在執筆中です。
    </p>

    <h3 class="title title--sub">1-2. ペルソナ像の見直し</h3>
    <p class="description">
      ユーザーインタビューや実際のユーザーの動向をもとに、ペルソナ像を見直しました。<br>
      リリース前のペルソナ像は「日々の生活が漠然としており、メモする習慣がない」ユーザーでしたが、見直した結果ペルソナは「生活の改善に関心があり、メモツールは良いものを模索している」ユーザーであるという変化がありました。<br>
      <span class="link">
        <a href="https://www.figma.com/file/gZ8HENIkSCekXn0truBnnf/Stokr%E3%83%9A%E3%83%AB%E3%82%BD%E3%83%8A?node-id=0%3A1" target="_blank" class="link__button">新ペルソナ</a>
      </span>
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
