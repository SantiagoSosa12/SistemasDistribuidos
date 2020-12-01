

const express = require('express')
const app = express()
const port = 3000
const fs= require('fs');


app.get('/', (req, res) => {
  let archivo = fs.readFileSync('/serverStatus/logger.txt', 'utf-8');
  console.log(archivo);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



//{
//  "pokemons":[
//    {
//        "name": "Snorlax"
//    },
//    {
//        "name": "Pickachu"
//    }
//    ]
//}
