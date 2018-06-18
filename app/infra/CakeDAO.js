function CakeDAO (connection) {
	this._connection = connection;
}

CakeDAO.prototype.lista = function(callback){
	this._connection.query('select * from cake', callback);
}

CakeDAO.prototype.method_name = function(cake, callback) {
	this._connection.query('insert into cake set ?', cake, callback);
}

module.exports = function () {
	return CakeDAO;
}