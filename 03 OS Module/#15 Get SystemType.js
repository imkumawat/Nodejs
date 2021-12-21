const os = require('os');
//Returns the operating system name as returned by uname(3). 
//For example, it returns 'Linux' on Linux, 'Darwin' on macOS, 
//and 'Windows_NT' on Windows.
console.log(os.type());