var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",// Your username
  password: "pAssw0rd",// Your password
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs(); // creating function 
  queryDanceSongs();
});

function queryAllSongs() {
    var sql = "select * from songs order by Title";

  connection.query( sql, function (err, res) {
    for (var i = 0; i < res.length; i++) {

        var row = red[i].id + "|";
        
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}
