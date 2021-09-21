require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/users', (req, res) =>{
  res.send('pegaste bien loco!')
})

app.post('/new-user', (req, res) => {
  console.log(req.body)
  res.send('Recibimos el usuario')
})

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`)
})