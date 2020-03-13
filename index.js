const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const models = require('./models');
const promise = require('bluebird');



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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

////Basic routes/////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the Tasting Board!')
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

app.listen(8080, function () {
    console.log('Tasting Board app listening on port 8080')
});

