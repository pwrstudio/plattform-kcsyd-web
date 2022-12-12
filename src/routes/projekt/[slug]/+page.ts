import { loadData } from "$lib/modules/sanity.js"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const project = await loadData("*[_type == 'projekt' && slug.current == $slug][0]", { slug: params.slug })
    const projectList = await loadData("*[_type == 'projekt' && tidskategori == $category]", { category: project.tidskategori })
    return { project, projectList };
}