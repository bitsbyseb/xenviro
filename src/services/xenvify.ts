import fs from 'fs';
import path from 'path';

interface xenvifyConfig {
    fileName?: string,
}

class xenvify {
    private path: string | undefined;
    constructor(config: xenvifyConfig) {
        this.path = config.fileName;
    }

     readFile() {
        try {
            const xenvifyRegex = /([\w\_]+)\=\"?([\w\s\.\n\d\,\%\#]*)\"?/g;
            const content = fs.readFileSync(path.join(process.cwd(), (this.path ?? '.env')), { encoding: 'utf-8'});
            const results = content.matchAll(xenvifyRegex);

            for (let match of results) {
                process.env[match[1]] = match[2];
            }
        } catch (error) {
            console.error(`${error}`);
        }

    }
}

export default xenvify;