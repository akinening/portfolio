<template>
  <section class="skill mt-80 mb-30">
    <img class="image" :src="ogp" alt="Kamakura">

    <p class="description">
      弁護士や税理士の先生とユーザーを繋げる業務管理システムの新規開発に、デザイナーとして携わりました。情報設計やワイヤー作成、UIデザインを担当しました。<br>
      受託案件のため画面の詳細はお見せできませんが、取り組みの一部をご紹介します。
    </p>

    <h2 class="title">ジャーニーマップの作成、情報設計</h2>
    <p class="description">
      士業の先生の業務をオンライン上でやり取りできるようにするために、業務フローを明確にする必要がありました。<br>
      しかし今までの業務は経験を頼りに行われてきたため、そのフローをヒアリングしながら整理するところから着手しました。<br>
      <b>カスタマージャーニーマップ</b>を作成し、顧客・士業・管理者の３役のやり取りを可視化。それをもとに情報設計を行い、UIにまで落とし込むことができました。
    </p>

    <h2 class="title">他デザイナーとのタスク調整</h2>
    <p class="description">
      先述のヒアリングから当初の見積もりより機能が多くなることが判明し、ユーザーの役割ごとにUIを作成する必要がありました。<br>
      そこで私は情報設計やクライアントとの調整を行い、同僚のデザイナーにデザインシステムの構築などを依頼するなど、タスクを分担して作業を進めました。
    </p>
  </section>
</template>

<script>
export default {
  name: 'Kamakura',
  data () {
    return {
      ogp: require('@/assets/image/kamakura1.png')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/article.styl"
</style>
