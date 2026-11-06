<script lang="ts">
  import ProjectsSinglePage from "#lib/components/pages/ProjectsSinglePage.svelte"
  import { Language, type ProjectType } from "#lib/types/index.ts"
  export let data: { project: ProjectType }
</script>

{#key data}
  <ProjectsSinglePage {data} language={Language.Swedish} />
{/key}
