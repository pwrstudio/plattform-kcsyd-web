<script lang="ts">
  import ContactPage from "$lib/components/pages/ContactPage.svelte"
  import { type ContactPageType, Language } from "$lib/types"
  export let data: ContactPageType
</script>

<ContactPage {data} language={Language.English} />
