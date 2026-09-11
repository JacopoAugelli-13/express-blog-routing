import express from 'express'
import * as mess from './messaggi.js'
import * as dbContro from './dataControllers.js'

export const bRoutes = express.Router()

//bRoutes.get('/', mess.getAll)
//bRoutes.post('/', mess.newPost)
//bRoutes.put('/:id', mess.sobstitude)
//bRoutes.patch('/:id', mess.modify)
//bRoutes.delete('/:id', mess.deleted)

bRoutes.post('/', dbContro.store)
bRoutes.get('/', dbContro.index)
bRoutes.patch('/:id', dbContro.update)