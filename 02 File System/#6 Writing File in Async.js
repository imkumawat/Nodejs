//importing file system module
const fs = require("fs");

//using writeFile method to file and content in Async mode
//in Async mode we have to pass a callback function so that we can know the status of operation
fs.writeFile("01 WriteFile.txt","Creating File", function(err)
{
    if(err)
    {
        console.log(`Unable to write file ${err}`);
    }
    else
    console.log("File written successfully!");
} );