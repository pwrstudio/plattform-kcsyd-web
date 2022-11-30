<script lang="ts">
  interface Artist {
    _id: string
    title: string
  }

  interface Artists {
    [index: number]: Artist
  }

  export let data: Artists
  console.log(data)
</script>

<h1>KONSTNÄRER</h1>

{#each Object.values(data) as konstnar (konstnar._id)}
  <a href={"/konstnarer/" + konstnar.slug.current}>{konstnar.title}</a>
{/each}

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
