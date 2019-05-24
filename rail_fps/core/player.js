var player_list = [];

class Player {


  constructor() {

    this.name = "PLAYER";

    this.dashUP   = false;
    this.dashDOWN = false; 
    this.z = 1;

    player_list.push(this);

  // end of the player constructor 
  }

  update() {


    if (this.dashUP){
      
      // this makes it so the z_depth is growing 
      // exponentially
      // this makes it so ground items that are closer 
      // to the edge of the screen move faster

      stats[0].z_depth *= 1.02;

      this.z = stats[0].z_depth 
      
    }

    if (this.dashDOWN){

      
      if (stats[0].z_depth > 124) {
        stats[0].z_depth *= 0.98; 
      } else {
        stats[0].z_depth = 124;
      }
      
    }

    

  // end of the update method 
  }

// end of the player class 
}

// make a new Player 
new Player(); 