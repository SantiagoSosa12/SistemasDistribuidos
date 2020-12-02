

const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  var fs = require('fs');
  var array = fs.readFileSync('/home/serverone/serverStatus/logger.txt').toString().split("\n");
  res.send(array[array.length - 2]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//var fs = require('fs');
//var array = fs.readFileSync('/home/serverone/serverStatus/logger.txt').toString().split("\n");
//for(i in array) {
//  console.log(array[i]);
//}

//console.log(array[array.length - 2] + " Ultima linea :'v");