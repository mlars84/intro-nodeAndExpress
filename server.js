var express = require( 'express' );
var path = require( 'path' );

var app = express();

var songData = [
  { name: 'shake it off' },
  { name: "what's going on?" }
];

// middle ware
app.use( express.static( 'public' ) );

// get route on your server (the path that is on the end of your website url)
app.get( '/', function(req, res ) { //when you go to the server at slash
  console.log( 'in get route' ); // this coe is going to run
  res.sendFile(path.join( __dirname, 'public/index.html' ) ); //__dirname helps build complete path
}); // this is the mailbox and url is addresss

app.get( '/song', function( req, res ) { // path or location on server to get data
  console.log( 'in get song route' );
  // all the work
  res.send( songData );
});

// tells our server to listen on port 3001
app.listen( 3001, function() {
  console.log( 'listening on port 3001' );
});
