var fs = require("fs"); 

fs.writeFile("movies.txt", "Mavs, Nets, Cav, OKC", function(err){
  if(err){
    return console.log(err);
}  
console.log("the text file was written!")
});


