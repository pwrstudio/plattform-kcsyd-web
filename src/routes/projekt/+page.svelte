<script lang="ts">
  interface Project {
    _id: string
    title: string
    slug: {
      _type: "slug"
      current: string
    }
  }

  export let data: { projekt: Project[] }
  const { projekt } = data
  console.log(projekt)
</script>

<h1>PROJEKT</h1>

{#each projekt as project (project._id)}
  <a href={"/projekt/" + project.slug.current}>{project.title}</a>
{/each}

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
