import express from 'express'
import data from './data.json' with { type: 'json' };

export const index = (req, res, next) => {
    res.send(data);
}

export const show = (req, res, next) => {
    const singleDataPost = parseInt(req.params.id)

    const singlePost = data.find(item => item.id === singleDataPost)

    if (!singlePost)
        res.status(404).send('post non trovato');

    res.send(singlePost)
}

export const destroy = (req, res, next) => {
    const singlePostFromDelete = parseInt(req.params.id)

    const singlePost = data.findIndex(item => item.id === singlePostFromDelete.id)

    if (singlePost === -1)
        res.status(404).send('post non trovato');

    data.splice(singlePost, 1)

    res.send({ message: "post eliminato con successo" })
}

export const store = (req, res, next) => {

    console.log("dati ricevuti nel body", req.body);
    const { titolo, contenuto, image, descrizione } = req.body;

    const lastId = data.length > 0 ? data[data.length - 1].id : 0;
    const newId = lastId + 1;

    if (newId === -1)
        res.status(400).send({
            "richiesta": "fallita",
            "Oggetto": "non si può creare il post così"
        })

    const newBlogPost = {
        id: newId,
        titolo: titolo,
        contenuto: contenuto,
        image: image,
        descrizione: descrizione
    }

    data.push(newBlogPost)


    res.status(201).send(newBlogPost);
}

export const update = (req, res, next) => {
    console.log(singlePostPatch, data)
    const singlePostPatch = parseInt(req.params.id)
    const UpPost = data.findIndex(item => item.id === singlePostPatch)

    if (UpPost === -1)
        res.status(404).send("post non trovato")

    const { titolo, contenuto, image, descrizione } = req.body

    if(titolo !== undefined) data[UpPost].titolo = titolo;
    if(contenuto !== undefined) data[UpPost].contenuto = contenuto;
    if(image !== undefined) data[UpPost].image = image;
    if(descrizione !== undefined) data[UpPost].descrizione = descrizione;



    res.send(data[UpPost]);
}