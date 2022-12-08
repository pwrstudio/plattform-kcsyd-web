<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type AboutPageType } from "$lib/types"
  export let language: Language
  export let data: AboutPageType
</script>

<div class="page">
  <div class="inner about">
    {#if language === Language.English}
      <div>{@html renderBlockText(data.content_eng.content)}</div>
    {:else}
      <div>{@html renderBlockText(data.content_sve.content)}</div>
    {/if}
    <div class="sidfot">
      <div class="text-logotyp">Plattform KcSyd</div>
      <div class="tagline">
        En konstnärsdriven plattform för offentlig konst i södra sverige
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    background: $lime;
    padding: 20px;
    font-family: $BARBARA_STACK;
    font-size: $FONT_SIZE_LARGE;

    .inner {
      width: 50ch;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h1 {
    text-transform: uppercase;
  }

  :global(.page .small) {
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_MEDIUM;
    margin-left: 40px;
  }

  :global(.page h2) {
    font-size: $FONT_SIZE_LARGE;
  }

  :global(.page img) {
    width: 100%;
  }

  :global(.page figure) {
    margin-left: 0;
    margin-right: 0;
  }

  .sidfot {
    margin-top: 40px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    min-height: 200px;

    .text-logotyp {
      padding: 10px;
      font-size: $FONT_SIZE_XLARGE;
      line-height: 1em;
      width: 50%;
      border-right: 1px solid black;
    }

    .tagline {
      padding: 10px;
      font-size: $FONT_SIZE_LARGE;
      width: 50%;
    }
  }
</style>
