<script lang="ts">
  import LandingPage from "$lib/components/pages/LandingPage.svelte"
  import { Language, type ArtistsType } from "$lib/types"
  export let data: ArtistsType
</script>

<LandingPage {data} language={Language.English} />
