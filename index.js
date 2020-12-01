
var fs = require('fs');
var array = fs.readFileSync('/home/serverone/serverStatus/logger.txt').toString().split("\n");
for(i in array) {
  console.log(array[i]);
}

console.log(array[array.length - 2] + " Ultima linea")