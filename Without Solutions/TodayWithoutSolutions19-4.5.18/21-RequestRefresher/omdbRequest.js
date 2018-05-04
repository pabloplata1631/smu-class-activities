// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package
var request = require("request");

// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) { // rror, response, body are urguments  so 3 urgs

 // gives us the header information 

 // body acutal content that is coming back from request 
  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Then we print out the imdbRating
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);// to get imdbRating) read directions or inspect go to network and so  so so 
  }
});
  //npm install to gett all packages 