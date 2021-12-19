const fs = require("fs");


const buf_data = fs.readFileSync("01 WriteFile.txt");

//printing buffer data
console.log(buf_data);

//converting buffer data into string data
org_data = buf_data.toString();
console.log(org_data);