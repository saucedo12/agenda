// JavaScript Document
const User = require('./usermodel.js'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/agenda')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});

let user = new User({
	id: Math.floor(Math.random() * 500),
	nombre: 'humberto',
	password: '123',
	birthday: Date('1988-03-29'),
	email: 'h@mail.com.mx'
})
user.save(function (error) {
	if (error) {
		console.log("error: " + error);
	}
	console.log("Registro guardado");
})
