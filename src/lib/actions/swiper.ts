import Swiper from "swiper"
import type { SwiperOptions } from "swiper/types"
import "swiper/css"

// Svelte action replacing the removed `swiper/svelte` components.
// Expects markup: <div class="swiper" use:swiper><div class="swiper-wrapper"><div class="swiper-slide">…
export function swiper(node: HTMLElement, options: SwiperOptions = {}) {
  const instance = new Swiper(node, options)
  return {
    destroy() {
      instance.destroy(true, true)
    },
  }
}
