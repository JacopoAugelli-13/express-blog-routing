import express from 'express';
import { post } from './post.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Benvenuti nel mio Blog!')
});

app.get('/bacheca', (req,res) => {
    res.send(post)
});

app.listen(3000, () => {
  console.log(`My Blog listening on port${3000}`)
});