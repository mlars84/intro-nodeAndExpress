console.log('some text');
$(document).ready(onReady);

function onReady() {
  console.log( 'JQ' );
  $( '.container' ).append( '<div class=""></div>' );
  $( '#add-song' ).on( 'click', addSong );
} // end onReady

// addSong function
function addSong () {
  console.log( 'addSong' );
  var songName = $( '#song-name' ).val();
  console.log(songName);

  var objectToSend = {
    name: songName,
  };

  $.ajax({
    method: 'POST',  // send data to be added on server
    url: '/song',
    data: objectToSend,
    success: function( response ) {
      console.log(response);
    }
  });

} // end addSong
