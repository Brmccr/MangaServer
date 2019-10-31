const jwt = require('jsonwebtoken');
// let sequelize = require('../db')
// const User = require('../db').import('../models/user');
let db = require('../db');

let User = db.sequelize.import('../models/user');


const validateSession = (req, res, next) => {
    const token = req.headers.authorization; 

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(decoded){
            User.findOne({
                where: {
                    id: decoded.id
                }
            }, console.log(decoded))
            .then(user => {
                if(!user) throw 'err'; 
                req.user = user;
                return next();
            })
            .catch(err => next(err))
        } else {
            req.errors = err
            return res.status(500).send('Not authorized')
        }
    })
}

module.exports = validateSession;