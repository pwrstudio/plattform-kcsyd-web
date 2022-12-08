<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  import { renderBlockText } from "$lib/modules/sanity.js"
  import { Language, type ArtistType } from "$lib/types"
  export let language: Language
  export let data: ArtistType
</script>

<div class="page">
  {#if language === Language.English}
    <img src={urlFor(data.mainImage).url()} alt={data.title_eng} />
    <h1>{data.title_eng}</h1>
    <p>{data.nationalitet}</p>
    <p>{data.tidskategori}</p>
    <div>{@html renderBlockText(data.content_eng.content)}</div>
  {:else}
    <img src={urlFor(data.mainImage).url()} alt={data.title} />
    <h1>{data.title}</h1>
    <p>{data.nationalitet}</p>
    <p>{data.tidskategori}</p>
    <div>{@html renderBlockText(data.content_sve.content)}</div>
  {/if}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    width: 50vw;
    min-height: 100vh;
    background: $black;
    color: $white;
    font-family: $ATLAS_STACK;
    padding-bottom: 5em;
  }
</style>
