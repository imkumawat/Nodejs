//file system module as fs
const fs = require("fs");

//reading file in sync mode
const buf_data = fs.readFileSync("01 WriteFile.txt");

//printing buffer data
console.log(buf_data);

//converting buffer data into string data
org_data = buf_data.toString();
//printing data to the console
console.log(org_data);