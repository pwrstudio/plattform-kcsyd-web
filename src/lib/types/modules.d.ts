// @sanity/block-content-to-html ships without type declarations
declare module "@sanity/block-content-to-html" {
  const blocksToHtml: {
    (options: Record<string, any>): string
    h: (tag: string, props?: Record<string, any>, children?: any) => any
  }
  export default blocksToHtml
}
