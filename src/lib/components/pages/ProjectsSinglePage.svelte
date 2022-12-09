<script lang="ts">
  import LargeArrowLeft from "$lib/graphics/LargeArrowLeft.svelte"
  import LargeArrowRight from "$lib/graphics/LargeArrowRight.svelte"
  import SingleProjectSlideshow from "$lib/components/SingleProjectSlideshow.svelte"
  import SingleProjectImage from "$lib/components/SingleProjectImage.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import { Language, type ProjectType } from "$lib/types"
  export let language: Language
  export let data: { project: ProjectType; projectList: ProjectType[] }
  const { project, projectList } = data

  const title =
    language === Language.English ? project.title_eng : project.title

  const content =
    language === Language.English
      ? project.content_eng.content
      : project.content_sve.content

  const category =
    language === Language.English ? project.kategori_eng : project.kategori_sve

  const urlPrefix = language === Language.English ? "/en/" : "/"

  const timeCategoryHeader = () => {
    if (language === Language.English) {
      if (project.tidskategori === "pagaende-projekt") return "Ongoing project"
      return "Archive/documentation*"
    }
    if (language === Language.Swedish) {
      if (project.tidskategori === "pagaende-projekt") return "Pågående projekt"
      return "Arkiv/dokumentation*"
    }
  }

  const projectIndex = projectList.findIndex(
    (p: ProjectType) => p._id === project._id
  )

  let prevProjectLink =
    urlPrefix +
    "projekt/" +
    (projectIndex === 0
      ? projectList[projectList.length - 1].slug.current
      : projectList[projectIndex - 1].slug.current)

  let nextProjectLink =
    urlPrefix +
    "projekt/" +
    (projectIndex === projectList.length - 1
      ? projectList[0].slug.current
      : projectList[projectIndex + 1].slug.current)
</script>

<div class="page">
  <a
    href={prevProjectLink}
    class="page-navigation prev"
    data-sveltekit-preload-data
    data-sveltekit-reload
  >
    <LargeArrowLeft />
  </a>
  <a
    href={nextProjectLink}
    class="page-navigation next"
    data-sveltekit-preload-data
    data-sveltekit-reload
  >
    <LargeArrowRight />
  </a>
  <div class="inner">
    <div class="top-bar">{timeCategoryHeader()}</div>

    <div class="content" class:double={project.layout === "alt2"}>
      {#if project.layout === "alt2"}
        <div class="hero">
          <img
            src={urlFor(project.mainImage).saturation(-100).url()}
            alt={title}
          />
        </div>
      {/if}

      <div class="column left">
        {#if project.layout === "alt1" || project.layout === "alt2"}
          {#if project.bildspel && project.bildspel.length > 0}
            <SingleProjectSlideshow slides={project.bildspel} {language} />
          {:else}
            <SingleProjectImage {project} {language} />
          {/if}
        {/if}

        {#if project.layout === "alt3"}
          <div class="category">{category}</div>
          <div class="rubrik-text">
            {Language.English ? project.rubriktext_eng : project.rubriktext_sve}
          </div>
        {/if}
      </div>

      <div class="column right">
        <div class="category">{category}</div>
        <h1>{title}</h1>
        <div>{@html renderBlockText(content)}</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: $black;
    color: $white;
    height: 100vh;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_LARGE;
    padding-bottom: 5em;

    @include screen-size("small") {
      overflow-y: auto;
    }

    .page-navigation {
      width: 40px;
      height: 40px;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      display: block;

      @include screen-size("small") {
        display: none;
      }

      &.next {
        right: 10px;
      }

      &.prev {
        left: 10px;
      }
    }

    .inner {
      width: 1020px;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;

      .top-bar {
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid $white;
        font-family: $ATLAS_STACK;
        font-size: $FONT_SIZE_MEDIUM;
        text-transform: uppercase;
      }

      .content {
        height: calc(100vh - 70px);
        overflow-y: auto;

        .hero {
          padding-top: 10px;
          width: 100%;
          height: calc(100vh - 70px);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .column {
          width: 50%;
          float: left;
          height: calc(100vh - 70px);
          margin-top: 10px;

          @include screen-size("small") {
            height: auto;
            width: 100%;
          }

          &.left {
            border-right: 1px solid $white;

            @include screen-size("small") {
              border-right: unset;
              border-bottom: 1px solid $white;
            }

            .category {
              font-size: $FONT_SIZE_MEDIUM;
            }

            .rubrik-text {
              font-family: $BARBARA_STACK;
              font-size: $FONT_SIZE_XLARGE;
            }
          }

          &.right {
            font-size: $FONT_SIZE_MEDIUM;
            padding: 10px;
            overflow-y: auto;

            .category {
              font-size: $FONT_SIZE_SMALL;
            }
          }
        }
      }
    }
  }

  :global(h1) {
    font-size: $FONT_SIZE_MEDIUM;
  }

  :global(.column a) {
    color: inherit;
  }
</style>
