//fs module importing
const fs = require("fs");

//renaming file name by using rename method
//if new file name already exist then it will replace file with new one
fs.rename('01 WriteFile.txt', '01 ReadWriteFile.txt', function(err)
{
    if(err)
    {
        console.log(`Unable to rename file ${err}`);
    }
    else
    console.log("File renamed success!");
});