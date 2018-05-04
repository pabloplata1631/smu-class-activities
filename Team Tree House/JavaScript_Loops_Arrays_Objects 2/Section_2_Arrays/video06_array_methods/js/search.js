var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true){
  search = prompt("search for product - type 'list' to show all products - and 'quit' to exit")
  search = search.toLocaleLowerCase();
  if (search === 'quit'){
    break;
  }else if (search === 'list'){
    print(inStock.join(', '));
 } else {
   if (inStock.indexOf(search)){
     print('yes we have' + search + " in store")
   } else {
     print(search + 'in unavailable')
   }
 }
}


