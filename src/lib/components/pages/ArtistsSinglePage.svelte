<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ArtistType } from "$lib/types"
  export let language: Language
  export let data: ArtistType
  const title = language === Language.English ? data.title_eng : data.title
  const content =
    language === Language.English
      ? data.content_eng.content
      : data.content_sve.content
  const caption =
    language === Language.English
      ? data.mainImage.bildtext_eng || ""
      : data.mainImage.bildtext_sve || ""
  console.log(data)
</script>

<div class="single-artist">
  <img src={urlFor(data.mainImage).url()} alt={title} />
  {#if caption.length > 0}
    <figcaption>{caption}</figcaption>
  {/if}
  <h1>{title}</h1>
  <div>{@html renderBlockText(content)}</div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .single-artist {
    font-family: $ATLAS_STACK;

    h1 {
      font-size: $FONT_SIZE_MEDIUM;
      font-weight: normal;
      text-transform: uppercase;
    }

    img {
      max-width: 100%;
    }

    figcaption {
      font-size: $FONT_SIZE_SMALL;
      width: 100%;
      text-align: center;
      margin-top: 5px;
      margin-bottom: 25px;
    }
  }
</style>
