var fs = require("fs");

var textFile = process.argv[2];

fs.appendFile(textFile, "yeahh!!", function(err){
    if(err){
        console.log(err);
    }else {
        console.log("conten appended!!!");
    }
});