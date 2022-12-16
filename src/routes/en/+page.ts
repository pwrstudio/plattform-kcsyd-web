import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const omKcSyd = await loadData("*[_id == 'om-kcsyd'][0]")
    const hemsideBild = await loadData("*[_id == 'hemsidebild'][0]")
    const projektPagaende = await loadData("*[_type == 'projekt' && tidskategori == 'pagaende-projekt'] | order(_createdAt desc)")
    const konstnarerKommande = await loadData("*[_type == 'konstnar' && tidskategori == 'kommande'] | order(_createdAt desc)")
    const konstnarerTidigare = await loadData("*[_type == 'konstnar' && tidskategori == 'tidigare'] | order(_createdAt desc)")
    const listor = await loadData("*[_id == 'listor']{konstnarerTidigareList[]->{...}, konstnarerKommandeList[]->{...}, pagaendeList[]->{...}, arkivDokumentationList[]->{...}}[0]")
    return {
        omKcSyd,
        projektPagaende,
        hemsideBild,
        konstnarerKommande,
        konstnarerTidigare,
        listor,
    };
}