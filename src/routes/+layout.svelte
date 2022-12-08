<script lang="ts">
  import Menu from "$lib/components/Menu.svelte"
  import X from "$lib/graphics/X.svelte"
  import Hamburger from "$lib/graphics/Hamburger.svelte"

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
    <X />
  {:else}
    <Hamburger />
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
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
</style>
