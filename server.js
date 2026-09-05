import express from 'express';
import { router } from './routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/' , router)

app.get('/', (req, res) => {
  res.send('Benvenuti nel mio Blog!')
});


app.listen(3000, () => {
  console.log(`My Blog listening on port${3000}`)
});