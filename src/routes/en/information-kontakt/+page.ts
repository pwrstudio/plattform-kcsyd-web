import { loadData } from "#lib/modules/sanity.js"
import type { ContactPageType } from "#lib/types/index.ts"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const data = await loadData("*[_id == 'information-kontakt'][0]")
  return data as ContactPageType
}
