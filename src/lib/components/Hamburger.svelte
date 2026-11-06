<script lang="ts">
  import Hamburger from "#lib/graphics/Hamburger.svelte"
  import { UIColor } from "#lib/types/index.ts"
  interface Props {
    color?: UIColor
    label: string
    onclick: () => void
  }

  let { color = UIColor.Black, label, onclick }: Props = $props()
</script>

<button type="button" class="menu-toggle" aria-label={label} {onclick}>
  <Hamburger {color} />
</button>

<style lang="scss">
  @use "src/lib/style/variables.scss" as *;

  .menu-toggle {
    @include button-reset;
    display: block;
    position: fixed;
    top: 30px;
    right: 15px;
    z-index: 1000;
    cursor: pointer;

    &.x {
      top: 25px;
      right: 20px;
    }

    @include screen-size("small") {
      top: 80px;
    }
  }
</style>
