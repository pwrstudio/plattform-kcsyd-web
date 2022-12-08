import { writable } from "svelte/store";
import { Language } from "$lib/types";

export const languageStore = writable(Language.Swedish);