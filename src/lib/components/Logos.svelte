<script lang="ts">
  const logos = [
    {
      name: "Region Skåne",
      url: "/images/rs.png",
    },
    {
      name: "Kulturrådet",
      url: "/images/kr.png",
    },
    {
      name: "Malmö Stad",
      url: "/images/ms.png",
    },
    {
      name: "Konstfrämjandet Skåne",
      url: "/images/kf.png",
    },
  ]
</script>

{#each logos as logo}
  <div class="logo">
    <img src={logo.url} alt={logo.name} />
  </div>
{/each}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .logo {
    width: calc(25% - 10px);
    height: 100px;
    border-right: 1px solid $black;
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding-right: 10px;
    mix-blend-mode: multiply;
    font-size: $FONT_SIZE_SMALL;
    font-family: $ATLAS_STACK;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
      border-right: unset;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
