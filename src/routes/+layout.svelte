<script lang="ts">
  import { UIColorStore } from "$lib/stores"
  import Menu from "$lib/components/Menu.svelte"
  import X from "$lib/graphics/X.svelte"
  import Hamburger from "$lib/graphics/Hamburger.svelte"
  import { UIColor } from "$lib/types"
  import Marquee from "$lib/components/Marquee.svelte"

  export let data
  const { splash } = data

  let menuActive = false
  const toggleMenu = () => {
    menuActive = !menuActive
  }
</script>

<div class="phone-marquee">
  <Marquee />
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-toggle" on:click={toggleMenu}>
  {#if menuActive}
    <X white={$UIColorStore === UIColor.White} />
  {:else}
    <Hamburger white={$UIColorStore === UIColor.White} />
  {/if}
</div>

{#if menuActive}
  <Menu on:close={toggleMenu} />
{/if}

<slot />

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .menu-toggle {
    position: fixed;
    top: 30px;
    right: 15px;
    z-index: 1000;
    height: 25px;
    z-index: 1000;
    cursor: pointer;

    @include screen-size("small") {
      top: 80px;
    }
  }

  .phone-marquee {
    display: none;
    @include screen-size("small") {
      display: block;
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 999;
    background: $grey;
  }
</style>
