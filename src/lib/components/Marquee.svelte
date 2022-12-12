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
    height: 94px;
    transform-origin: bottom left;
    transform: translateY(-90px) rotateZ(90deg);
    position: relative;
    overflow: hidden;
    --offset: 20vw;
    --move-initial: -50%;
    --move-final: 0;

    @include screen-size("small") {
      transform: unset;
      height: 70px;
    }

    .marquee-inner {
      width: fit-content;
      display: flex;
      position: relative;
      animation: marquee 20s linear infinite;
      animation-play-state: running;
      justify-content: center;
      align-items: center;
      height: 100%;

      @include screen-size("small") {
        animation: marquee 30s linear infinite;
      }

      &:hover {
        animation-play-state: paused;
      }

      .marquee-content {
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

          @include screen-size("small") {
            padding: 10px;
          }
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
