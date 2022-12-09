<script lang="ts">
  import { navigating, page } from "$app/stores"
  import { languageStore, UIColorStore } from "$lib/stores"
  import { Language, UIColor } from "$lib/types"
  import { fade } from "svelte/transition"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  const closeMenu = () => {
    dispatch("close")
  }

  UIColorStore.set(UIColor.Black)

  interface MenuItem {
    title: string
    link: string
  }

  const menuItems: {
    sve: MenuItem[]
    eng: MenuItem[]
  } = {
    sve: [
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
        link: "/konstnarer",
      },
      {
        title: "Information / Kontakt",
        link: "/information-kontakt",
      },
    ],
    eng: [
      {
        title: "About KcSyd",
        link: "/en/om-plattform-kcsyd",
      },
      {
        title: "Konstforum",
        link: "https://www.google.com",
      },
      {
        title: "Ongoing projects / Archive / Documentation",
        link: "/en/projekt",
      },
      {
        title: "Artists",
        link: "/en/konstnarer",
      },
      {
        title: "Information / Contact",
        link: "/en/information-kontakt",
      },
    ],
  }

  let activeMenuItems: MenuItem[]
  $: activeMenuItems =
    $languageStore === Language.English ? menuItems.eng : menuItems.sve
</script>

<div class="menu" transition:fade>
  <div class="language-switch">
    <span
      class="language-option"
      class:selected={$languageStore === Language.Swedish}
      on:click={() => {
        languageStore.set(Language.Swedish)
      }}
    >
      SVE
    </span>/
    <span
      class="language-option"
      class:selected={$languageStore === Language.English}
      on:click={() => {
        languageStore.set(Language.English)
      }}
    >
      ENG
    </span>
  </div>

  <div class="inner">
    {#each activeMenuItems as item}
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
    user-select: none;
    cursor: pointer;

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
    z-index: 100;

    .inner {
      width: 80vw;
      a {
        font-size: $FONT_SIZE_XLARGE;
        line-height: 1em;
        display: block;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid black;
        padding: 10px 0;
      }
    }
  }
</style>
