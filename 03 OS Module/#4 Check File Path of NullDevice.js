const os = require('os');
//The platform-specific file path of the null device.
//\\.\nul on Windows
///dev/null on POSIX
console.log(os.devNull);