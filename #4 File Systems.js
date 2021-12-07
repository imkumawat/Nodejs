//The Node.js file system module allows you to work with the file system on your computer.

var fs = require('fs');

//reading the file using readFile function
//readFile function takes 3 parameters 
//1. the file name, 2. file encoding, 3. callback function
fs.readFile('#4 file1.txt', 'utf8', function(err,data)
{
//printing the read data to the console
console.log(data);
});

//Wrting data to the file using writeFile function
fs.writeFile('#4 write.txt', 'Your nodejs code is here!', function(err)
{
    console.log("File created and written successfully!")
})

//appending file content
fs.appendFile('#4 write.txt', 'This is git repo', function(err)
{
    console.log("File appended successfully!")
})


//deleting file using unlink function
fs.unlink('#4 write.txt', function(err)
{
    console.log('File deleted successfully!')
})