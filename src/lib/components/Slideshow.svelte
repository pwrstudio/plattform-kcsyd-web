<script lang="ts">
  import { swiper } from "#lib/actions/swiper.ts"
  import { Language } from "#lib/types/index.ts"
  import Image from "#lib/components/Image.svelte"
  import SmallArrowLeft from "#lib/graphics/SmallArrowLeft.svelte"
  import SmallArrowRight from "#lib/graphics/SmallArrowRight.svelte"
  interface Props {
    language: Language;
    projects: any[];
  }

  let { language, projects }: Props = $props();
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

<div class="swiper" use:swiper={{ spaceBetween: 50, slidesPerView: 1, loop: true }}>
  <div class="swiper-wrapper">
    {#each projects as project}
      <div class="swiper-slide">
        <a
          class="inner"
          href={urlPrefix + "projekt/"}
          data-sveltekit-preload-data
        >
          <Image
            imageDyad={project.mainImage}
            caption="{project.title}}"
            width={600}
          />
          <div class="caption">
            <div class="first-row">
              {language === Language.English
                ? "ONGOING PROJECT"
                : "PÅGÅENDE PROJEKT"}
            </div>
            <div class="second-row">
              <div class="arrow"><SmallArrowLeft /></div>
              <div>
                {language === Language.English
                  ? project.title_eng
                  : project.title}
              </div>
              <div class="arrow"><SmallArrowRight /></div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .inner {
    width: 100%;
    height: calc(50vh - 70px);
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_SMALL;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: $white;

    img {
      max-height: calc(100% - 40px);
      max-width: 90%;
      user-select: none;
    }

    .caption {
      width: 100%;
      text-align: center;
      user-select: none;

      .second-row {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        .arrow {
          height: 7px;
          width: 7px;
        }
      }
    }
  }

  :global(.swiper) {
    height: 100%;
  }

  :global(.swiper .inner img) {
    // max-height: calc(100vh - 200px);
    max-height: 80%;
    max-width: 100%;
    user-select: none;
  }
</style>
