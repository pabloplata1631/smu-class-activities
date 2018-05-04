var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@ssW0rd",
    database: "dallas"
});

connection.connect(function(err){
    if (err) throw err;
    readColleges();

});

//fuction readColleges(){
   // connection.query("Select * from colleges", function);
//}