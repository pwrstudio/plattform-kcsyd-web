<script lang="ts">
  import { type ArtistType, Language } from "$lib/types"
  export let language: Language
  export let artists: ArtistType[]
  export let title: string
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

{#if artists.length > 0}
  <div class="item header">
    {title}
  </div>

  {#each artists as artist}
    <a
      href={urlPrefix + "konstnarer/" + artist.slug.current}
      class="item"
      data-sveltekit-preload-data
    >
      {artist.konstnarer.join(", ")}
      <span class="nationality">[{artist.nationalitet}]</span>
    </a>
  {/each}
{/if}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .item {
    padding-top: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid $black;
    width: 100%;
    display: block;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_LARGE;
    color: $black;
    text-decoration: none;

    @include screen-size("small") {
      font-size: $FONT_SIZE_MEDIUM;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &.header {
      font-size: $FONT_SIZE_MEDIUM;
      text-transform: uppercase;
      padding-top: 35px;
      padding-bottom: 10px;

      @include screen-size("small") {
        font-size: $FONT_SIZE_SMALL;
        padding-top: 15px;
      }
    }

    .nationality {
      position: relative;
      top: -10px;
      font-size: $FONT_SIZE_MEDIUM;

      @include screen-size("small") {
        font-size: $FONT_SIZE_SMALL;
        top: -6px;
      }
    }

    // &:hover {
    //   &.header {
    //     background: transparent;
    //   }
    //   background: $grey;
    // }
  }
</style>
