
var fs = require('fs');
var array = fs.readFileSync('/home/serverone/serverStatus/logger.txt').toString().split("\n");
for(i in array) {
  console.log(array[i]);
}