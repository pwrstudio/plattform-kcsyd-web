<script lang="ts">
  import Metadata from "$lib/components/Metadata.svelte"
  import { fade } from "svelte/transition"
  import { quadOut } from "svelte/easing"
  import { menuActive } from "$lib/stores"
  import { onMount } from "svelte"
  import Marquee from "$lib/components/Marquee.svelte"
  import Slideshow from "$lib/components/Slideshow.svelte"
  import ArtistList from "$lib/components/ArtistList.svelte"
  import Hamburger from "$lib/components/Hamburger.svelte"
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

  const openMenu = () => {
    menuActive.set(true)
  }

  const urlPrefix = language === Language.English ? "/en/" : "/"

  onMount(async () => {
    if (
      mainPageType === MainPageType.Listing ||
      mainPageType === MainPageType.Single
    ) {
      artistsEl.scrollIntoView()
    }
    menuActive.set(false)
  })
</script>

<Metadata />

{#if !$menuActive}
  <span on:click={openMenu}>
    <Hamburger />
  </span>
{/if}

<!-- RIGHT -->
<div
  class="column right"
  class:landing={mainPageType === MainPageType.Landing}
  in:fade={{ easing: quadOut, duration: 400 }}
>
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
<div class="column left" in:fade={{ easing: quadOut, duration: 400 }}>
  {#if mainPageType === MainPageType.Landing}
    <div class="landing-page-image" on:click={scrollDown}>
      <img
        src={urlFor(hemsideBild.mainImage).saturation(-100).url()}
        alt="Plattform KcSyd"
      />
      <div class="arrow-down">
        <LargeArrowDown />
      </div>
    </div>
  {/if}
  <div
    class="artists"
    class:solo={mainPageType !== MainPageType.Landing}
    bind:this={artistsEl}
  >
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
<a
  href={urlPrefix + "information-kontakt"}
  data-sveltekit-preload-data
  class="column center"
  in:fade={{ easing: quadOut, duration: 400 }}
>
  <Marquee />
</a>

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
      display: block;
      text-decoration: none;

      @include screen-size("small") {
        display: none;
      }
    }

    &.right {
      left: calc(50vw + 47px);
      width: calc(50vw - 47px);
      display: flex;
      flex-direction: column;

      @include screen-size("small") {
        display: none;
        &.landing {
          display: flex;
          left: unset;
          width: 100%;
        }
      }
    }
  }

  .row {
    width: 100%;
    height: 50%;
    padding: 35px;

    @include screen-size("small") {
      padding: 15px;
    }

    &.top {
      background: $lime;
      font-family: $BARBARA_STACK;
      font-size: $FONT_SIZE_LARGE;
      overflow-y: auto;

      @include screen-size("small") {
        padding-top: 85px;
        font-size: $FONT_SIZE_MEDIUM;
      }

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
    padding-bottom: 100px;
    min-height: 100vh;
    padding: 35px;

    @include screen-size("small") {
      padding: 15px;

      &.solo {
        padding-top: 85px;
      }
    }

    h2 {
      font-weight: normal;
      font-size: $FONT_SIZE_LARGE;
      font-family: $BARBARA_STACK;
      text-transform: uppercase;
      margin-bottom: 0;
      user-select: none;
      padding: 0;

      @include screen-size("small") {
        font-size: $FONT_SIZE_MEDIUM;
      }
    }
  }

  :global(.row.top p:first-child) {
    margin-top: 0;
  }

  :global(.row.top h1, h2, h3) {
    font-size: $FONT_SIZE_LARGE;
    margin-top: 0;
  }

  @include screen-size("small") {
    :global(.row.top h1, h2, h3) {
      font-size: $FONT_SIZE_MEDIUM;
    }
  }
</style>
