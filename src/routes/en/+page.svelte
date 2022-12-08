<script lang="ts">
  import LandingPage from "$lib/components/pages/LandingPage.svelte"
  import { Language } from "$lib/types/"
  export let data
</script>

<LandingPage {data} language={Language.English} />
