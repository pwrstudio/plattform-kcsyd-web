<script lang="ts">
  import { languageStore } from "#lib/stores/index.ts"
  import { Language } from "#lib/types/index.ts"
  languageStore.set(Language.English)
</script>

<slot />
