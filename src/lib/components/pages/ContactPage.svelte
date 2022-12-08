<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ContactPageType } from "$lib/types"
  export let language: Language
  export let data: ContactPageType

  const infoText =
    language === Language.English
      ? data.info_eng.content
      : data.info_sve.content
  const content =
    language === Language.English
      ? data.content_eng.content
      : data.content_sve.content
</script>

<div class="page">
  <div class="inner">
    <div class="top-bar">Information/Kontakt</div>

    <div class="column left">
      <div class="top">
        <div class="logo">Plattform KcSyd</div>
        <div class="tagline">
          En konstnärsdriven plattform för offentlig konst i södra sverige
        </div>
      </div>
      <div class="bottom">
        <div class="info-text">{@html renderBlockText(infoText)}</div>
        <div class="logos">LOGOS</div>
      </div>
    </div>

    <div class="column right">
      <div>{@html renderBlockText(content)}</div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: $grey;
    height: 100vh;
    color: $black;
    font-family: $BARBARA_STACK;
    font-size: $FONT_SIZE_LARGE;
    padding-bottom: 5em;

    .inner {
      width: 1020px;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;

      .top-bar {
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid black;
        font-family: $ATLAS_STACK;
        font-size: $FONT_SIZE_MEDIUM;
        margin-bottom: 10px;
      }

      .column {
        width: 50%;
        float: left;
        height: calc(100vh - 70px);

        &.left {
          border-right: 1px solid black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .top {
            border-left: 1px solid black;
            padding: 10px;
            .logo {
              font-size: $FONT_SIZE_XLARGE;
              line-height: 1em;
              padding-bottom: 10px;
              border-bottom: 1px solid black;
            }
            .tagline {
              padding: 10px;
            }
          }

          .bottom {
            .info-text {
              font-family: $ATLAS_STACK;
              font-size: $FONT_SIZE_MEDIUM;
            }
            .logos {
              height: 60px;
              border-top: 1px solid black;
              border-bottom: 1px solid black;
            }
          }
        }

        &.right {
          padding: 10px;
          overflow-y: auto;
        }
      }
    }
  }
</style>
