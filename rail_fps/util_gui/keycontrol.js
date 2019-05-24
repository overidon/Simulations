//MARK: Canvas SETUP
var dataCanvas = document.getElementById("dataCanvas");
var ctxDATA = dataCanvas.getContext("2d");

// grab mouse movement
dataCanvas.onmousemove = function() {
  
  stats[0].x_mouse = event.pageX;
	stats[0].y_mouse = event.pageY;
  
};

dataCanvas.onmouseup = function() {

  if (!stats[0].reloading && !stats[0].rechambering){
    stats[0].firing = true; 
  }

};


// Begin the key checks 
function getKey() {


    // NOTE: UP KEYBOARD SETUP
  if ( (event.keyCode == 38) || (event.keyCode == 87)) {
    
    player_list[0].dashUP = true;
    //console.log("Player Moves Up");
   
  }
  
  // DOWN KEYBOARD SETUP
  else if ( (event.keyCode == 40) || (event.keyCode == 83)) {


    //console.log("Player Moves Down");
    player_list[0].dashDOWN = true;
    

  }

  // SPACE BAR KEYBOARD SETUP
  if ( event.keyCode == 32)  {
    console.log("Spacebar pressed");

  }

// end the getKey function
}


// MARK: Link the HTML document to the keyboard listener
// NOTE: There will be a slight delay to help with collision detection
document.addEventListener('keydown', function(event) {
  
  setTimeout(getKey(), 1000);

});


//BEGIN THE KEY UP LISTENER
document.addEventListener('keyup', function(event)  {
  

  // NOTE: UP KEYBOARD SETUP
  if ( (event.keyCode == 38) || (event.keyCode == 87)) {
    
    player_list[0].dashUP = false;
    //console.log("Player Moves Up");
   
  }
  
  // DOWN KEYBOARD SETUP
  else if ( (event.keyCode == 40) || (event.keyCode == 83)) {
    
    //console.log("Player Moves Down");
    player_list[0].dashDOWN = false;
  }
  
  
});