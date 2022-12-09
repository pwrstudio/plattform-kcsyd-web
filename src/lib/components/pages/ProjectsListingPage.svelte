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
      ? "Archive/documentation*"
      : "Arkiv/dokumentation*"
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

<div class="page">
  <div class="inner">
    <!-- ONGOING -->
    <div class="section">
      <div class="section-header">{onGoingHeader}</div>
      {#each projektPagaende as project (project._id)}
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
      {#each projektArkivDokumentation as project (project._id)}
        {@const category =
          language === Language.English
            ? project.kategori_eng
            : project.kategori_sve}
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
    padding: 20px;
    font-size: $FONT_SIZE_MEDIUM;

    .inner {
      width: 1020px;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;

      .section {
        display: inline-block;
        width: 100%;
        margin-bottom: 40px;
        border-bottom: 1px solid white;

        .section-header {
          border-bottom: 1px solid white;
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .project {
          width: 25%;
          border-left: 1px solid white;
          color: white;
          text-decoration: none;
          padding: 10px;
          display: block;
          float: left;
          height: 360px;
          margin-bottom: 20px;

          @include screen-size("small") {
            width: 50%;
            height: 260px;
          }

          // &:nth-child(3) {
          //   border-right: 1px solid black;
          // }

          .category {
            font-size: $FONT_SIZE_SMALL;
            margin-bottom: 5px;
          }

          .image {
            margin-bottom: 10px;
            img {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
</style>
