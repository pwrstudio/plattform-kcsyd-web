<script lang="ts">
  import { swiper } from "#lib/actions/swiper.ts"
  import Image from "#lib/components/Image.svelte"
  import { Language } from "#lib/types/index.ts"
  import SmallArrowLeft from "#lib/graphics/SmallArrowLeft.svelte"
  import SmallArrowRight from "#lib/graphics/SmallArrowRight.svelte"
  interface Props {
    language: Language;
    slides: any[];
  }

  let { language, slides }: Props = $props();
</script>

<div class="swiper" use:swiper={{ spaceBetween: 50, slidesPerView: 1, loop: true }}>
  <div class="swiper-wrapper">
    {#each slides as slide}
      {@const caption =
        (language === Language.English
          ? slide.bildtext_eng
          : slide.bildtext_sve) || ""}
      <div class="swiper-slide">
        <div class="inner">
          <div class="image">
            <Image imageDyad={slide} {caption} />
          </div>
          <div class="caption">
            <div class="arrow"><SmallArrowLeft /></div>
            <div>{caption}</div>
            <div class="arrow"><SmallArrowRight /></div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "src/lib/style/variables.scss" as *;

  .inner {
    width: 100%;
    height: calc(100% - 20px);
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_SMALL;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: $white;

    @include screen-size("small") {
      height: auto;
      padding-bottom: 10px;
    }

    img {
      max-width: 100%;
    }

    .caption {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      .arrow {
        height: 8px;
        width: 8px;
      }
    }
  }

  :global(.swiper) {
    height: 100%;
  }

  :global(.inner img) {
    max-width: 100%;
  }
</style>
