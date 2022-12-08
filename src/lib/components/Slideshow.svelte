<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte"
  import "swiper/css"
  import { Language } from "$lib/types"
  import { urlFor } from "$lib/modules/sanity"
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
        <img src={urlFor(project.mainImage).url()} alt={project.title} />
        <div class="caption">{project.title}</div>
      </a>
    </SwiperSlide>
  {/each}
</Swiper>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .inner {
    width: 100%;
    height: 100%;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_SMALL;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 80%;
      max-height: 80%;
      max-width: 100%;
      max-height: 100%;
    }

    a {
      text-decoration: none;
      color: $white;
    }
  }
</style>
