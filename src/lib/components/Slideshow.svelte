<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte"
  import "swiper/css"
  import { Language } from "$lib/types"
  import { urlFor } from "$lib/modules/sanity"
  import SmallArrowLeft from "$lib/graphics/SmallArrowLeft.svelte"
  import SmallArrowRight from "$lib/graphics/SmallArrowRight.svelte"
  export let language: Language
  export let projects: any[]
  const urlPrefix = language === Language.English ? "/en/" : "/"
</script>

<Swiper spaceBetween={50} slidesPerView={1}>
  {#each projects as project}
    <SwiperSlide>
      <a
        class="inner"
        href={urlPrefix + "projekt/" + project.slug.current}
        data-sveltekit-preload-data
      >
        <img
          src={urlFor(project.mainImage).saturation(-100).url()}
          alt={project.title}
        />
        <div class="caption">
          <div class="first-row">PÅGÅENDE PROJEKT</div>
          <div class="second-row">
            <div class="arrow"><SmallArrowLeft /></div>
            <div>
              {project.title}
            </div>
            <div class="arrow"><SmallArrowRight /></div>
          </div>
        </div>
      </a>
    </SwiperSlide>
  {/each}
</Swiper>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .inner {
    width: 100%;
    height: 45vh;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_SMALL;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: $white;
    padding-bottom: 10px;

    img {
      max-height: calc(100% - 40px);
      max-width: 90%;
    }

    .caption {
      width: 100%;
      text-align: center;

      .second-row {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        .arrow {
          height: 8px;
          width: 8px;
        }
      }
    }
  }

  :global(.swiper) {
    height: 100%;
  }
</style>
