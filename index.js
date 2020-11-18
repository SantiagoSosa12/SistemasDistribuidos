
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
let pokemons = ["Charizad" , "Bulbasur"]

app.post('/', (req, res) => {
  let pokemonsTS = ''
  pokemons.forEach(function(elemento, array){
    pokemonsTS += ' ' + elemento
    
  })
  res.send(pokemonsTS)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/RegistrarPokemones/:pokemon', (req,res) => {
    pokemons.push(req.params.pokemon)
    console.log(pokemons[pokemons.length - 1])//Con esto verificamos 
    //que el pokemon se haya registrado
    res.send('Usted registro un pokemon')
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