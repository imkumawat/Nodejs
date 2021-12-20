//importing file system module
const fs = require("fs");

//using writeFile method to file and content in Async mode
//in Async mode we have to pass a callback function so that we can know the status of operation
//while reading a file in Async mode we have to tell the file encoding so that we data in string format
fs.readFile("01 WriteFile.txt",'utf8',function(err,data)
{
    if(err)
    {
        console.log(`Unable to read file ${err}`);
    }
    else
    console.log(data);
} );