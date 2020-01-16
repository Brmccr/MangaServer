require('dotenv').config();

let express = require('express');
let app = express();
let manga = require('./controllers/mangacontroller')
let db = require('./db');

app.use(express.json());

db.sequelize.sync();
app.use(require('./middleware/headers'));

app.use('/manga', manga)

app.use('/api/test', function(req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
})


app.listen(process.env.PORT,  () => console.log(`App is listening on ${process.env.PORT}`));