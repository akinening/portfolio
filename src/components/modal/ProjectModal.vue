<template>
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close', '')">
      <div class="card">
        <h1 class="card__title">採用担当者の方へ</h1>
        <p class="card__text">
          私のポートフォリオに貴重なお時間を頂き、ありがとうございます。Akinenと申します。<br>
          <br>
          ▼ご提供できること<br>
          ・ネイティブアプリ(Android/iOS)やWebサービス(toB/toC)など、幅広いデザインの経験があるため、案件に合ったご提案が可能です。<br>
          ・表層の面では0.5pxまで拘るというよりは、体験を考慮した上でのUIデザインや、OOUIなどに基づいた情報設計が得意です。<br>
          <br>
          ▼仕事へのスタンス・ワークスタイル<br>
          ・社内政治中心より、ユーザー中心でありたいと思っています。<br>
          ・フラットでありつつもお互いに尊重し合える関係を目指しています。<br>
          ・0→1の開発経験が多いため、明確な理由があればプロダクトの方針が大きく変わったり撤退することについては寛容です。<br>
          ・ミーティング時間は最小限に留め、作業に集中したい人間です。ただし雑談は大切にしたいと考えています。<br>
          ・１つのプロダクトにコミットできる環境を探しています。<br>
          <br>
          ▼できないこと<br>
          ・広告やバナーの作成はある程度出来ますが、専門ではありません。<br>
          <br>
          もし共感してくださる場合、あなたとご一緒に働けたら嬉しいです。<br>
          ※様々なオファーを頂いており、ご返信できない場合もあります。予めご了承ください。<br>
          <br>
        </p>
        <p class="card__text" @click="$emit('close', '')">閉じる</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectModal'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/common.styl"

.overlay
  z-index 200
  display flex
  flex-direction column
  align-items center
  justify-content center
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(#39000A, 0.12)
  backdrop-filter blur(16px)

.modal-enter-active, .modal-leave-active
  transition all .25s ease

.modal-enter, .modal-leave-to
  opacity 0

.card
  max-width 480px
  margin 20px
  padding 20px
  background-color white
  border-radius 20px

  &__title
    margin 8px 0 20px 20px

  &__text
    margin 16px 0
    padding 0 20px
    max-height 480px
    overflow-y scroll

</style>
