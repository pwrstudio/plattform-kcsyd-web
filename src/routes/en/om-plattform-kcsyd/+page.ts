import { loadData } from "$lib/modules/sanity.js"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const data = await loadData("*[_id == 'om-kcsyd'][0]")
    return data;
}