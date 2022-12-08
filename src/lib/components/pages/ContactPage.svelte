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
  <div>{@html renderBlockText(infoText)}</div>
  <div>{@html renderBlockText(content)}</div>
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
