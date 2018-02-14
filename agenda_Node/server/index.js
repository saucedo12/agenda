// JavaScript Document
var http = require('http'),
	express = require('express'),
	bodyParser = require('body-parser'),
	login = require('./Login'),
	eventRouter = require('./Event'),
	path = require('path'),
	mongoose = require('mongoose')

var port = 8080
var app = express()

mongoose.connect('mongodb://localhost/agenda')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use('/login', login)
app.use('/events', eventRouter)

app.use(express.static(path.join(__dirname, '../') + 'public')) //public

var Server = http.createServer(app)

Server.listen(port, function () {
	console.log('Servidor corriendo en el puerto: ' + port)
})
