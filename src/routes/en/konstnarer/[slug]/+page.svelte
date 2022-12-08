<script lang="ts">
  import ArtistsSinglePage from "$lib/components/pages/ArtistsSinglePage.svelte"
  import { Language, type ArtistType } from "$lib/types"
  export let data: ArtistType
</script>

<ArtistsSinglePage {data} language={Language.English} />
