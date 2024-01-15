import fs from 'fs/promises';
import path from 'path';

interface xenvConfig {
    fileName?: string,
}

interface formatObject {
    keys: string[],
    values: string[]
}

class xenv {
    private path: string | undefined;
    constructor(config: xenvConfig) {
        this.path = config.fileName;
    }

    private formatIterable(iterable: IterableIterator<RegExpMatchArray>): formatObject | undefined {
        try {
            let keys: string[] = [];
            let values: string[] = [];
            for (let match of iterable) {
                match.forEach(x => {
                    let equalIndex = x.indexOf('=');
                    let keysResponse: string[] = [];
                    let valuesResponse: string[] = [];

                    for (let i = 0; i < equalIndex; i++) {
                        keysResponse.push(x[i]);
                    }

                    for (let b = equalIndex + 1; b <= x.length; b++) {
                        if (x[b] !== '"') {
                            valuesResponse.push(x[b]);
                        }
                    }
                    keys.push(keysResponse.join(''));
                    values.push(valuesResponse.join(''));
                });
            }
            return {
                keys,
                values,
            }
        } catch (error) {
            console.error(error);
        }
    }

    private appendProcessEnv(format: formatObject): void {
        try {
            const keys = format.keys;
            const values = format.values;

            if (keys.length !== values.length) {
                throw new Error("error from the formatter, please check your .env file");
            }

            for (let i = 0;i<=keys.length;i++) {
                process.env[keys[i]] = values[i];
            }

        } catch (error) {
            console.error(error);
        }
    }

    async readFile() {
        try {
            const xenvRegex = /[\S]*=.*/g;
            const content = await fs.readFile(path.join(process.cwd(), (this.path ?? '.env')), { encoding: 'utf-8' });
            const results = content.matchAll(xenvRegex);

            const format = this.formatIterable(results);
            if (format !== undefined) {
                this.appendProcessEnv(format);
            }
        } catch (error) {
            console.error(`${error}`);
        }

    }
}

export default xenv;