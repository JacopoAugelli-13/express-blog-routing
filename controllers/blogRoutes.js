import express from 'express'
import * as mess from './messaggi.js'

export const bRoutes = express.Router()

bRoutes.get('/', mess.getAll)
bRoutes.post('/', mess.newPost)
bRoutes.put('/:id', mess.sobstitude)
bRoutes.patch('/:id', mess.modify)
bRoutes.delete('/:id', mess.deleted)