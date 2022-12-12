<script lang="ts">
  import { onMount } from "svelte"
  import Marquee from "$lib/components/Marquee.svelte"
  import Slideshow from "$lib/components/Slideshow.svelte"
  import ArtistList from "$lib/components/ArtistList.svelte"
  import LargeArrowDown from "$lib/graphics/LargeArrowDown.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity"
  import { Language, MainPageType } from "$lib/types"

  export let mainPageType: MainPageType
  export let language: Language
  export let data
  const {
    omKcSyd,
    hemsideBild,
    projektPagaende,
    konstnarerKommande,
    konstnarerTidigare,
  } = data

  let artistsEl: HTMLElement

  function scrollDown() {
    artistsEl.scrollIntoView({ behavior: "smooth" })
  }

  onMount(async () => {
    if (
      mainPageType === MainPageType.Listing ||
      mainPageType === MainPageType.Single
    ) {
      artistsEl.scrollIntoView()
    }
  })
</script>

<!-- RIGHT -->
<div class="column right">
  <!-- TOP -->
  <div class="row top">
    {#if language == Language.English}
      {@html renderBlockText(omKcSyd.intro_eng?.content)}
      <a href="/en/om-plattform-kcsyd" data-sveltekit-preload-data>Read more</a>
    {:else}
      {@html renderBlockText(omKcSyd.intro_sve?.content)}
      <a href="/om-plattform-kcsyd" data-sveltekit-preload-data>Läs mer</a>
    {/if}
  </div>
  <!-- BOTTOM -->
  <div class="row bottom">
    <Slideshow projects={projektPagaende} {language} />
  </div>
</div>

<!-- LEFT -->
<div class="column left">
  <div class="landing-page-image" on:click={scrollDown}>
    <img src={urlFor(hemsideBild.mainImage).url()} alt="Plattform KcSyd" />
    <div class="arrow-down">
      <LargeArrowDown />
    </div>
  </div>
  <div class="artists" bind:this={artistsEl}>
    {#if mainPageType === MainPageType.Single}
      <slot />
    {:else if language == Language.English}
      <h2>Artists' profiles</h2>
      <ArtistList artists={konstnarerKommande} title="Upcoming" {language} />
      <ArtistList artists={konstnarerTidigare} title="Previous" {language} />
    {:else}
      <h2>Konstnärsprofiler</h2>
      <ArtistList artists={konstnarerKommande} title="Kommande" {language} />
      <ArtistList artists={konstnarerTidigare} title="Tidigare" {language} />
    {/if}
  </div>
</div>

<!-- CENTER -->
<div class="column center">
  <Marquee />
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .column {
    height: 100vh;
    position: fixed;
    top: 0;

    @include screen-size("small") {
      height: auto;
      position: static;
    }

    &.left {
      left: 0;
      width: calc(50vw - 47px);
      background: $white;
      overflow-y: auto;

      @include screen-size("small") {
        left: unset;
        width: 100%;
      }
    }

    &.center {
      left: calc(50vw - 47px);
      width: 94px;
      background: $grey;

      @include screen-size("small") {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 70px;
        z-index: 100;
      }
    }

    &.right {
      left: calc(50vw + 47px);
      width: calc(50vw - 47px);
      display: flex;
      flex-direction: column;

      @include screen-size("small") {
        left: unset;
        width: 100%;
      }
    }
  }

  .row {
    width: 100%;
    height: 50%;
    padding: 35px;

    &.top {
      background: $lime;
      font-family: $BARBARA_STACK;
      font-size: $FONT_SIZE_LARGE;
      overflow-y: auto;

      a {
        color: inherit;
        text-decoration: none;
        border-bottom: 3px dotted black;

        &:hover {
          border-bottom: 3px dotted transparent;
        }
      }
    }

    &.bottom {
      background: $black;
    }
  }

  .landing-page-image {
    width: 100%;
    height: 100vh;
    position: realtive;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include screen-size("small") {
      display: none;
    }

    .arrow-down {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .artists {
    margin-top: 20px;
    padding-bottom: 100px;
    min-height: 100vh;
    padding: 35px;

    h2 {
      font-weight: normal;
      font-size: $FONT_SIZE_LARGE;
      font-family: $BARBARA_STACK;
      text-transform: uppercase;
      margin-bottom: 0;
      user-select: none;
      padding: 0;
    }
  }

  :global(.row.top p:first-child) {
    margin-top: 0;
  }

  :global(.row.top h1, h2, h3) {
    font-size: $FONT_SIZE_LARGE;
    margin-top: 0;
  }
</style>
