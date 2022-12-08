<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: { project: ProjectType }
  const { project } = data
  const title =
    language === Language.English ? project.title_eng : project.title
  const content =
    language === Language.English
      ? project.content_eng.content
      : project.content_sve.content
</script>

<div class="page">
  <div class="inner">
    <div class="top-bar">ARKIV / DOKUMENTATION*</div>

    <div class="column left">LEFT</div>

    <div class="column right">
      <h1>{project.layout}</h1>

      <h1>{title}</h1>
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
    background: $black;
    color: $white;
    height: 100vh;
    font-family: $ATLAS_STACK;
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
        border-bottom: 1px solid $white;
        font-family: $ATLAS_STACK;
        font-size: $FONT_SIZE_MEDIUM;
        margin-bottom: 10px;
      }

      .column {
        width: 50%;
        float: left;
        height: calc(100vh - 70px);

        &.left {
          border-right: 1px solid $white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .top {
            border-left: 1px solid $black;
            padding: 10px;
            .logo {
              font-size: $FONT_SIZE_XLARGE;
              line-height: 1em;
              padding-bottom: 10px;
              border-bottom: 1px solid $black;
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
              border-top: 1px solid $black;
              border-bottom: 1px solid $black;
            }
          }
        }

        &.right {
          font-size: $FONT_SIZE_MEDIUM;
          padding: 10px;
          overflow-y: auto;
        }
      }
    }
  }

  :global(h1) {
    font-size: $FONT_SIZE_MEDIUM;
  }
</style>
