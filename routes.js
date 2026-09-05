import express from 'express';
import { post } from './post.js';
import { error } from 'node:console';

export const router = express.Router();

router.get('/bacheca', (req, res) => {
    res.json(post)
})

router.post('/bacheca', (req, res) => {
    const { titolo, contenuto } = req.body;

    const lastId = post.length > 0 ? post[post.length - 1].id : 0;
    const newId = lastId + 1;

    const newPost = {
        titolo: titolo,
        contenuto: contenuto,
        id: newId,
    };

    post.push(newPost)

    res.status(201).json(newPost);

})

router.patch('/bacheca/:id', (req, res) => {
    const singlePost = parseInt(req.params.id);

    const { titolo, contenuto } = req.body;

    const changePostIndex = post.findIndex(postI => postI.id === singlePost);

    if (changePostIndex < 0)
        res.status(404).send('questo id non esiste');

    post[changePostIndex].titolo = titolo;
    post[changePostIndex].contenuto = contenuto;

    res.send(post[changePostIndex]);
})

router.put('/bacheca/:id', (req, res) => {
    const singlePost = parseInt(req.params.id);

    const { titolo, contenuto } = req.body;

    const findI = post.findIndex((idex) => idex.id === singlePost);

    const newPost = {
        titolo: titolo,
        contenuto: contenuto,
        id: singlePost
    }
    if (findI < 0)
        res.status(404).send('questo id non esiste');

    post[findI] = newPost;

    res.send(post[findI]);

})

router.delete('/bacheca/:id', (req, res) => {
    const singlePost = parseInt(req.params.id);

    const selectIndex = post.findIndex((idex) => idex.id === singlePost);

    if (selectIndex < 0)
        res.status(404).send('questo id non esiste');

    post.splice(selectIndex, 1)

    res.send(post).json();
})

router.get('/bachecaa/:id', (req, res) => {
    const singlePostId = parseInt(req.params.id);

    const singlePost = post.find((sPost) => sPost.id === singlePostId)

    if (!singlePost)

        res.status(404).send('questo id non è stato trovato');

    res.send(singlePost);
})