<script lang="ts">
  interface Project {
    _id: string
    title: string
  }

  interface Projects {
    [index: number]: Project
  }

  export let data: Projects
  console.log(data)
</script>

<h1>PROJEKT</h1>

{#each Object.values(data) as projekt (projekt._id)}
  <a href={"/projekt/" + projekt.slug.current}>{projekt.title}</a>
{/each}

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
