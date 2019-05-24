
// this dirt_list will hold all of our Dirt object instances
dirt_list = [];

// the Dirt class will be used to create dirt 
class Dirt {

  // the Dirt consrtuctor allows each dirt instance 
  // ... to have a place in memory and they can be unique
  constructor(x, y, loc, color){

    // Parameter -> Argument PROPERTIES
    this.x      = x;
    this.y      = y;
    this.color  = color; 

    // DEFAULT PROPERTIES
    this.name   = "DIRT";
    this.w      = 4;
    this.h      = 4;

    // give the dirt a location in the array... 
    this.loc = loc;  

    // gravitational and velocity PROPERTIES
    this.gravity = 1;

    // grounded will be used to state that if true...
    // a grounded dirt will no longer fall
    this.grounded = false;

    this.visible = true;

 

    // by pushing a dirt instance into the dirt_list
    // the dirt_list will automatically be 1 unit longer
    dirt_list.push(this);

  // end of the Dirt consrtuctor
  }

  // begin the Dirt update METHOD
  update(){

    // make sure the dirt is not already grounded... 
    if ( !this.grounded){

      // create a for loop for collision detection... 
      for (let i = 0; i < dirt_list.length; i++){

        // detectCol against the other dirts.. :D
        if (detectCol( dirt_list[i],  this ) ) {

          // only modify the dirt if the dirt isn't colliding against itself
          if (dirt_list[i] != this) {
            
            // a collision against another dirt has occurred... 
            // this dirt particle is now grounded... 
            this.grounded = true;
          }
        }
      }

      // if the dirt particle is not grounded 
      // it should fall 
      this.y += this.gravity;
    }

    // verify that an ammo was fired... 
    if (ammo_list.length > 0) {

      // check for a collision against the first bullet in the ammo_list
      // against this specific dirt
      if (detectCol( this,  ammo_list[0] ) ){

        this.visible = false; 

      // end of collision check... 
      }

    // end of the check for ammo_list.length check ... we only do this if 
    // there's at least 1 ammo
    }

    // first we need to check to make sure that the particle ...
    // has not already touched the planet.. (bottom of screen)
    if (this.y > 508 ){
      
      // we should no longer be affected by gravity since 
      // this particle of dirt is now grounded
      this.grounded = true;
    }

  // end of the Dirt Update method
  }

  earthquake() {
    /*
    // store the speccific index location of this collision within the 
    // dirt_list
    var index = dirt_list.indexOf(this);



    // the -1 check means we're found in the array itself.. 
    if ( index > -1){

      // completely remove ... at the index of index only 1 element in the array
      dirt_list.splice(index, 1);
    }


    // make the mini earthquake... 
    for (let i = 0; i < dirt_list.length; i++){
      dirt_list[i].grounded = false; 

      if (i == dirt_list.length - 1){
                  
        ammo_list.pop();
      }
    }

    */
  }

  // work on the draw method 
  draw() {

    // only display the dirt if it is visible... 
    if (this.visible){

      ctxDATA.fillStyle = this.color; 
      ctxDATA.fillRect(this.x, this.y, this.w, this.h);
    
    // end of visibility check 
    }

  // end of the draw method for the Dirt 
  }

// end of the entire Dirt class...
}


// ************* .    BEGIN . DIRT . ALGO . ************ 

/// constructor(x, y, loc, color){

// this is ourt primary function for generating Dirt :D
// xLoc -> means the x location of the dirt 
// the seed is related to the variance seed which helps make the terrain interesting
function generateTerrain(xLoc, seed) {

  // build some new dirts :D 
  for (let i = 0; i < seed; i++){

    new Dirt( xLoc * 4 , i * 6, i, MUD);

  }
}


// JAGGED MESA
function jaggedMesa() {

  // the variance is the variable that helps to both randomize
  // and create an interesting terrain height 
  let variance = Math.random() * 16 + 4;

  for (let i = 0; i < 128; i++ ){

    if ( ( i % 3 == 0) ||  ( i % 7 == 0) ){

      generateTerrain(i, (Math.random() * i % variance )  + variance  );

    } else {

      generateTerrain(i, (Math.random()  * i % variance)  + variance   );

    // end of if / else block
    }
  // end of for loop
  }
// end of the jaggedMesa function 
}



// SHIELD ROCK
function shieldRock() {

  // the variance is the variable that helps to both randomize
  // and create an interesting terrain height 
  let variance = Math.random() * 16 + 4;
  
  for (let i = 0; i < 128; i++ ){

    if (i % 10 < 3 ) {

      generateTerrain(i, i % variance + 5 );

    } else {

      generateTerrain(i, i % variance );
    }

  // end of shieldRock for loop 
  }

// end of the shieldRock function
}

let stage_terrain_roll = Math.random() * 100; 

if (stage_terrain_roll > 50) {
  jaggedMesa();
} else {
  shieldRock();

}


