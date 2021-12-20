//fs module as fs
const fs = require("fs");

//storing readdir content into data
fs.readdir("temp_dir", function(err,data)
{
    if(err)
    {
        console.log(`Unable to read dir ${err}`);
    }
    else
    console.log(data);
});

