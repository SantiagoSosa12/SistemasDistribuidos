
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(cors())
app.use(express.json())

let pokemons = ["Charizad" , "Bulbasur"]

app.get('/', function(req, res) {
  res.send('hello world');
});


app.get('/pokemons', (req, res) => {
  let pokemonsTS = ''
  pokemons.forEach(function(elemento, array){
    pokemonsTS += ' ' + elemento
    
  })
  res.send(pokemonsTS)
})

app.get('/RegistrarPokemones/:pokemon', (req,res) => {
    pokemons.push(req.params.pokemon)
    console.log(pokemons[pokemons.length - 1])//Con esto verificamos 
    //que el pokemon se haya registrado
    res.send('Usted registro un pokemon')
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
