const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const models = require('./models');
const promise = require('bluebird');
const PORT = process.env.PORT || 8080;
const path = require("path");
const multer = require("multer");
const router = express.Router();

const passport = require('passport');
// PG-PROMISE INIT OPTIONS
const initOptions = {
    promiseLib: promise,
};
// CONNECTING TO LOCAL DATABASE
const config = {
    host: 'localhost',
    port: 5432,
    database: 'tasting_board_2',
    user: 'postgres',
    username: 'postgres',
    password: 'null'
};
////////Image Uploading///////////////
/////Configure Storage////////////////
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      /*
        Files will be saved in the 'uploads' directory. Make
        sure this directory already exists!
      */
      cb(null, './public/uploadPic');
    },
    filename: (req, file, cb) => {
      /*
        uuidv4() will generate a random ID that we'll use for the
        new filename. We use path.extname() to get
        the extension from the original file name and add that to the new
        generated ID. These combined will create the file name used
        to save the file on the server and will be available as
        req.file.pathname in the router handler.
      */
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({ storage });
////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With,Content-Type, Accept"
        );
    next();
});
////Basic routes/////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the Tasting Board!')
});
app.post('/uploadPic', (req, res) => {
   console.log('uploaded pic')
   let upload = multer({ storage: storage}).single('profile_pic');
       // req.file contains information of uploaded file
       // req.body contains information of text fields, if there were any
       if (req.fileValidationError) {
           return res.send(req.fileValidationError);
       }
       else if (!req.file) {
           return res.send('Please select an image to upload');
       }
       else if (err instanceof multer.MulterError) {
           return res.send(err);
       }
       else if (err) {
           return res.send(err);
       }
      res.send('hello');
    });
////User routes/////////////////////////////
app.get('/user', (req, res) => {
    res.send('Users appear here')
});
app.post('/user', function (req, res) {
    res.send('Added user. Beep boop.')
});
app.put('/user/:id', function (req, res) {
    res.send('Got a PUT request at /user')
});
app.delete('/user/:id', function (req, res) {
    res.send('Got a DELETE request at /user')
});
////registration routes
app.get('/register', (req, res) => {
    res.send('Register a user here')
});
app.post('/register', function (req, res) {
    res.send('Registered a user')
});
////Drink Routes//////////////////////////
app.get('/drinks', function (req, res) {
    console.log('drinks');
    models.drinks.findAll().then(function (drinks){
        console.log(drinks);
        res.send(drinks);
    });
});
app.post('/drinks', function (req, res) {
    console.log(req.body)
    models.drinks.create({
        type: req.body.type,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        rating: req.body.rating,
        date: req.body.date,
        description: req.body.description,
        favorite: req.body.favorite,
    })
        .then(function () {
            res.send('Added drinks');
        });
});

app.put('/drinks/:id', function (req, res) {
    console.log('Updating drinks entry: ' + req.params.id);
    let updateValues = {};
    if(req.body.drinks) {
        updateValues.beer = req.body.drinks;
    }
    console.log(updateValues);
    models.drinks.update(updateValues, { where: { id: req.params.id } })
    .then(function (updated) {
        console.log('updated success');
        console.log(updated);
        res.send(updated);
    });
});

app.delete('/drinks/:id', function (req, res) {
    models.drinks.delete({
        type: req.body.type,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        rating: req.body.rating,
        date: req.body.date,
        description: req.body.description,
        favorite: req.body.favorite,
    })
        .then(function (drinks) {
            console.log(drinks);
            res.send('new drinks entry deleted with id: ' + drinks.id);
        });
});

//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
app.listen(8080, () => {
    console.log(`Tasting Board app listening on port ${PORT}`)
});