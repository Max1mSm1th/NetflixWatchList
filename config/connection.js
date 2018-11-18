var mysql = require("mysql");
var connection 

if (process.env.JAWSDB_DB) {
  connection = mysql.createConnection(process.env.JAWSDB_DB);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'netflix_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack + '\n\n');
    return;
  }
  console.log("connected as id " + connection.threadId + '\n\n');
});

module.exports = connection;
