<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: { project: ProjectType }
  const { project } = data
</script>

<div class="page">
  <h1>{project.layout}</h1>
  {#if language === Language.English}
    <h1>{project.title_eng}</h1>
    {#if project.content_eng}
      <div>{@html renderBlockText(project.content_eng.content)}</div>
    {/if}
  {:else}
    <h1>{project.title}</h1>
    {#if project.content_sve}
      <div>{@html renderBlockText(project.content_sve.content)}</div>
    {/if}
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
