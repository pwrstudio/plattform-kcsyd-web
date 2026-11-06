<script lang="ts">
  import AboutPage from "#lib/components/pages/AboutPage.svelte"
  import { Language, type AboutPageType } from "#lib/types/index.ts"
  interface Props {
    data: AboutPageType;
  }

  let { data }: Props = $props();
</script>

<AboutPage {data} language={Language.English} />
