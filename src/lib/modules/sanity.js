// * * * * * * * * * * * * * * * * * * * * * * * * * * *
//
//  sanity.js =>
//  functions to work with the Sanity database
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

import { createClient } from "@sanity/client"
import { escapeHTML, toHTML, uriLooksSafe } from "@portabletext/to-html"
import { createImageUrlBuilder } from "@sanity/image-url"
import getVideoId from "get-video-id"

// const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_ID
const SANITY_PROJECT_ID = "1oasromd"

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-12-12", // use a UTC date string
  useCdn: true,
})

/**
 * Build an HTML tag. Attribute values are escaped; `true` renders a bare
 * boolean attribute and null/undefined/false are skipped.
 * @param {string} tag
 * @param {Record<string, string | boolean | null | undefined>} attrs
 * @param {string} [children]
 */
const el = (tag, attrs = {}, children = "") => {
  const attributes = Object.entries(attrs)
    .filter(([, value]) => value != null && value !== false)
    .map(([key, value]) =>
      value === true ? ` ${key}` : ` ${key}="${escapeHTML(String(value))}"`
    )
    .join("")
  return `<${tag}${attributes}>${children}</${tag}>`
}

/** Caption and credit lines shared by images and embeds. @param {any} value */
const figcaptions = value =>
  (value?.caption?.content
    ? el(
        "figcaption",
        { class: "caption" },
        escapeHTML(toPlainText(value.caption.content))
      )
    : "") +
  (value?.attribution
    ? el("figcaption", { class: "credits" }, escapeHTML(value.attribution))
    : "")

/** @param {any} value */
const renderEmbed = value => {
  const url = value?.url ?? ""
  if (url.includes("youtube")) {
    return el(
      "figure",
      { class: "youtube" },
      el(
        "div",
        { class: "embed-container" },
        el("iframe", {
          width: "720",
          height: "480",
          src: "https://www.youtube.com/embed/" + getVideoId(url).id,
          frameborder: "no",
          allow:
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: true,
        })
      ) + figcaptions(value)
    )
  }
  if (url.includes("vimeo")) {
    return el(
      "figure",
      { class: "vimeo" },
      el(
        "div",
        { class: "embed-container" },
        el("iframe", {
          width: "720",
          height: "480",
          src: "https://player.vimeo.com/video/" + getVideoId(url).id,
          frameborder: "no",
          allow: "autoplay; fullscreen",
          allowfullscreen: true,
        })
      ) + figcaptions(value)
    )
  }
  if (url.includes("soundcloud")) {
    return el(
      "figure",
      { class: "soundcloud" },
      el(
        "div",
        { class: "soundcloud-container" },
        el("iframe", {
          width: "100%",
          height: "300",
          src:
            "https://w.soundcloud.com/player/?url=" + url + "&color=%23fffff",
          frameborder: "no",
          scrolling: "no",
          allow: "autoplay",
        })
      ) + figcaptions(value)
    )
  }
  return ""
}

/** @type {Partial<import("@portabletext/to-html").PortableTextHtmlComponents>} */
const components = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? ""
      if (!uriLooksSafe(href)) return children
      const external = href.includes("http")
      return `<a href="${escapeHTML(href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${children}</a>`
    },
  },
  block: ({ value, children }) => {
    const style = value.style || "normal"
    if (["blockquote", "h2", "h3", "h4"].includes(style)) {
      return `<${style}>${children}</${style}>`
    }
    return `<p class="${escapeHTML(style)}">${children}</p>`
  },
  types: {
    image: ({ value }) =>
      el(
        "figure",
        { class: "image" },
        el("img", {
          src: urlFor(value?.asset)
            .width(1200)
            .quality(100)
            .auto("format")
            .url(),
        }).replace("></img>", " />") + figcaptions(value)
      ),
    embedBlock: ({ value }) => renderEmbed(value),
  },
}

/** @param {any[]} text */
export const renderBlockText = (text = []) => {
  const html = toHTML(text ?? [], { components, onMissingComponent: false })
  // Keep the wrapper <div> the previous renderer (block-content-to-html) put
  // around content with more than one top-level node, so existing CSS still
  // matches. Consecutive list items count as one node (a single list).
  const topLevelNodes = (text ?? []).filter(
    (block, i, blocks) => !block.listItem || !blocks[i - 1]?.listItem
  ).length
  return topLevelNodes > 1 ? `<div>${html}</div>` : html
}

/** @param {any[]} [blocks] */
export const toPlainText = (blocks = []) => {
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children
        .map((/** @type {any} */ child) => child.text)
        .join("")
    })
    .join("\n\n")
}

const builder = createImageUrlBuilder(client)

/**
 * The image source of a { dither, bild } pair, preferring the dithered one.
 * @param {any} imageDyad
 */
export const imageSource = imageDyad => imageDyad?.dither ?? imageDyad?.bild

/**
 * True when the pair has an uploaded asset (an emptied image field in Sanity
 * still comes back as `{ _type: "image" }`).
 * @param {any} imageDyad
 */
export const hasImage = imageDyad => Boolean(imageSource(imageDyad)?.asset)

/** @param {any} source */
export const urlFor = source => builder.image(source)

/**
 * @param {string} query
 * @param {Record<string, any>} [params]
 * @returns {Promise<any>}
 */
export const loadData = async (query, params = {}) => {
  try {
    const res = await client.fetch(query, params)
    if (res === null) {
      return Promise.reject(new Error("404"))
    }
    return res
  } catch (err) {
    return Promise.reject(new Error("404"))
  }
}
