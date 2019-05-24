//MARK: Canvas SETUP
var dataCanvas = document.getElementById("dataCanvas");
var ctxDATA = dataCanvas.getContext("2d");

// begin key checks
function getKey() {



  // NOTE: W -> player0 
  if ( event.keyCode == 87) {
    
    if (stats[0].player0_angle < 360){
      stats[0].player0_angle++;
    } else {
      stats[0].player0_angle = 0;
    }

  }
  
  // NOTE: S ---> KEYBOARD SETUP
  else if ( event.keyCode == 83) {
    
    if (stats[0].player0_angle > 0){
      stats[0].player0_angle--;
    } else{
      stats[0].player0_angle = 359;
    }
  }

  // NOTE: Q -> player0 
  if ( event.keyCode == 81) {
    // Q will reduce power by 1
    if (stats[0].player0_power > 0){
      stats[0].player0_power--;
    } 
  }
  
  // NOTE: E ---> KEYBOARD SETUP
  else if ( event.keyCode == 69) {
    // E will increase power by 1
    if (stats[0].player0_power <  stats[0].player0_power_max){
      stats[0].player0_power++;
    } 
  }


  // NOTE: R -> player0 
  if ( event.keyCode == 82) {
    // R will increase power by 10
    // ... if we have less than our max power ...
    // ... minus 10... 
    if (stats[0].player0_power <  stats[0].player0_power_max - 10){
      stats[0].player0_power += 10;

    }  else {

      // if we are within 9 units of the max power 
      // simply assign the power to the max power 
      stats[0].player0_power = stats[0].player0_power_max;

    }
  }
  
  // NOTE: F ---> KEYBOARD SETUP
  else if ( event.keyCode == 70) {

    // F will decrease power by 10
    // if we have at least 10 power.. 
    // then decreasing power by 10 makes sense...
    if (stats[0].player0_power >=  10){
      stats[0].player0_power -= 10;

    }  else {

      // if we have 9 or less power... we simply drop to zero... 
      stats[0].player0_power = 0;
    }
  // end of the F - key check.. 
  }


  //NOTE: A ---->  KEYBOARD SETUP
  if ( event.keyCode == 65 ) {
    
    // Check to see if the angle is less than 360.. 
    if (stats[0].player0_angle < 360){
      stats[0].player0_angle+= 10;

    // if the angle is over 360... set it to zero..
    } else {

      stats[0].player0_angle = 0;
    // end the 360 -> A key check.. 
    }
    
  // this is checking for the "D" key .. 
  } else if ( event.keyCode == 68  ) {
   
    // this if check is inside the "D" key check.. 
    if (stats[0].player0_angle > 0){
      stats[0].player0_angle -= 10;
    } else{
      stats[0].player0_angle = 359;
    }
    
  // end of the A  D key checks.. 
  }



// END THE getKey function.. 
}

// MARK: Link the HTML document to the keyboard listener
// NOTE: There will be a slight delay to help with collision detection
document.addEventListener('keydown', function(event) {
  
  setTimeout(getKey(), 1000);

});





//BEGIN THE KEY UP LISTENER
document.addEventListener('keyup', function(event)  {
  
  // SPACEBAR CONTROL 
  if ( event.keyCode == 32)  {
    console.log("Player attempts to Shoot");

    // only fire if you're not firing... 
    if (!stats[0].player0_firing){

      // misfire and player death.. 
      if (stats[0].player0_power == 0) {

        // you blew up! 
        turret_list[0].death_active = true; 
      
      // you did NOT misfire... 
      } else {

        // make sure there are no ammos in play 
        if (ammo_list.length == 0 ) {
          
          // therefore create a new ammo ... 
          new Ammo( 0, "NORM", turret_list[0].x_muz - 2, turret_list[0].y_muz);

          // assign the stats of player0 firing to true.. 
          stats[0].player0_firing = true; 

        // end of the reload check for ammos in play ... 
        }

      // end of misfire / fire check 
      }

    // end of the player0 not firing check 
    }

  // end of the spacebar check...   
  }

// end of the key UP LISTENER.... 
});


