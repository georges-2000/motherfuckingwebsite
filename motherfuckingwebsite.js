setTimeout(function(){

  $( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 500,
      modal: true,
      buttons: {
        "Ok on y va !": function() {
          $( this ).dialog( "close" );
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); 
        },
        "Euh non merci": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );


}, 2000);
