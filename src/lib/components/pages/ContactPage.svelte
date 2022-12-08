<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ContactPageType } from "$lib/types"
  export let language: Language
  export let data: ContactPageType
</script>

<div class="page">
  {#if language === Language.English}
    <div>{@html renderBlockText(data.info_eng.content)}</div>
    <div>{@html renderBlockText(data.content_eng.content)}</div>
  {:else}
    <div>{@html renderBlockText(data.info_sve.content)}</div>
    <div>{@html renderBlockText(data.content_sve.content)}</div>
  {/if}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    background: $grey;
    min-height: 100vh;
    color: $black;
    font-family: $BARBARA_STACK;
    font-size: $FONT_SIZE_LARGE;
    padding-bottom: 5em;
  }
</style>
