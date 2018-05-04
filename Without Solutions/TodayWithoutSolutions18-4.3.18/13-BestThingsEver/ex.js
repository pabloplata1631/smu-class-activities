var fs = require("fs"); //fs comes with node 
fs.readFile("best_things_ever.txt", "utf8", function(error, data){
    var output = data.split(",");
    console.log(output);
    for(var i = 0; i < output.length; i++){
      console.log(output[i]);  
    }
});
