//popup sexuelle

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


//CSS mode Psycho
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}