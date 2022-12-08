<div class="marquee">
  <div class="marquee-inner" aria-hidden="true">
    <div class="marquee-content">
      <div class="text-section">Plattform KcSyd</div>
      <div class="divider" />
      <div class="text-section">
        En konstnärsdriven plattform för offentlig konst i södra sverige
      </div>
      <div class="divider" />
    </div>
    <div class="marquee-content">
      <div class="text-section">Plattform KcSyd</div>
      <div class="divider" />
      <div class="text-section">
        En konstnärsdriven plattform för offentlig konst i södra sverige
      </div>
      <div class="divider" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .marquee {
    user-select: none;
    font-family: $ATLAS_STACK;
    width: 100vh;
    height: 90px;
    // background: red;
    transform-origin: bottom left;
    transform: translateY(-90px) rotateZ(90deg);
    position: relative;
    overflow: hidden;
    --offset: 20vw;
    --move-initial: -50%;
    --move-final: 0;

    .marquee-inner {
      width: fit-content;
      display: flex;
      position: relative;
      //   transform: translate3d(var(--move-initial), 0, 0);
      animation: marquee 10s linear infinite;
      animation-play-state: running;
      justify-content: center;
      align-items: center;
      //   background: blue;
      height: 100%;

      //   transform: translate3d(var(--move-initial), 0, 0);

      .marquee-content {
        min-width: 100vh;
        display: flex;

        .divider {
          width: 1px;
          background: black;
          margin-right: 20px;
          margin-left: 20px;
        }

        .text-section {
          padding: 20px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          white-space: nowrap;
        }
      }
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
</style>
