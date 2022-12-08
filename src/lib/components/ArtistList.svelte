<script lang="ts">
  export let artists: any[]
  export let title
</script>

{#if artists.length > 0}
  <div class="item header">
    {title}
  </div>

  {#each artists as artist}
    <a href={"konstnarer/" + artist.slug.current} class="item">
      {artist.konstnarer.join(", ")}
      <span class="nationality">[{artist.nationalitet}]</span>
    </a>
  {/each}
{/if}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .item {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid $black;
    width: 100%;
    display: block;
    font-family: $ATLAS_STACK;
    font-size: $FONT_SIZE_LARGE;
    color: $black;
    text-decoration: none;

    &.header {
      font-size: $FONT_SIZE_MEDIUM;
    }

    .nationality {
      position: relative;
      top: -10px;
      font-size: $FONT_SIZE_MEDIUM;
    }
  }
</style>
