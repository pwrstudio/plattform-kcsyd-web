<script lang="ts">
  import MainPage from "#lib/components/pages/MainPage.svelte"
  import ArtistsSinglePage from "#lib/components/pages/ArtistsSinglePage.svelte"
  import { Language, MainPageType, type ArtistType } from "#lib/types/index.ts"
  interface Props {
    data: {
    mainPage: any
    artist: ArtistType
  };
  }

  let { data }: Props = $props();
  const { mainPage, artist } = data
</script>

{#key artist}
  <MainPage
    data={mainPage}
    language={Language.Swedish}
    mainPageType={MainPageType.Single}
  >
    <ArtistsSinglePage data={artist} language={Language.Swedish} />
  </MainPage>
{/key}
