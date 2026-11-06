<script lang="ts">
  import ContactPage from "#lib/components/pages/ContactPage.svelte"
  import { type ContactPageType, Language } from "#lib/types/index.ts"
  export let data: ContactPageType
</script>

<ContactPage {data} language={Language.Swedish} />
