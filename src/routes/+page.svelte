<script lang="ts">
  import MainPage from "#lib/components/pages/MainPage.svelte"
  import { Language, MainPageType } from "#lib/types//index.ts"
  export let data: any
</script>

<MainPage
  {data}
  language={Language.Swedish}
  mainPageType={MainPageType.Landing}
/>
