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
  <div class="image">
    <img src={urlFor(data.mainImage).width(800).url()} alt={title} />
  </div>

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

    .image {
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
        max-height: 500px;
        object-fit: contain;
      }
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
