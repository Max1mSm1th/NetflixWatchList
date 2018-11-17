var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "netflix_db"
});

if (process.env.JAWSDB_DB) {
  connection = mysql.createConnection(process.env.JAWSDB_DB);
} else {
  connection = mysql.createConnection({
    host: 'uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'm5zeesxgs2q8i8nb',
    password: 'u2em2ml5w894ykno',
    database: 'i0f3dht71zfkm6aj'
  });
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
