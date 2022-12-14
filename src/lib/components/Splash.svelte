<script lang="ts">
  import Image from "$lib/components/Image.svelte"
  import { fade } from "svelte/transition"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  const close = () => {
    dispatch("close")
  }

  export let splash: any
</script>

<div class="splash" on:click={close} out:fade>
  <Image imageDyad={splash.mainImage} />
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .splash {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 65px 100px;
    background: $lime;
    z-index: 10000;
  }
</style>
