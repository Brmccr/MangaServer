let express = require('express');
let router = express.Router();
let db = require('../db');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
// let User = db.import('../models/user');
const validateSession = require('../middleware/validate-session');
// const manga = require('../db').import('../models/manga');
// const review = require('../db').import('../models/review');
// let ReviewModel = sequelize.import('../models/review');
let User = db.sequelize.import('../models/user');


router.get('/allmangas', (req, res) => {
    db.mangas.findAll({
      include: [
        {
          model: db.reviews,
        }
      ]
    }).then(manga => res.status(200).json(manga))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//get all reviews by mangaID
router.get('/allreviewmanga', validateSession, function(req, res) {
    let user = req.user.id;

    db.reviews
    .findAll({
        where: {owner: user }
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});



router.get('/allmanga', (req, res) => {
    db.mangas.findAll()
    .then(manga => res.status(200).json(manga))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.get('/allreview', (req, res) => {
    db.reviews.findAll()
    .then(manga => res.status(200).json(manga))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.get('/review', validateSession, function(req, res) {
    let user = req.user.id;

    db.reviews
    .findAll({
        where: {owner: user }
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});





router.get('/', function(req, res) {
    res.send('Hey!! This is a test route!');
})

router.post('/user/', function(req, res) {

    let username = req.body.user.username;
    let pass = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)

    }).then(
        function createSuccess(user){

        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn :60*60*24});
            
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});


router.post('/login', function(req, res) {

    User.findOne( { where: { username: req.body.user.username } } ).then(

        function(user){
            if (user) {
                
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
                
                    if(matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                });
                    }else { 
                        res.status(502).send({ error: "Sign In Error"});
                    }
                });  
            } else {
                res.status(500).send({ error : "Failed to authenticate"});
            }
        },
        function(err) {
            res.status(501).send({error: "Login Error"});
        }
    );
});

router.post('/review', validateSession, function(req, res){
    const reviewFromRequest = {
        rating: req.body.rating,
        paragraph: req.body.paragraph,
        owner: req.user.id,
        mangaId: req.body.mangaId
    }

    console.log(reviewFromRequest)

    db.reviews.create(reviewFromRequest)
        .then(review => res.status(200).json(review))
        .catch(err => res.json(req.errors));
})




router.post('/mangacreate', validateSession, function(req, res) {
    const mangaItem = {
        title: req.body.title,
        description: req.body.description,
        imagemain: req.body.imagemain,
        imagemult: req.body.imagemult
    }
        console.log(mangaItem)

    db.mangas.create(mangaItem)
        .then(manga => res.status(200).json(manga))
        .catch(err => res.json(req.errors));
})
//create

router.put('/:id', validateSession, (req, res) => { // validateSession, 
    db.reviews.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(review => res.status(200).json(review))
    .catch(err => res.json({
        error: err
    }))
})
//update


//delete


router.delete('/:id', validateSession, (req, res) => { /// validateSession, to be added back in 
    db.reviews.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(review => res.status(200).json(review))
    .catch(err => res.json({
        error: err
    }))
})



//get 


module.exports = router;