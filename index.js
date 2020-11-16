
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/Pokemones/', (req,res) => {
    console.log(req.body.name)
    res.send('Usted esta enviando pokemons')
})

app.post('/EquiposDeFutbol/', (req,res) => {
    console.log(req.body.name)
    res.send('Usted esta enviando Equipos de Futbol')
})

app.post('/ClasicosDelRock/', (req,res) => {
    console.log(req.body.name)
    res.send('Usted esta enviando Equipos de Futbol')
})