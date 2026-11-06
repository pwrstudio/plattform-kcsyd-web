<script lang="ts">
  import MainPage from "#lib/components/pages/MainPage.svelte"
  import ArtistsSinglePage from "#lib/components/pages/ArtistsSinglePage.svelte"
  import { Language, MainPageType } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()
  const { mainPage, artist } = $derived(data)
</script>

{#key artist}
  <MainPage
    data={mainPage}
    language={Language.English}
    mainPageType={MainPageType.Single}
  >
    <ArtistsSinglePage data={artist} language={Language.English} />
  </MainPage>
{/key}
