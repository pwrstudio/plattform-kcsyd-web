<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  export let imageDyad: any = {}
  export let caption: string = ""
  export let width: number
  export let height: number
</script>

{#if imageDyad.dither}
  <img src={urlFor(imageDyad.dither).url()} alt={caption} />
{:else if imageDyad.bild}
  <img src={urlFor(imageDyad.bild).saturation(-100).url()} alt={caption} />
{/if}
