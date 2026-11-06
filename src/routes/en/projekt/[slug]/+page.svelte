<script lang="ts">
  import ProjectsSinglePage from "#lib/components/pages/ProjectsSinglePage.svelte"
  import { Language } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props();
</script>

{#key data}
  <ProjectsSinglePage {data} language={Language.English} />
{/key}
