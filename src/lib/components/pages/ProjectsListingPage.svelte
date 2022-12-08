<script lang="ts">
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: {
    projektPagaende: ProjectType[]
    projektArkivDokumentation: ProjectType[]
  }
  const { projektPagaende, projektArkivDokumentation } = data

  const onGoingHeader = language === Language.English ? "Ongoing" : "Pågående"
  const pastHeader =
    language === Language.English
      ? "Archive/documentation"
      : "Arkiv/dokumentation"
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

<div class="page">
  <div>{onGoingHeader}</div>
  {#each projektPagaende as project (project._id)}
    <a href={urlPrefix + "projekt/" + project.slug.current}>{project.title}</a>
  {/each}
  <div />
  <div>{pastHeader}</div>
  {#each projektArkivDokumentation as project (project._id)}
    <a href={urlPrefix + "projekt/" + project.slug.current}>{project.title}</a>
  {/each}
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
