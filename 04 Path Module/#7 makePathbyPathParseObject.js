const path = require('path');

const str = "D:/Git Repository/Nodejs/04 Path Module/#1 getDirName.js";
const d = path.parse(str);

console.log(path.format(d));