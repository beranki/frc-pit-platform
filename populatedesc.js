import { readdirSync, statSync, writeFile } from 'fs';
import * as path from "path";

let cadPath = "src/lib/cads";

function getDirectoryAsJSON(dirPath) {
    const result = {};
    
    let items = readdirSync(dirPath);
    
    items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stats = statSync(itemPath);

        if (stats.isDirectory()) {
            result[item] = getDirectoryAsJSON(itemPath);
        } else {
            result[item] = itemPath;
        }
    });

    return result;
}

let pathJSON = getDirectoryAsJSON(cadPath);

let jsonString = JSON.stringify(pathJSON, null, 2);
writeFile('src/lib/desc.json', jsonString, 'utf8', function readFileCallback(err, data){});