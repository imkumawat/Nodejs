//importing file system module
const fs = require("fs");

//using writeFile method to file and content in Async mode
//in Async mode we have to pass a callback function so that we can know the status of operation
fs.appendFile("01 wWriteFile.txt",'\nNew Data in Async Mode',function(err)
{
    if(err)
    {
        console.log(`Unable to append file ${err}`);
    }
    else
    console.log("File updated success!");
} );