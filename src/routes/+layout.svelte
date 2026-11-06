<script lang="ts">
  import X from "#lib/components/X.svelte"
  import Menu from "#lib/components/Menu.svelte"
  import Marquee from "#lib/components/Marquee.svelte"
  import { menuActive } from "#lib/stores/index.ts"

  import type { LayoutProps } from "./$types"

  let { data, children }: LayoutProps = $props()
  const splash = $derived(data.splash)

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
  @use "src/lib/style/variables.scss" as *;

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
