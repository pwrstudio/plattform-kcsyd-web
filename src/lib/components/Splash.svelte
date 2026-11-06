<script lang="ts">
  import Image from "#lib/components/Image.svelte"
  import { fade } from "svelte/transition"
  import { languageStore } from "#lib/stores/index.ts"
  import { Language } from "#lib/types/index.ts"
  interface Props {
    splash: any
    onclose?: () => void
  }

  let { splash, onclose }: Props = $props()

  const close = () => onclose?.()
</script>

<button
  type="button"
  class="splash"
  aria-label={$languageStore === Language.English ? "Close" : "Stäng"}
  onclick={close}
  out:fade
>
  <Image imageDyad={splash.mainImage} width={500} />
</button>

<style lang="scss">
  @use "src/lib/style/variables.scss" as *;

  .splash {
    @include button-reset;
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 65px 100px;
    background: $lime;
    z-index: 10000;
  }

  :global(.splash img) {
    width: 500px;
  }
</style>
