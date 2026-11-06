<script lang="ts">
  import ProjectsListingPage from "#lib/components/pages/ProjectsListingPage.svelte"
  import { Language, type ProjectType } from "#lib/types/index.ts"
  interface Props {
    data: {
    projektPagaende: ProjectType[]
    projektArkivDokumentation: ProjectType[]
  };
  }

  let { data }: Props = $props();
</script>

<ProjectsListingPage {data} language={Language.English} />
