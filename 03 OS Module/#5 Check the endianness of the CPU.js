const os = require('os');
//Returns a string identifying the endianness of the CPU
//Possible values are 'BE' for big endian and 'LE' for little endian.
console.log(os.endianness());