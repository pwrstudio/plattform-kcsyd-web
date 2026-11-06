<script lang="ts">
  import AboutPage from "#lib/components/pages/AboutPage.svelte"
  import { Language, type AboutPageType } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()
</script>

<AboutPage {data} language={Language.English} />
