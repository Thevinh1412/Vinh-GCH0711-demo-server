const express = require('express');
const engines = require('consolidate');
const app = express();

//npm i handlebars consolidate --save
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/', function (req, res) {
    res.render('index',{name:"Mr.Bean"});

});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});