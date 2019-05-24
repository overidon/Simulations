// MARK: Make a list to hold the turrets
// since the turret_list is empty we can easily push
// ...turrets into it 
var turret_list = [];

// MARK: Turret Class Constructor Area 
class Turret {

  // the constructor for the Turret will require a name
  // the only parameter for a turret will be its ID
  constructor (id){

    // next we will connect the turret with it paramter 
    this.name = "TURRET";
    this.id = id;

    // the location of the turret's .x should be random
    this.x = Math.floor( Math.random() * (gs[0] - 14) );

    // the location of the turret's y should be above the screen 
    this.y = -40; 

    // control the width and height 
    this.w = 10;
    this.h = 16;

    // barrel properties
    this.barrel_length = 30; 

    // test the turret arm hinge
    this.x_hinge = this.x + this.w / 2;
    this.y_hinge = this.y;
    this.r_hinge = this.w / 2 - 1; 

    // Muzzle Properties...  
    this.angle = 0; 
    this.x_muz = this.x + this.w / 2  + this.barrel_length; 
    this.y_muz = this.y; 
    this.r_muz = this.w / 4;
    
    // this logic block will control the turret's color 
    if (this.id == 0) {
      this.color = NUKE;
    } else if (this.id == 1) {
      this.color = ARMYGREEN;
    } else {
      this.color = LIMETIME;
    }

    // gravitational and velocity PROPERTIES
    this.gravity = 1;

    // control the turret's dirt touching properties 
    this.dirt_touch = 0;

    // grounded will be used to state that if true...
    // a grounded dirt will no longer fall
    this.grounded = false;

    // set the turret to setup ... 
    this.target_state = "SETUP";

    // setup the turret angle..  ?
    this.turret_angle = 0

    // death properties
    this.death_active = false;
    this.death_cur = 0;
    this.death_max = 30; 

    // primary active property
    this.active = true; 


    // let's push the turret into its appropriate list 
    turret_list.push(this);

  // end of Turret constructor  
  }

  // begin turret update method
  update() {

    // only process turret movement if we're not exploded etc.. falling
    if (this.grounded && this.active ){
      getYComponent_0();
      getXComponent_0();
    }

    /// experimental death animation... for the base 
    if (this.death_active && this.active ){
      if (this.death_cur < this.death_max){
       
        this.w = this.w + 6;
        this.h = this.h + 6;
        this.x -= 3;
        this.y -= 3;

        this.death_cur ++;
      } else {
        // if the death animation is over... make the turret disappear
        this.active = false;
      }
    }

    // this check will make sure the turret is touching a minimum of 3 
    // ... dirts... 
    if (this.dirt_touch >= 10) {
      this.grounded = true;
    }

    if (!this.grounded && this.active) {

      // make the turret base fall
      this.y += this.gravity;

      // move the hinge and the muzzle when falling
      this.y_hinge = this.y;
      this.y_muz   = this.y; 

      // create a for loop for collision detection... 
      for ( let i = 0; i < dirt_list.length; i++ ){

        // detectCol against dirts.. :D
        if (detectCol( dirt_list[i],  this ) ) {

          // a collision against a dirt has occurred... 
          // increment the dirt_touch properties of the turret
          this.dirt_touch++;

          // once the turret is on the ground... the game is now in GAME MODE... 
          if (this.target_state == "SETUP"){
            stats[0].game_state = "GAME";
          }

        // end of a detectCol check  
        }
      
      // end the loop of the detectCol  checks
      }
    
    // this logic will only occur if we're not grounded. 
    }

  // end of update method of the turret 
  }

  // BEGIN TURRET DRAW METHOD... 
  draw() {

    // only the player if it is active... 
    if (this.active){

      // Draw PLAYER WEAPON barrel... 
      ctxDATA.beginPath();
      ctxDATA.strokeStyle = GREEN;
      ctxDATA.lineWidth = 3;
      ctxDATA.moveTo(this.x_hinge, this.y_hinge,);
      ctxDATA.lineTo(this.x_muz,  this.y_muz);
      ctxDATA.stroke();   

      // attempt to draw the turret hinge.. 
      ezCircle(this.x_hinge, this.y_hinge, this.r_hinge, 3, NUKE, NUKE);
      
      // attempt to draw the muzzle 
      ctxDATA.beginPath();
      ctxDATA.arc(this.x_muz, this.y_muz, this.r_muz, 0, 2 * Math.PI, false);
      ctxDATA.lineWidth = 3;
      ctxDATA.strokeStyle = WHITE;
      ctxDATA.stroke();
      ctxDATA.fillStyle = BLACK;
      ctxDATA.fill(); 

      // draw the turret base..
      ctxDATA.fillStyle = this.color; 
      ctxDATA.fillRect(this.x, this.y, this.w, this.h);

    // end of the active check... 
    }

  // end of the turret draw method 
  }
   
// end of Turret class   
}



// TODO -> BUILD AI_TURRET
// MARK: Turret Class Constructor Area 
class TurretAI {

  // the constructor for the Turret will require a name
  // the only parameter for a turret will be its ID
  constructor (id){

    // next we will connect the turret with it paramter 
    this.name = "TURRET";
    this.id = id;

    // the location of the turret's .x should be random
    this.x = Math.floor( Math.random() * (gs[0] - 14) );

    // the location of the turret's y should be above the screen 
    this.y = -40; 

    // control the width and height 
    this.w = 10;
    this.h = 16;

    // barrel properties
    this.barrel_length = 30; 

    // test the turret arm hinge
    this.x_hinge = this.x + this.w / 2;
    this.y_hinge = this.y;
    this.r_hinge = this.w / 2 - 1; 

    // Muzzle Properties...  
    this.angle = 0; 
    this.x_muz = this.x + this.w / 2  + this.barrel_length; 
    this.y_muz = this.y; 
    this.r_muz = this.w / 4;
    


    // this logic block will control the turret's color 
    if (this.id == 0) {
      this.color = NUKE;
    } else if (this.id == 1) {
      this.color = ARMYGREEN;
    } else {
      this.color = LIMETIME;
    }

    // gravitational and velocity PROPERTIES
    this.gravity = 1;

    // control the turret's dirt touching properties 
    this.dirt_touch = 0;

    // grounded will be used to state that if true...
    // a grounded dirt will no longer fall
    this.grounded = false;

    // set the turret to setup ... 
    this.target_state = "SETUP";

    // setup the turret angle..  ?
    this.turret_angle = 0

    // death properties
    this.death_active = false;
    this.death_cur = 0;
    this.death_max = 30; 

    // primary active property
    this.active = true; 

    // let's push the turret into its appropriate list 
    turret_list.push(this);

  // end of Turret constructor  
  }

  // begin turret update method
  update() {

    // only process turret movement if we're not exploded etc.. falling
    if (this.grounded && this.active ){
      getYComponent_0();
      getXComponent_0();
    }

    /// experimental death animation... for the base 
    if (this.death_active && this.active ){
      if (this.death_cur < this.death_max){
        
        // check for explosion collision 
        for (let i = 0; i < dirt_list.length; i++){

            if (detectCol(self, dirt_list[i])){
              dirt_list[i].color = GREEN;
            }
        }
       
        this.w = this.w + 4;
        this.h = this.h + 4;
        this.x -= 2;
        this.y -= 2;

        this.death_cur ++;
      } else {
        // if the death animation is over... make the turret disappear
        this.active = false;
      }
    }

    // this check will make sure the turret is touching a minimum of 3 
    // ... dirts... 
    if (this.dirt_touch >= 10) {
      this.grounded = true;
    }

    if (!this.grounded && this.active) {

      // make the turret base fall
      this.y += this.gravity;

      // move the hinge and the muzzle when falling
      this.y_hinge = this.y;
      this.y_muz   = this.y; 

      // create a for loop for collision detection... 
      for ( let i = 0; i < dirt_list.length; i++ ){

        // detectCol against dirts.. :D
        if (detectCol( dirt_list[i],  this ) ) {

          // a collision against a dirt has occurred... 
          // increment the dirt_touch properties of the turret
          this.dirt_touch++;

          // once the turret is on the ground... the game is now in GAME MODE... 
          if (this.target_state == "SETUP"){
            stats[0].game_state = "GAME";
          }

        // end of a detectCol check  
        }
      
      // end the loop of the detectCol  checks
      }
    
    // this logic will only occur if we're not grounded. 
    }

  // end of update method of the turret 
  }

  // BEGIN TURRET DRAW METHOD... 
  draw() {

    // only the player if it is active... 
    if (this.active){

      // Draw PLAYER WEAPON barrel... 
      ctxDATA.beginPath();
      ctxDATA.strokeStyle = GREEN;
      ctxDATA.lineWidth = 3;
      ctxDATA.moveTo(this.x_hinge, this.y_hinge,);
      ctxDATA.lineTo(this.x_muz,  this.y_muz);
      ctxDATA.stroke();   

      // attempt to draw the turret hinge.. 
      ezCircle(this.x_hinge, this.y_hinge, this.r_hinge, 3, NUKE, NUKE);
      
      // attempt to draw the muzzle 
      ctxDATA.beginPath();
      ctxDATA.arc(this.x_muz, this.y_muz, this.r_muz, 0, 2 * Math.PI, false);
      ctxDATA.lineWidth = 3;
      ctxDATA.strokeStyle = WHITE;
      ctxDATA.stroke();
      ctxDATA.fillStyle = BLACK;
      ctxDATA.fill(); 

      // draw the turret base..
      ctxDATA.fillStyle = this.color; 
      ctxDATA.fillRect(this.x, this.y, this.w, this.h);

    // end of the active check... 
    }

  // end of the turret draw method 
  }
   
// end of Turret class   
}

// build a turret 
new Turret(0);

console.log(turret_list[0]);