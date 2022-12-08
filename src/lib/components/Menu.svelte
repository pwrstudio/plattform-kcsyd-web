<script lang="ts">
  import { fade } from "svelte/transition"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  const closeMenu = () => {
    dispatch("close")
  }

  const menuItems = [
    {
      title: "Plattform KcSyd",
      link: "/om-plattform-kcsyd",
    },
    {
      title: "Konstforum",
      link: "https://www.google.com",
    },
    {
      title: "Pågående projekt / Arkiv / Dokumentation",
      link: "/projekt",
    },
    {
      title: "Konstnärer",
      link: "/projekt",
    },
    {
      title: "Information / Kontakt",
      link: "/information-kontakt",
    },
  ]
</script>

<div class="menu" transition:fade>
  <div class="language-switch">
    <span class="language-option" class:selected={true}>SVE</span>/
    <span class="language-option" class:selected={false}>ENG</span>
  </div>

  <div class="inner">
    {#each menuItems as item}
      <a href={item.link} data-sveltekit-preload-data on:click={closeMenu}>
        {item.title}
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .language-switch {
    position: absolute;
    top: 20px;
    left: 10vw;
    font-size: $FONT_SIZE_LARGE;

    .language-option {
      &.selected {
        border-bottom: 1px solid black;
      }
    }
  }

  .menu {
    font-family: $BARBARA_STACK;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .inner {
      width: 80vw;
      a {
        font-size: $FONT_SIZE_XLARGE;
        display: block;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid black;
        padding: 10px 0;
      }
    }
  }
</style>
