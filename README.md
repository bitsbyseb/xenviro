# Xenvify ![version](https://img.shields.io/npm/v/xenvify.svg?style=flat-square)
## __next generation of environment variables__
![license](https://img.shields.io/github/license/johapuentes/xenvify.svg)

# __Usage__

write a .env file or any name else:
```javascript
MESSAGE="Hello World!!"
```

width Ecmascript modules:
```javascript
import xenvify from 'xenvify';
const reader = new xenvify({});
reader.readFile();

console.log(process.env.YOUR_VARIABLE);
```

width commonJS modules:
```javascript
const xenvify = require('xenv');
const reader = new xenvify({});
reader.readFile();

console.log(process.env.YOUR_VARIABLE);
```

