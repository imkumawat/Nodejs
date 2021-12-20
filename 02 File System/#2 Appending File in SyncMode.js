//fs module
const fs = require("fs");

//appending data at the end of the file
fs.appendFileSync("01 WriteFile.txt", "\nAppending file data");