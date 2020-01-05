const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
})
//Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createAt: new Date()
    });
    res.status(201).send();
});


//Update Post

//Delete Post
router.delete ('/:id', async (req, res) =>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)}) //When Using MongoDB special type of field
    res.status(200).send();
})

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://jfoster91:destiny1970@vue-express-36rwy.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('vue_express').collection('posts');
}

module.exports = router;
