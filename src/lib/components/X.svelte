<script lang="ts">
  import X from "#lib/graphics/X.svelte"
  import { UIColor } from "#lib/types/index.ts"
  interface Props {
    color?: UIColor
    /** When set, renders a button with this accessible label */
    label?: string
    onclick?: () => void
  }

  let { color = UIColor.Black, label, onclick }: Props = $props()
</script>

{#if onclick}
  <button type="button" class="menu-toggle" aria-label={label} {onclick}>
    <X {color} />
  </button>
{:else}
  <div class="menu-toggle">
    <X {color} />
  </div>
{/if}

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

  button.menu-toggle {
    @include button-reset;
    display: block;
    position: fixed;
  }
</style>
