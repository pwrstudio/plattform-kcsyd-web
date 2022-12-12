<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: {
    projektPagaende: ProjectType[]
    projektArkivDokumentation: ProjectType[]
  }
  const { projektPagaende, projektArkivDokumentation } = data

  const onGoingHeader =
    language === Language.English ? "Ongoing" : "Pågående projekt"
  const pastHeader =
    language === Language.English
      ? "Archive / documentation*"
      : "Arkiv / dokumentation*"
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

<div class="page">
  <div class="inner">
    <!-- ONGOING -->
    <div class="section">
      <div class="section-header">{onGoingHeader}</div>
      {#each projektPagaende as project, i (project._id)}
        {#if i > 0 && i % 4 === 0}
          <div class="desktop-divider" />
        {/if}
        {#if i > 0 && i % 2 === 0}
          <div class="phone-divider" />
        {/if}
        <a class="project" href={urlPrefix + "projekt/" + project.slug.current}>
          <div class="image">
            <img
              src={urlFor(project.mainImage)
                .width(400)
                .height(300)
                .saturation(-100)
                .url()}
              alt={project.title}
            />
          </div>
          <div class="title">{project.title}</div>
        </a>
      {/each}
    </div>

    <!-- ARCHIVE -->
    <div class="section">
      <div class="section-header">{pastHeader}</div>
      {#each projektArkivDokumentation as project, i (project._id)}
        {@const category =
          language === Language.English
            ? project.kategori_eng
            : project.kategori_sve}
        {#if i > 0 && i % 4 === 0}
          <div class="desktop-divider" />
        {/if}
        {#if i > 0 && i % 2 === 0}
          <div class="phone-divider" />
        {/if}
        <a
          class="project"
          data-sveltekit-preload-data
          href={urlPrefix + "projekt/" + project.slug.current}
        >
          <div class="image">
            <img
              src={urlFor(project.mainImage)
                .width(400)
                .height(300)
                .saturation(-100)
                .url()}
              alt={project.title}
            />
          </div>
          <div class="category">{category}</div>
          <div class="title">{project.title}</div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    background: $black;
    color: $white;
    font-family: $ATLAS_STACK;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    font-size: $FONT_SIZE_MEDIUM;

    .inner {
      width: 1040px;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;
      padding-top: 35px;

      @include screen-size("small") {
        padding-top: 90px;
      }

      .section {
        display: inline-block;
        width: 100%;
        margin-bottom: 40px;
        border-bottom: 1px solid white;

        .section-header {
          border-bottom: 1px solid white;
          width: 100%;
          padding-bottom: 15px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .phone-divider {
          width: 100%;
          height: 1px;
          background: $white;
          float: left;
          margin-bottom: 20px;
          display: none;

          @include screen-size("small") {
            display: block;
          }
        }

        .desktop-divider {
          width: 100%;
          height: 1px;
          background: $white;
          float: left;
          margin-bottom: 20px;
          display: block;

          @include screen-size("small") {
            display: none;
          }
        }

        .project {
          width: 25%;
          border-left: 1px solid white;
          color: white;
          text-decoration: none;
          padding: 0 15px;
          display: block;
          float: left;
          height: 290px;
          margin-bottom: 20px;
          border-right: 1px solid white;

          // &:nth-of-type(4n) {
          // }

          // &:last-of-type {
          //   border-right: 1px solid white;
          // }

          @include screen-size("small") {
            width: 50%;
            height: 300px;
          }

          .category {
            font-size: $FONT_SIZE_SMALL;
            margin-bottom: 5px;
          }

          .image {
            margin-top: 0;
            margin-bottom: 15px;
            height: 180px;
            width: 100%;

            @include screen-size("small") {
              height: 140px;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              margin-top: 0;
            }
          }
        }
      }
    }
  }
</style>
