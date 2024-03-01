import fs from 'fs';
import path from 'path';

//Executes and creates an object stores all field configuration which exists in folder fields.
export function execFileStoresInFolder() {
    const files = fs.readdirSync(__dirname);
    const fieldUseFilter: Record<string, Function> = {};

    files.forEach((file) => {
        //just accepts file with name ends with field.ts
        if (file.endsWith('.field.ts')) {
            const filePath = path.join(__dirname, file);
            const module = require(filePath);

            const allImplementInFile = Object.keys(module);
            const fieldConfiguration = allImplementInFile.find((func) =>
                //just accepts variable with name ends with Field
                func.endsWith('Field')
            );

            if (fieldConfiguration) {
                const fieldFunction = module[fieldConfiguration];
                fieldUseFilter[`${fieldFunction.name}`] = fieldFunction;
            }
        }
    });

    return fieldUseFilter;
}

export const FIELD_USE_FILTER = execFileStoresInFolder();
