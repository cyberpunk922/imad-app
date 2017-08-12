var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));



var config = {
    user:'vermaarun922',
    database: 'vermaarun922',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var Pool=new Pool(config);
app.get('/test-db', function (req, res) {
    
    pool.query('SELECT * FROM USER', function(err, result){
    if (err){
        res.status(500).send(err.toString());
    }
    else {
        res.send(JSON.stringify(result));
    }
});

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/particles.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'particles.js'));
});

app.get('/ui/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.js'));
});

app.get('/ui/stats.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stats.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
