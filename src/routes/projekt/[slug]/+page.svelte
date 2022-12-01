<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"

  interface Project {
    _id: string
    title: string
    title_eng: string
    content_sve: any
    content_eng: any
    layout: string
    tidskategori: string
    kategori_sve: string
    kategori_eng: string
    mainImage: any
    slug: {
      type: "slug"
      current: string
    }
    bildspel?: any[]
  }

  export let data: { project: Project }
  const { project } = data
  console.log(project)
</script>

<div class="page">
  <h1>{project.layout}</h1>
  <h1>{project.title}</h1>
  <h1>{project.title_eng}</h1>

  <div>{@html renderBlockText(project.content_sve.content)}</div>

  <div>{@html renderBlockText(project.content_eng.content)}</div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .page {
    background: $black;
    color: $white;
  }
</style>
