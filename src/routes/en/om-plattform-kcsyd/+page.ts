import { loadData } from "#lib/modules/sanity.js"
import type { AboutPageType } from "#lib/types/index.ts"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const data = await loadData("*[_id == 'om-kcsyd'][0]")
    return data as AboutPageType;
}
