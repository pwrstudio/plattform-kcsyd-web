<div class="menu">
  <div class="inner">
    <a href="/om-plattform-kcsyd" data-sveltekit-preload-data>Plattform KcSyd</a
    >
    <a href="/konstnarer" data-sveltekit-preload-data>Konstnärer</a>
    <a href="/projekt" data-sveltekit-preload-data>Projekt</a>
    <a href="/information-kontakt" data-sveltekit-preload-data>
      Information / Kontakt
    </a>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
      text-align: center;
    }
  }
</style>
