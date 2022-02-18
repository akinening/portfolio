<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="bldt_ogp" alt="株式会社ビルディット コーポレートサイト">

    <p class="description">
      リードデザイナーとして、株式会社ビルディットのコーポレートサイトのリデザインを行いました。<br>
      チーム構成：PM１名、リードデザイナー１名 (私)、デザイン/イラストレーション２名、広報１名
      <span class="link">
        <a href="https://bldt.jp/" target="_blank" class="link__button">コーポレートサイト</a>
      </span>
      ※現在、SEO会社によるコンテンツ差し替えのためデザインが崩れています。
    </p>

    <h2 class="title">打ち出し方の検討</h2>
    <p class="description">
      新しく定義されたコーポレートメッセージ（Mission, Vision, Value）をもとに、まずはクライアントに向けた打ち出し方を社内で検討しました。その結果から、<br>
      ①人材育成の中でも個人の自己成長や経験学習の領域に特化していること<br>
      ②メンバー自らが「一人ひとりの成長が、社会をより良くする」の実践者となり、事業開発に携わっている<br>
      という部分を中心に打ち出すことにしました。
    </p>

    <h2 class="title">ヒアリング・トンマナの決定</h2>
    <p class="description">
      つぎにムードボードを作成し、Zoomで画面共有をしながら社内メンバーへのヒアリングを実施しました。<br>
      <img class="image image--w80" :src="bldt_old" alt="以前のコーポレートサイト">
      <span class="centering">▲以前のコーポレートサイト</span>
      <br>
      以前のコーポレイトサイトは「八王子という街のWeb開発会社」「エンジニアリングの会社」という印象を受けるデザインでした。<br>
      しかし、実際にメンバーに自社のイメージをヒアリングしてみると「カラフル」「クリエイティブ」「ビジネスすぎない」といった意見が集まりました。それらをもとにベースカラーから再考し、イラストや配色で「楽しさ」「カラフルさ」を表現することにしました。<br>
      <img class="image image--w80" :src="bldt_color" alt="デザインガイドライン">
      デザインガイドを作成し、統一感を持たせるため色数を３色に抑えました。
    </p>

    <h2 class="title">イラストの作成・依頼</h2>
    <p class="description">
      イラスト中心のサイトとなるため、絵のポージングや構図は重点的に検討しました。<br>
      トップ画のキャラクターは実際のメンバーを参考に作成し、誠実さを伝えるために、表情を入れることにしました。「一人ひとりの成長」というビジョンに合致するように、それぞれが自身の作業に取り組みつつも、同じプロジェクトに携わっている様子をイラストにしました。<br>
      <img class="image image--w80" :src="bldt_illust" alt="イラストの作成フロー">
      私がラフを作成したのちメンバーにお願いし、Illustratorでパス化されたイラストを作成していただきました。オンラインで画面共有をしながら、細部の調整を行いました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'Build It',
  data () {
    return {
      bldt_ogp: require('@/assets/image/bldt/ogp.jpg'),
      bldt_old: require('@/assets/image/bldt/old.jpg'),
      bldt_color: require('@/assets/image/bldt/color.jpg'),
      bldt_illust: require('@/assets/image/bldt/illust.jpg')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"

.centering
  display block
  text-align center
</style>
