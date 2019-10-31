const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
})


    const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize
    
    db.mangas = require('./models/manga')(sequelize, Sequelize);
    db.reviews = require('./models/review')(sequelize, Sequelize);

    db.mangas.hasMany(db.reviews);
    db.reviews.belongsTo(db.mangas);

// manga has many reviews
// reviews belong to manga 

// Do a get all on manga - Should see that reviews are associated underneath the manga get
// the reviews will belong to the manga - 
// Manga will have a UUID 


// sequelize.authenticate().then(
//     function() {
//         console.log('Connected to MangaReview postgres database');
//     },
//     function(err){
//         console.log(err);
//     }
// );

module.exports = db;


