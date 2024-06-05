<script lang="ts">
  import { languageStore } from "$lib/stores"
  import { Language } from "$lib/types"
  languageStore.set(Language.English)

  console.log("english layout")
</script>

<slot />
