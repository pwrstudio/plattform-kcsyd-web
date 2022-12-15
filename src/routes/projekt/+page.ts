import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const projektPagaende = await loadData("*[_type == 'projekt' && tidskategori == 'pagaende-projekt']")
    const projektArkivDokumentation = await loadData("*[_type == 'projekt' && tidskategori == 'arkiv-dokumentation']")
    const listor = await loadData("*[_id == 'listor']{konstnarerTidigareList[]->{...}, konstnarerKommandeList[]->{...}, pagaendeList[]->{...}, arkivDokumentationList[]->{...}}[0]")
    return { projektPagaende, projektArkivDokumentation, listor };
}