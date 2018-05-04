var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@ssword",
    database: "top_songs"
});


connection.connect(function(err){
    if (err) throw err;
    readQuery();
});

function readQuery(){
    connection.query("Select * from colleges", function (err, res) {
        if (err) throw err;
        console.log("WTF HAPPENED BRO!!!");
    });
} 