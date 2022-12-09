import { writable } from "svelte/store";
import { Language, UIColor } from "$lib/types";

export const languageStore = writable(Language.Swedish);
export const UIColorStore = writable(UIColor.Black);