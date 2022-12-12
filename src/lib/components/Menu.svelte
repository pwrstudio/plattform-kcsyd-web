<script lang="ts">
  import { fade } from "svelte/transition"
  import { quadOut } from "svelte/easing"
  import Splash from "$lib/components/Splash.svelte"
  import { languageStore } from "$lib/stores"
  import { Language } from "$lib/types"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  export let splash: any

  let splashOpen = false
  const closeSplash = () => {
    splashOpen = false
  }
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

{#if splash.mainImage && splashOpen}
  <Splash {splash} on:close={closeSplash} />
{/if}

<div class="menu" in:fade={{ easing: quadOut, duration: 400 }}>
  <div class="language-switch">
    <span
      class="language-option"
      class:selected={$languageStore === Language.Swedish}
      on:click={() => {
        languageStore.set(Language.Swedish)
      }}
    >
      SVE
    </span>
    <span class="slash">/</span>
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
      <a href={item.link} data-sveltekit-preload-data>
        {item.title}
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .language-switch {
    position: absolute;
    top: 30px;
    left: 180px;
    font-size: $FONT_SIZE_LARGE;
    user-select: none;
    cursor: pointer;

    .language-option {
      &.selected {
        border-bottom: 1px solid black;
      }
    }

    .slash {
      display: inline-block;
      padding-left: 3px;
      padding-right: 3px;
    }
  }

  .menu {
    font-family: $BARBARA_STACK;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $grey;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @include screen-size("small") {
      top: 70px;
      height: calc(100vh - 70px);
    }

    .inner {
      width: calc(100vw - 360px);
      max-width: 95vw;

      a {
        font-size: $FONT_SIZE_XLARGE;
        line-height: 1em;
        display: block;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid black;
        padding: 10px 0;
        user-select: none;

        @include screen-size("small") {
          font-size: $FONT_SIZE_LARGE;
        }
      }
    }
  }
</style>
