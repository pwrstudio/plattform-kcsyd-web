<script lang="ts">
  import ContactPage from "#lib/components/pages/ContactPage.svelte"
  import { type ContactPageType, Language } from "#lib/types/index.ts"
  interface Props {
    data: ContactPageType;
  }

  let { data }: Props = $props();
</script>

<ContactPage {data} language={Language.English} />
