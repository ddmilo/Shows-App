var express = require('express');
var app = express();
var hbs = require('hbs');

app.get(`/`, function(req, res){
	localhost:10001
	res.send('Mic Check');
});

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get(`/shows`, function(req, res){
	var faveShows = ["The Walking Dead", "Mr. Robot", "Game of Thrones"]
	// res.send('Working');
	res.render('shows', {
		data: faveShows
	});
});


var port = process.env.PORT || 10001;

app.listen(port, function(){
	console.log('shows-app is listening on port 10001');
	
});