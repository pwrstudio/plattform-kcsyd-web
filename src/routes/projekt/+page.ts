import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const projekt = await loadData("*[_type == 'projekt']")
    console.log('projekt', projekt)
    return { projekt };
}