const fs = require("fs");

fs.unlink("01.txt", function(err)
{
    if(err)
    {
        console.log(`Unable to delete file ${err}`);
    }
    else
    console.log("File Deleted success!");
})