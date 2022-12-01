<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  export let projects: any[]
</script>

{#each projects as project}
  <div class="slide">
    <a href={"projekt/" + project.slug.current} data-sveltekit-preload-data>
      <img src={urlFor(project.mainImage).url()} alt={project.title} />
      <div class="caption">{project.title}</div>
    </a>
  </div>
{/each}
