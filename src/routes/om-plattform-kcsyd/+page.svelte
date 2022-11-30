<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"

  interface AboutPage {
    title: string
    title_eng: string
    intro_sve: any
    introt_eng: any
    content_sve: any
    content_eng: any
  }

  export let data: AboutPage

  console.log(data)
</script>

<h1>OM PLATTFORM KCSYD</h1>

<div>{data.title}</div>
<div>{data.title_eng}</div>

<div>{@html renderBlockText(data.intro_sve.content)}</div>

<div>{@html renderBlockText(data.introt_eng.content)}</div>

<div>{@html renderBlockText(data.content_sve.content)}</div>

<div>{@html renderBlockText(data.content_eng.content)}</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
