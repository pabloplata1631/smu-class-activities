var playList = [
  [' i did it my way', 'sinatra'],
  ['respect', 'franklin'],
  ['imaggine', 'lennon'],
  ['born to run', "springsteen"],
  ['louie, louie', "kingmen"],
  ['maybellene, berry']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















