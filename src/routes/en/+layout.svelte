<script lang="ts">
  import { languageStore } from "#lib/stores/index.ts"
  import { Language } from "#lib/types/index.ts"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
  languageStore.set(Language.English)
</script>

{@render children?.()}
