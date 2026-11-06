<script lang="ts">
  import MainPage from "#lib/components/pages/MainPage.svelte"
  import { Language, MainPageType } from "#lib/types/index.ts"
  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<MainPage
  {data}
  language={Language.Swedish}
  mainPageType={MainPageType.Listing}
/>
