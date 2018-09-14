var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({inMemory: true});

var controller = require('./controller.js');

app.get('/track/:trackName', controller.give);
app.get('/cover/:coverName', controller.givecover);
app.post('/tracks', upload.single('track'), controller.create);
app.post('/covers', upload.single('cover'), controller.createcover);
app.delete('/delete', controller.delete);


app.listen(8080, function () {
  console.log('Servidor de tracks escuchando en puerto 8080');
});