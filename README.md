# Xenviro ![version](https://img.shields.io/npm/v/xenviro.svg?style=flat-square)
## __next generation of environment variables__
![license](https://img.shields.io/github/license/johapuentes/xenviro.svg)

# __Usage__

write a .env file or any name else:
```javascript
MESSAGE="Hello World!!"
```

width Ecmascript modules:
```javascript
import xenviro from 'xenviro';
const reader = new xenviro({});
reader.readFile();

console.log(process.env.YOUR_VARIABLE);
```

width commonJS modules:
```javascript
const xenviro = require('xenv');
const reader = new xenviro({});
reader.readFile();

console.log(process.env.YOUR_VARIABLE);
```

