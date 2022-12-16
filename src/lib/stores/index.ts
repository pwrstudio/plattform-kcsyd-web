import { writable, derived } from "svelte/store";
import { Language } from "$lib/types";

export const languageStore = writable(Language.Swedish);
export const menuActive = writable(false);
export const splashOpen = writable(true);
export const miljopolicyOpen = writable(true);
// export const urlPrefix = derived(languageStore, ($languageStore) => {
//     return $languageStore === Language.English ? "/en/" : "/"
// })