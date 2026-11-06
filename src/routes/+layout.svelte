<script lang="ts">
  import { tick } from "svelte"
  import X from "#lib/components/X.svelte"
  import Menu from "#lib/components/Menu.svelte"
  import Marquee from "#lib/components/Marquee.svelte"
  import { menuActive, languageStore } from "#lib/stores/index.ts"
  import { Language } from "#lib/types/index.ts"

  import type { LayoutProps } from "./$types"

  let { data, children }: LayoutProps = $props()
  const splash = $derived(data.splash)

  const closeMenu = async () => {
    menuActive.set(false)
    // Return focus to the menu button, which re-renders once the menu closes
    await tick()
    document.querySelector<HTMLElement>("button.menu-toggle")?.focus()
  }

  const onkeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && $menuActive) closeMenu()
  }
</script>

<svelte:window {onkeydown} />

<div class="phone-marquee">
  <Marquee />
</div>

{#if $menuActive}
  <X
    onclick={closeMenu}
    label={$languageStore === Language.English ? "Close menu" : "Stäng meny"}
  />
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
