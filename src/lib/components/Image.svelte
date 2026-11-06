<script lang="ts">
  import { urlFor } from "#lib/modules/sanity.js"
  interface Props {
    imageDyad?: any;
    caption?: string;
    width?: number;
    height?: number;
  }

  let {
    imageDyad = {},
    caption = "",
    width = 0,
    height = 0
  }: Props = $props();

  const url = $derived.by(() => {
    let builder = urlFor(imageDyad.dither ? imageDyad.dither : imageDyad.bild)
    if (width > 0) builder = builder.width(width)
    if (height > 0) builder = builder.height(height)
    return builder.auto("format").saturation(-100).url()
  })
</script>

<img src={url} alt={caption} />

<style lang="scss">
  img {
    max-width: 100%;
  }
</style>
