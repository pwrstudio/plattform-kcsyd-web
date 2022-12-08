<script lang="ts">
  import Marquee from "$lib/components/Marquee.svelte"
  import Slideshow from "$lib/components/Slideshow.svelte"
  import ArtistList from "$lib/components/ArtistList.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity"
  import { Language } from "$lib/types"
  export let language: Language
  export let data
  const {
    omKcSyd,
    hemsideBild,
    projektPagaende,
    konstnarerKommande,
    konstnarerTidigare,
  } = data
</script>

<!-- LEFT -->
<div class="column left">
  <div class="landing-page-image">
    <img src={urlFor(hemsideBild.mainImage).url()} alt="Plattform KcSyd" />
  </div>
  <div class="artists">
    {#if language == Language.English}
      <h2>Artists' profiles</h2>
      <ArtistList artists={konstnarerKommande} title="Upcoming" />
      <ArtistList artists={konstnarerTidigare} title="Previous" />
    {:else}
      <h2>Konstnärsprofiler</h2>
      <ArtistList artists={konstnarerKommande} title="Kommande" />
      <ArtistList artists={konstnarerTidigare} title="Tidigare" />
    {/if}
  </div>
</div>

<!-- CENTER -->
<div class="column center">
  <Marquee />
</div>

<!-- RIGHT -->
<div class="column right">
  <!-- TOP -->
  <div class="row top">
    {#if language == Language.English}
      {@html renderBlockText(omKcSyd.introt_eng?.content)}
      <a href="/en/om-plattform-kcsyd" data-sveltekit-preload-data>Read more</a>
    {:else}
      {@html renderBlockText(omKcSyd.intro_sve?.content)}
      <a href="/om-plattform-kcsyd" data-sveltekit-preload-data>Läs mer</a>
    {/if}
  </div>
  <!-- BOTTOM -->
  <div class="row bottom">
    <Slideshow projects={projektPagaende} />
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .column {
    height: 100vh;
    position: fixed;
    top: 0;

    &.left {
      left: 0;
      width: calc(50vw - 50px);
      background: $white;
      overflow-y: auto;
    }

    &.center {
      left: calc(50vw - 50px);
      width: 100px;
      background: $grey;
    }

    &.right {
      left: calc(50vw + 50px);
      width: calc(50vw - 50px);
      display: flex;
      flex-direction: column;
    }
  }

  .row {
    width: 100%;
    height: 50%;
    padding: 20px;

    &.top {
      background: $lime;
      font-family: $BARBARA_STACK;
      font-size: $FONT_SIZE_LARGE;

      a {
        color: inherit;
        text-decoration: none;
        border-bottom: 3px dotted black;
      }
    }

    &.bottom {
      background: $black;
    }
  }

  .landing-page-image {
    width: 100%;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .artists {
    margin-top: 20px;
    padding-bottom: 100px;
    min-height: 100vh;
    padding: 20px;

    h2 {
      font-weight: normal;
      font-size: $FONT_SIZE_LARGE;
      font-family: $BARBARA_STACK;
      text-transform: uppercase;
    }
  }
</style>
