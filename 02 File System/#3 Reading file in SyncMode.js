//file system module as fs
const fs = require("fs");

//reading file in sync mode
const buf_data = fs.readFileSync("01 ReadWriteFile.txt");

//printing buffer data
console.log(buf_data);

//to have direct string and no buffer data specify file encoding "utf8"

//converting buffer data into string data
org_data = buf_data.toString();
//printing data to the console
console.log(org_data);