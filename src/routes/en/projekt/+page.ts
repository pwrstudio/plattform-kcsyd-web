import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const projektPagaende = await loadData("*[_type == 'projekt' && tidskategori == 'pagaende-projekt']")
    const projektArkivDokumentation = await loadData("*[_type == 'projekt' && tidskategori == 'arkiv-dokumentation']")
    return { projektPagaende, projektArkivDokumentation };
}