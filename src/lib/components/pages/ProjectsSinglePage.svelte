<script lang="ts">
  import SingleProjectSlideshow from "$lib/components/SingleProjectSlideshow.svelte"
  import SingleProjectImage from "$lib/components/SingleProjectImage.svelte"
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
  const category =
    language === Language.English ? project.kategori_eng : project.kategori_sve
</script>

<div class="page">
  <div class="inner">
    <div class="top-bar">ARKIV / DOKUMENTATION*</div>

    <div class="column left">
      {#if project.layout === "alt1"}
        {#if project.bildspel && project.bildspel.length > 0}
          <SingleProjectSlideshow slides={project.bildspel} {language} />
        {:else}
          <SingleProjectImage {project} {language} />
        {/if}
      {/if}

      {#if project.layout === "alt3"}
        <div class="category">{category}</div>
        <div class="rubrik-text">
          {Language.English ? project.rubriktext_eng : project.rubriktext_sve}
        </div>
      {/if}
    </div>

    <div class="column right">
      <div class="category">{category}</div>
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

          .category {
            font-size: $FONT_SIZE_MEDIUM;
          }

          .rubrik-text {
            font-family: $BARBARA_STACK;
            font-size: $FONT_SIZE_XLARGE;
          }
        }

        &.right {
          font-size: $FONT_SIZE_MEDIUM;
          padding: 10px;
          overflow-y: auto;

          .category {
            font-size: $FONT_SIZE_SMALL;
          }
        }
      }
    }
  }

  :global(h1) {
    font-size: $FONT_SIZE_MEDIUM;
  }

  :global(.column a) {
    color: inherit;
  }
</style>
