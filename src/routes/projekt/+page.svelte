<script lang="ts">
  import ProjectsListingPage from "#lib/components/pages/ProjectsListingPage.svelte"
  import { Language, type ProjectType } from "#lib/types/index.ts"
  export let data: {
    projektPagaende: ProjectType[]
    projektArkivDokumentation: ProjectType[]
  }
</script>

<ProjectsListingPage {data} language={Language.Swedish} />
