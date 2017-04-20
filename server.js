var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

var app = express();

var songData = [
  { name: 'shake it off' },
  { name: "what's going on?" }
];

// middle ware
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded({ extended: true }) );

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

app.post( '/song', function( req, res ) {
  console.log( 'in post route' );
  console.log( 'req.body ->', req.body );
  songData.push( req.body );
  res.sendStatus( 201 ); // equivalent to OK status
});

// tells our server to listen on port 3001
app.listen( 3001, function() {
  console.log( 'listening on port 3001' );
});
