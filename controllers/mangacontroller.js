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

router.get('/reviewberserk', (req, res) => {
    db.mangas.findAll({
        where: {title : "Berserk"}
    //   include: [
    //     {
    //       model: db.reviews,
    //     }
    //   ]
    }).then(manga => res.status(200).json(manga))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.post('/reviewberserk', validateSession, function(req, res){
    const reviewFromRequest = {
        rating: req.body.rating,
        paragraph: req.body.paragraph,
        owner: req.user.id,
        mangaTitle: "Berserk",
        mangaId: "63868b66-e558-4b65-9221-91932e3da898"
    }

    console.log(reviewFromRequest)

    db.reviews.create(reviewFromRequest)
        .then(review => res.status(205).json(review))
        .catch(err => res.json(req.errors));
})

router.post('/reviewNGE', validateSession, function(req, res){
    const reviewFromRequest = {
        rating: req.body.rating,
        paragraph: req.body.paragraph,
        owner: req.user.id,
        mangaTitle: "Neon Genesis Evangelion",
        mangaId: "14ecaf80-2a1d-48b8-8d74-5df38f0e3603"
    }

    console.log(reviewFromRequest)

    db.reviews.create(reviewFromRequest)
        .then(review => res.status(200).json(review))
        .catch(err => res.json(req.errors));
})

    router.get('/reviewNGE', (req, res) => {
        db.mangas.findAll({
            where: {title : "Neon Genesis Evangelion"},
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

    router.post('/reviewdeathnote', validateSession, function(req, res){
        const reviewFromRequest = {
            rating: req.body.rating,
            paragraph: req.body.paragraph,
            owner: req.user.id,
            mangaTitle: "Death Note",
            mangaId: "892cc5c1-b4c8-4dfd-9aa0-0cf3684e1c01"
        }
    
        console.log(reviewFromRequest)
    
        db.reviews.create(reviewFromRequest)
            .then(review => res.status(200).json(review))
            .catch(err => res.json(req.errors));
    })

    router.get('/reviewdeathnote', (req, res) => {
        db.mangas.findAll({
            where: {title : "Death Note"},
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

    router.post('/reviewmadeinabyss', validateSession, function(req, res){
        const reviewFromRequest = {
            rating: req.body.rating,
            paragraph: req.body.paragraph,
            owner: req.user.id,
            mangaTitle: "Made In Abyss",
            mangaId: "c9d73f7b-e90a-48e9-ae5d-b3d62171904f"
        }
    
        console.log(reviewFromRequest)
    
        db.reviews.create(reviewFromRequest)
            .then(review => res.status(200).json(review))
            .catch(err => res.json(req.errors));
    })

    router.get('/reviewmadeinabyss', (req, res) => {
        db.mangas.findAll({
            where: {title : "Made In Abyss"},
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

    router.post('/reviewsouleater', validateSession, function(req, res){
        const reviewFromRequest = {
            rating: req.body.rating,
            paragraph: req.body.paragraph,
            owner: req.user.id,
            mangaTitle: "Soul Eater",
            mangaId: "97ecf3c6-45dd-4219-962f-b52e50f07741"
        }
    
        console.log(reviewFromRequest)
    
        db.reviews.create(reviewFromRequest)
            .then(review => res.status(200).json(review))
            .catch(err => res.json(req.errors));
    })

    router.get('/reviewsouleater', (req, res) => {
        db.mangas.findAll({
            where: {title : "Soul Eater"},
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

    router.post('/reviewdeadmanwonderland', validateSession, function(req, res){
        const reviewFromRequest = {
            rating: req.body.rating,
            paragraph: req.body.paragraph,
            owner: req.user.id,
            mangaTitle: "Deadman Wonderland",
            mangaId: "ecafd012-4072-4d1d-94c8-78c5f97c2a2d"
        }
    
        console.log(reviewFromRequest)
    
        db.reviews.create(reviewFromRequest)
            .then(review => res.status(200).json(review))
            .catch(err => res.json(req.errors));
    })


    router.get('/reviewdeadmanwonderland', (req, res) => {
        db.mangas.findAll({
            where: {title : "Deadman Wonderland"},
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

    


//should I just do a get from Manga ID? And then build other another get from there for reviews-? 

// could get the manga title - which would pull the id along with it- Could just have that return to the review
// drop down section - Then it would be holding that ID? So- A simple get for the manga itself- 

//how can I pull a single manga associated with that ID? 

//is there maybe a way I could grab it through the title? 

//will need to map over both manga and reviews - will map over reviews and return  it to a table. 

// router.get('/mangareviews', (req, res) => {
//     let MangaId = req.db.mangas.id;


//     db.mangas.findOne({
//         where: {id : MangaId}
//       include: [
//         {
//           model: db.reviews,
//         }
//       ]
//     }).then(manga => res.status(200).json(manga))
//     .catch(err => res.status(500).json({
//         error: err
//     }))
// })

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

// add validatation to user creation here -- 
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