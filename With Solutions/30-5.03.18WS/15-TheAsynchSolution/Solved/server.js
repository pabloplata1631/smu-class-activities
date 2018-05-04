var orm = require("./config/orm.js");

// Call orm method, passing in the anonymous function (with "res") as the callback.
console.log("1: Run ORM Query Function");
orm.selectWhere("parties", "party_type", "grown-up", 
  function(result){ 
    console.log("4: Received Result");    
    console.log(result); 
  }
);