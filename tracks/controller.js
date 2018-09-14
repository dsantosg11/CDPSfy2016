var fs = require('fs');

exports.create = function (req, res) {
  console.log(req.file);
  var track = req.file;
  var stream = fs.createWriteStream('/mnt/nas/canciones/'+track.originalname);
  stream.on('open',function(fd){
    stream.write(track.buffer);
    stream.end();
  });
  res.end();
};

exports.createcover = function (req, res) {
  console.log(req.file);
  var cover = req.file;
  var stream = fs.createWriteStream('/mnt/nas/caratulas/'+cover.originalname);
  stream.on('open',function(fd){
    stream.write(cover.buffer);
    stream.end();
  });
  res.end();
};

exports.give = function (req, res) {
  var trackname = req.params.trackName;
  res.sendFile('/mnt/nas/canciones/'+trackname);
};

exports.givecover = function (req, res) {
  var covername = req.params.coverName;
  res.sendFile('/mnt/nas/caratulas/'+covername);
};

exports.delete = function (req, res) {
  var rutaTrack = '/mnt/nas/canciones/'+req.query.id;
  var rutaCover='/mnt/nas/caratulas/'+req.query.id.split('.')[0]+'.png';
  fs.stat(rutaTrack,function(err,stats){
    if(stats){
        fs.unlink(rutaTrack);
    }
    if (err){
      console.log("Canción no subida por el usuario. Pero la quito de tu vista");
    }
  });
  
  fs.stat(rutaCover,function(err,stats){
    if(stats){
        fs.unlink(rutaCover);
    }
    if (err){
      console.log("Carátula no subida por el usuario. Pero la quito de tu vista");
    }
  });
};