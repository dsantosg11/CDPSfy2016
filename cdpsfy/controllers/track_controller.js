var fs = require('fs');
var track_model = require('./../models/track');
var needle = require('needle');
// Devuelve una lista de las canciones disponibles y sus metadatos
exports.list = function (req, res) {
	var tracks = track_model.tracks;
	res.render('tracks/index', {tracks: tracks});
};

// Devuelve la vista del formulario para subir una nueva canción
exports.new = function (req, res) {
	res.render('tracks/new');
};

// Devuelve la vista de reproducción de una canción.
// El campo track.url contiene la url donde se encuentra el fichero de audio
exports.show = function (req, res) {
	var track = track_model.tracks[req.params.trackId];
	track.id = req.params.trackId;
	res.render('tracks/show', {track: track});
};

// Escribe una nueva canción en el registro de canciones.
exports.create = function (req, res) {
	var track = req.files.track;
	var cover = req.files.cover;
	console.log(track);
	console.log('Nuevo fichero de audio. Datos: ', track);
	console.log('Nuevo fichero de imagen. Datos: ', cover);
	var name = track.originalname.split('.')[0];
	var id;
  	var idNoValida = true;
  	var num=4;

//Creamos un id que no exista y siga la secuencia previa de ids para la canción.  
  do{
    idNoValida=true;
    num++;
    id = num.toString();
    for (var cancion in track_model.tracks){
      if(id==cancion){
	idNoValida = false;
      }
    }
  }while(!idNoValida);

//Comprobación de que dos canciones no tengan el mismo nombre ante el usuario
  var control=true;    
  do{
    control=false;  
    for (var cancion in track_model.tracks){
        if (track_model.tracks[cancion].name==name){
            name=name+'(1)';
            control=true;
            break;
        }
    } 
  }while(control);

  var url = 'http://tracks.cdpsfy.es:8080/track/'+id+'.mp3';
  var urlcover = '/images/quaver3.png';
  
  var data = {
    id: id,
    track: {
      buffer: track.buffer,
      filename: id+'.mp3',
      content_type: 'audio/mpeg'
    }
  };
  
  needle.post('tracks.cdpsfy.es:8080/tracks',data, {multipart: true},function(err, res, body){
    if(err){
      console.log(err);
      //En la respuesta esta la url del track
  }
});

if(cover){
    var datoscover = {
    id: id,
    cover: {
      buffer: cover.buffer,
      filename: id+'.png',
      content_type: 'image/png'
      }
    };
  needle.post('tracks.cdpsfy.es:8080/covers',datoscover, {multipart: true},function(err, res, body){
   if(err){
      console.log(err);
      //En la respuesta esta la url del track
   }
  });
  urlcover='http://tracks.cdpsfy.es:8080/cover/'+id+'.png';
}

	// Escribe los metadatos de la nueva canción en el registro.
	track_model.tracks[id] = {
		name: name,
		url: url,
		urlcover: urlcover
	};
	
	console.log(track_model.tracks);

	res.redirect('/tracks');
};

// Borra una canción (trackId) del registro de canciones 
exports.destroy = function (req, res) {
	var trackId = req.params.trackId;

  needle.delete('tracks.cdpsfy.es:8080/delete?id='+trackId+'.mp3', null, function(err, res){
    if(err){
      console.log(err);
    }
  });
	// Borra la entrada del registro de datos
	delete track_model.tracks[trackId];
	res.redirect('/tracks');
};
