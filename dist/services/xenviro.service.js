"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class xenviro {
    constructor(config) {
        this.path = config.fileName;
    }
    readFile() {
        var _a;
        try {
            const xenviroRegex = /([\w\_]+)\=\"?([\w\s\.\n\d\,\%\#]*)\"?/g;
            const content = fs_1.default.readFileSync(path_1.default.join(process.cwd(), ((_a = this.path) !== null && _a !== void 0 ? _a : '.env')), { encoding: 'utf-8' });
            const results = content.matchAll(xenviroRegex);
            for (let match of results) {
                process.env[match[1]] = match[2];
            }
        }
        catch (error) {
            console.error(`${error}`);
        }
    }
}
exports.default = xenviro;
