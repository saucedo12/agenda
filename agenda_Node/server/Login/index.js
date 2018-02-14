const express = require('express'),
	path = require('path'),
	Router = express.Router(),
	User = require('../usermodel.js'),
	mongoose = require('mongoose')

Router.post('/', function (req, res) {

	var query = User.find({
		email: req.body.user,
		password: req.body.pass
	});

	mongoose.Promise = global.Promise;
	var promise = query.exec();

	promise.then(function (doc) {
		if (doc.length) {
			res.send('Validado');
		} else {
			res.send('No Validado');
		}
	});
});

module.exports = Router