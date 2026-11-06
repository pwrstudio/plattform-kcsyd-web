<script lang="ts">
  import ContactPage from "#lib/components/pages/ContactPage.svelte"
  import { Language } from "#lib/types/index.ts"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props();
</script>

<ContactPage {data} language={Language.English} />
