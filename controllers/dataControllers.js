import express from 'express'
import  data  from './data.json' with { type: 'json' };

export const index = (req, res, next) => {
    res.send(data);
}

export const show = (req, res, next) => {
    const singleDataPost = parseInt(req.params.id)

    const singlePost = data.find(item => item.id === singleDataPost.id)

    if(!singlePost)
        res.status(404).send('post non trovato');

    res.send(singlePost)
}

export const destroy = (req, res, next) => {
    const singlePostFromDelete = parseInt(req.params.id)

    const singlePost = data.findIndex(item => item.id === singlePostFromDelete.id)

    if(singlePost === -1)
        res.status(404).send('post non trovato');

    data.splice(singlePost, 1)
    
    res.send({ message: "post eliminato con successo"})
}