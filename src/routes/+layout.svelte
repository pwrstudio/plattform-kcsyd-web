<script lang="ts">
  import { UIColorStore } from "$lib/stores"
  import Menu from "$lib/components/Menu.svelte"
  import X from "$lib/graphics/X.svelte"
  import Hamburger from "$lib/graphics/Hamburger.svelte"
  import { UIColor } from "$lib/types"

  export let data
  const { splash } = data

  let menuActive = false
  const toggleMenu = () => {
    menuActive = !menuActive
  }
</script>

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
  }
</style>
