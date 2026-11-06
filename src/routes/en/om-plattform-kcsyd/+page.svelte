<script lang="ts">
  import AboutPage from "#lib/components/pages/AboutPage.svelte"
  import { Language, type AboutPageType } from "#lib/types/index.ts"
  export let data: AboutPageType
</script>

<AboutPage {data} language={Language.English} />
