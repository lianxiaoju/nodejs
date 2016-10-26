var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'QWEasdzxc123',
		database:'zwj',
		port: 3306
	});

	connection.connect();
	return connection;
}

module.exports = getConnection;