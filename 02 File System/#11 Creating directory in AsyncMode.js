const fs = require("fs");

fs.mkdir("Manoj1", function(err)
{
    if(err)
    {
        console.log("Unable to create dir!");
    }
    else
    console.log("dir created!");
});