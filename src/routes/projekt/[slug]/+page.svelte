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

  export let data: Project

  console.log(data)
</script>

<h1>{data.title}</h1>
<h1>{data.title_eng}</h1>

<div>{@html renderBlockText(data.content_sve.content)}</div>

<div>{@html renderBlockText(data.content_eng.content)}</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
