<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  export let projects: any[]
</script>

{#each projects as project}
  <div class="slide">
    <a
      class="inner"
      href={"projekt/" + project.slug.current}
      data-sveltekit-preload-data
    >
      <img src={urlFor(project.mainImage).url()} alt={project.title} />
      <div class="caption">{project.title}</div>
    </a>
  </div>
{/each}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .slide {
    height: 100%;
    width: 100%;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_SMALL;

    .inner {
      height: 100%;
      width: 100%;

      img {
        max-width: 80%;
        max-height: 80%;
      }

      a {
        text-decoration: none;
        color: $white;
      }
    }
  }
</style>
