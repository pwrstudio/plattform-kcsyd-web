<script lang="ts">
  import Marquee from "$lib/components/Marquee.svelte"
  import Slideshow from "$lib/components/Slideshow.svelte"
  import ArtistList from "$lib/components/ArtistList.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity"

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
    <div>Konstnärsprofiler</div>
    <ArtistList artists={konstnarerKommande} title="Kommande" />
    <ArtistList artists={konstnarerTidigare} title="Tidigare" />
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
    {@html renderBlockText(omKcSyd.intro_sve?.content)}
    <a href="om-plattform-kcsyd" data-sveltekit-preload-data>Läs mer</a>
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
  }
</style>
