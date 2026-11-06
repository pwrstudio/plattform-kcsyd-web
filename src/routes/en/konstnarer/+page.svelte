<script lang="ts">
  import MainPage from "#lib/components/pages/MainPage.svelte"
  import { Language, MainPageType } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props();
</script>

<MainPage
  {data}
  language={Language.English}
  mainPageType={MainPageType.Listing}
/>
