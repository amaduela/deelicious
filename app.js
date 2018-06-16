var app = require('./config/express')();
var rotaProduto = require('./app/routes/produto')(app);

app.listen(3000, function () {
	console.log('servindo app com express');
});