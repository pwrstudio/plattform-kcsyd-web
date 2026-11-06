<script lang="ts">
  import X from "#lib/graphics/X.svelte"
  import { UIColor } from "#lib/types/index.ts"
  interface Props {
    color?: UIColor
  }

  let { color = UIColor.Black }: Props = $props()
</script>

<div class="menu-toggle">
  <X {color} />
</div>

<style lang="scss">
  @use "src/lib/style/variables.scss" as *;

  .menu-toggle {
    position: fixed;
    z-index: 1001;
    cursor: pointer;

    top: 25px;
    right: 20px;

    @include screen-size("small") {
      top: 80px;
    }
  }
</style>
