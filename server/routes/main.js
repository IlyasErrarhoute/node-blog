const express = require('express');
const router = express.Router();

const Post = require('../modules/Post');






//GET HOME

//
router.get('',async (req, res) => {
    const locals = {
        title: 'Home',
        description: 'Welcome to the home page'
    }
    try{
        const data = await Post.find();
        res.render('index', { locals, data });

    }
    catch(err){
        console.error(err);
    }



});


// function insertPostData(){
//     Post.insertMany([
//         {
//             title: 'Biudling  a blog 1',
//             body: 'This is the body of post 1'
//         },
//         {
//             title: 'Post 2',
//             body: 'This is the body of post 2'
//         },
//         {
//             title: 'Post 3',
//             body: 'This is the body of post 3'
//         }
//     ]
    

//     )
// }
// insertPostData();   









router.get('/about', (req, res) => {
res.render('about');
});
module.exports = router;