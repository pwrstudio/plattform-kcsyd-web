import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log(params)
    const page = await loadData("*[_type == 'projekt' && slug.current == $slug][0]", { slug: params.slug })
    return { page };
}