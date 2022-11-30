<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"

  interface Artist {
    _id: string
    title: string
    title_eng: string
    content_sve: any
    content_eng: any
    tidskategori: string
    nationalitet: string
    konstnarer: string[]
    mainImage: any
    slug: {
      type: "slug"
      current: string
    }
  }

  export let data: Artist
  console.log(data)
</script>

<h1>{data.title}</h1>
<h1>{data.title_eng}</h1>
<p>{data.nationalitet}</p>
<p>{data.tidskategori}</p>

<div>{@html renderBlockText(data.content_sve.content)}</div>

<div>{@html renderBlockText(data.content_eng.content)}</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
