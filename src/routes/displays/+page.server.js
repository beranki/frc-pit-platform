import { error } from '@sveltejs/kit';
import fs from "fs";
import * as path from "path";

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {

    let cadPath = "src/lib/cads";

    function getDirectoryAsJSON(dirPath) {
        const result = {};
        
        let items = fs.readdirSync(dirPath);
        
        items.forEach(item => {
            const itemPath = path.join(dirPath, item);
            const stats = fs.statSync(itemPath);

            if (stats.isDirectory()) {
                result[item] = getDirectoryAsJSON(itemPath);
            } else {
                result[item] = itemPath;
            }
        });

        return result;
    }

    return getDirectoryAsJSON(cadPath);
}