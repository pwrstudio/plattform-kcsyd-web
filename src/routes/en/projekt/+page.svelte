<script lang="ts">
  import ProjectsListingPage from "#lib/components/pages/ProjectsListingPage.svelte"
  import { Language } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props();
</script>

<ProjectsListingPage {data} language={Language.English} />
