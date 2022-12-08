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
  <h1>{project.layout}</h1>
  <h1>{title}</h1>
  {#if content}
    <div>{@html renderBlockText(content)}</div>
  {/if}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    background: $black;
    color: $white;
    font-family: $ATLAS_STACK;
  }
</style>
