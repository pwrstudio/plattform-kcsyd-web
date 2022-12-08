import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const data = await loadData("*[_type == 'konstnar' && slug.current == $slug][0]", { slug: params.slug })
    return data;
}