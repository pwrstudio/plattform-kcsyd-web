<script lang="ts">
  import X from "#lib/components/X.svelte"
  import Menu from "#lib/components/Menu.svelte"
  import Marquee from "#lib/components/Marquee.svelte"
  import { menuActive } from "#lib/stores/index.ts"

  let { data, children } = $props();
  const { splash } = data

  const closeMenu = () => {
    menuActive.set(false)
  }
</script>

<div class="phone-marquee">
  <Marquee />
</div>

{#if $menuActive}
  <span onclick={closeMenu}>
    <X />
  </span>
  <Menu {splash} />
{/if}

{@render children?.()}

<style lang="scss">
  @import "src/lib/style/variables.scss";

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
