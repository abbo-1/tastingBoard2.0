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
/////Beer////////////////////////////////
app.get('/beer', function (req, res) {
    console.log('beer');
    models.beer.findAll().then(function (beer){
        console.log(beer);
        res.send(beer);
    });
});

app.post('/beer', function (req, res) {
    models.beer.create({
        name: req.body.name,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description,
    })
        .then(function () {
            res.send('Added beer');
        });
});

app.put('/beer/:id', function (req, res) {
    console.log('Updating beer entry: ' + req.params.id);
    let updateValues = {};
    if(req.body.beer) {
        updateValues.beer = req.body.beer;
    }
    console.log(updateValues);
    models.beer.update(updateValues, { where: { id: req.params.id } })
    .then(function (updated) {
        console.log('updated success');
        console.log(updated);
        res.send(updated);
    });
});

app.delete('/beer/:id', function (req, res) {
    models.beer.delete({
        name: req.body.name,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description,
    })
        .then(function (beer) {
            console.log(beer);
            res.send('new beer entry deleted with id: ' + beer.id);
        });
});

//////////////////////////////////////////////
/////Wine////////////////////////////////

app.get('/wine', function (req, res) {
    console.log('wine');
    models.wine.findAll().then(function (wine){
        console.log(wine);
        res.send(wine);
    });
});

app.post('/wine', function (req, res) {
    models.wine.create({
        name: req.body.name,
        type: req.body.type,
        vineyard: req.body.vineyard,
        date: req.body.date,
        description: req.body.description,
    })
        .then(function () {
            res.send('Added wine');
        });
});

app.put('/wine/:id', function (req, res) {
    console.log('Updating wine entry: ' + req.params.id);
    let updateValues = {};
    if(req.body.wine) {
        updateValues.wine = req.body.wine;
    }
    console.log(updateValues);
    models.wine.update(updateValues, { where: { id: req.params.id } })
    .then(function (updated) {
        console.log('updated success');
        console.log(updated);
        res.send(updated);
    });
});

app.delete('/wine/:id', function (req, res) {
    models.wine.delete({
        name: req.body.name,
        type: req.body.type,
        vineyard: req.body.vineyard,
        date: req.body.date,
        description: req.body.description,
    })
        .then(function (wine) {
            console.log(wine);
            res.send('new wine entry deleted with id: ' + wine.id);
        });
});

//////////////////////////////////////////////
/////Liquor////////////////////////////////

app.get('/liquor', function (req, res) {
    console.log('liquor');
    models.liquor.findAll().then(function (liquor){
        console.log(liquor);
        res.send(liquor);
    });
});

app.post('/liquor', function (req, res) {
    models.liquor.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description
    })
        .then(function () {
            res.send('Added liquor');
        });
});

app.put('/liquor/:id', function (req, res) {
    console.log('Updating liquor entry: ' + req.params.id);
    let updateValues = {};
    if(req.body.liquor) {
        updateValues.liquor = req.body.liquor;
    }
    console.log(updateValues);
    models.liquor.update(updateValues, { where: { id: req.params.id } })
    .then(function (updated) {
        console.log('updated success');
        console.log(updated);
        res.send(updated);
    });
});

app.delete('/liquor/:id', function (req, res) {
    models.liquor.delete({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description
    })
        .then(function (liquor) {
            console.log(liquor);
            res.send('new liquor entry deleted with id: ' + liquor.id);
        });
});

////////////////////////////////////////////////////////////////////////

app.listen(8080, () => {
    console.log(`Tasting Board app listening on port ${PORT}`)
});

