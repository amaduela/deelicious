var express = require('express');
var load = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
	app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(express.static('./app/public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(expressValidator());

	load({ cwd: 'app' })
		.include('infra')
		.then('routes')
		.into(app);

	return app;
}