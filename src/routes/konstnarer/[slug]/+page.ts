import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const artist = await loadData("*[_type == 'konstnar' && slug.current == $slug][0]", { slug: params.slug })
    const omKcSyd = await loadData("*[_id == 'om-kcsyd'][0]")
    const hemsideBild = await loadData("*[_id == 'hemsidebild'][0]")
    const projektPagaende = await loadData("*[_type == 'projekt' && tidskategori == 'pagaende-projekt']")
    const konstnarerKommande = await loadData("*[_type == 'konstnar' && tidskategori == 'kommande']")
    const konstnarerTidigare = await loadData("*[_type == 'konstnar' && tidskategori == 'tidigare']")
    return {
        artist: artist,
        mainPage: {
            omKcSyd,
            projektPagaende,
            hemsideBild,
            konstnarerKommande,
            konstnarerTidigare,
        }
    };
}
