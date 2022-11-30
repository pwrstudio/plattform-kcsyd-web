<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  interface ContactPage {
    info_sve: any
    info_eng: any
    content_sve: any
    content_eng: any
  }

  export let data: ContactPage

  console.log(data)
</script>

<h1>INFORMATION KONTAKT</h1>

<div>{@html renderBlockText(data.info_sve.content)}</div>

<div>{@html renderBlockText(data.info_eng.content)}</div>

<div>{@html renderBlockText(data.content_sve.content)}</div>

<div>{@html renderBlockText(data.content_eng.content)}</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";
</style>
