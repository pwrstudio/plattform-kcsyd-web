<script lang="ts">
  import { UIColorStore } from "$lib/stores"
  import { UIColor } from "$lib/types"
  UIColorStore.set(UIColor.White)
</script>

<slot />
