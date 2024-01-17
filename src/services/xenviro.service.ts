import fs from 'fs';
import path from 'path';

interface xenviroConfig {
    fileName?: string,
}

class xenviro {
    private path: string | undefined;
    constructor(config: xenviroConfig) {
        this.path = config.fileName;
    }

     readFile() {
        try {
            const xenviroRegex = /([\w\_]+)\=\"?([\w\s\.\n\d\,\%\#]*)\"?/g;
            const content = fs.readFileSync(path.join(process.cwd(), (this.path ?? '.env')), { encoding: 'utf-8'});
            const results = content.matchAll(xenviroRegex);

            for (let match of results) {
                process.env[match[1]] = match[2];
            }
        } catch (error) {
            console.error(`${error}`);
        }

    }
}

export default xenviro;