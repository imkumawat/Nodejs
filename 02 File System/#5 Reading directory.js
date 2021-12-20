//fs module as fs
const fs = require("fs");

//storing readdirSync content into data
const data = fs.readdirSync("temp_dir");

//printing dir content to the console
console.log(data);
