import { cad_path } from '$lib/store.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let season = params.season;

    //call in json file desc.json and read from there
    //isolate lib cads and lib desc path into a env file for repeated reference

    return {
        "comp": params.comp,
        "cad": params.cad,
        "path": cad_path
    }
}