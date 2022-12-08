<script lang="ts">
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: {
    projektPagaende: ProjectType[]
    projektArkivDokumentation: ProjectType[]
  }
  const { projektPagaende, projektArkivDokumentation } = data
</script>

<div class="page">
  {#if language === Language.English}
    <div>Ongoing</div>
    {#each projektPagaende as project (project._id)}
      <a href={"/en/projekt/" + project.slug.current}>{project.title}</a>
    {/each}
    <div>Archive/documentation</div>
    {#each projektArkivDokumentation as project (project._id)}
      <a href={"/en/projekt/" + project.slug.current}>{project.title}</a>
    {/each}
  {:else}
    <div>Pågående</div>
    {#each projektPagaende as project (project._id)}
      <a href={"/projekt/" + project.slug.current}>{project.title}</a>
    {/each}
    <div>Arkiv/dokumentation</div>
    {#each projektArkivDokumentation as project (project._id)}
      <a href={"/projekt/" + project.slug.current}>{project.title}</a>
    {/each}
  {/if}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    min-height: 100vh;
    background: $black;
    color: $white;
    font-family: $ATLAS_STACK;
  }
</style>
