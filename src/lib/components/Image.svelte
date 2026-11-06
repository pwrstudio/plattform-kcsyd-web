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

  let url = $state("")
  let imageObj = imageDyad.dither ? imageDyad.dither : imageDyad.bild

  if (width > 0 && height > 0) {
    url = urlFor(imageObj)
      .width(width)
      .height(height)
      .auto("format")
      .saturation(-100)
      .url()
  } else if (width > 0) {
    url = urlFor(imageObj).width(width).auto("format").saturation(-100).url()
  } else if (height > 0) {
    url = urlFor(imageObj).height(height).auto("format").saturation(-100).url()
  } else {
    url = urlFor(imageObj).auto("format").saturation(-100).url()
  }
</script>

<img src={url} alt={caption} />

<style lang="scss">
  img {
    max-width: 100%;
  }
</style>
