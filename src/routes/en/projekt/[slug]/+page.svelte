<script lang="ts">
  import ProjectsSinglePage from "#lib/components/pages/ProjectsSinglePage.svelte"
  import { Language, type ProjectType } from "#lib/types/index.ts"
  interface Props {
    data: { project: ProjectType };
  }

  let { data }: Props = $props();
</script>

{#key data}
  <ProjectsSinglePage {data} language={Language.English} />
{/key}
