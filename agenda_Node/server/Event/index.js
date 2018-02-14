const Event = require('../model.js'),
	express = require('express'),
	path = require('path'),
	Router = express.Router(),
	mongoose = require('mongoose')

Router.get('/all', function (req, res) {
	var query = Event.find({});
	// Use native promises
	mongoose.Promise = global.Promise;
	var promise = query.exec();

	promise.then(function (doc) {
		res.send(doc);
	});
});

Router.post('/new', function (req, res) {
	let evento = new Event({
		id: Math.floor(Math.random() * 50),
		title: req.body.title,
		start: req.body.start,
		end: req.body.end
	});

	evento.save((error) => {
		if (error) callback(error)
		console.log("Registro guardado exitosamente");
	});
});

Router.post('/delete', function (req, res) {
	Event.remove({
		id: req.body.id
	}, (error) => {
		if (error) console.log(error)
		console.log("El registro fue eliminado ");
	});
});

Router.post('/update', function (req, res) {
	let evento = {
		title: req.body.title,
		start: req.body.start,
		end: req.body.end
	};
	let eventId = req.body.id;

	Event.update({
		id: eventId
	}, evento, (error, result) => {
		if (error) console.log(error)
		console.log(result);
	});
});

module.exports = Router
