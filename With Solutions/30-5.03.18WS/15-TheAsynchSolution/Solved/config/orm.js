var connection = require("../config/connection.js");

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
    console.log("2: Execute Query");
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], 
      
      function(err, result) {
        console.log("3: Query Executed");
        if (err) throw err;
        cb(result);
      }

    );

  }
};

module.exports = orm;
