var ammo_list = [];

// begin Ammo class 
class Ammo {

  // begin Ammo constructor 
  constructor(id, name, x, y) {

    // the id will be player id -> so we know whose this this belongs
    this.id = id; 

    // the name will be used for the ammo type as well as ammo color? 
    this.name = name 

    this.x = x;
    this.y = y;

    // TODO 
    this.w = 4; 
    this.h = 4; 

    this.color = GREEN;

    // IMPORTANT PHYSICS PROPERTIES... 
    this.xV = getXV() *  0.1;
    this.yV = getYV() * -0.1; 

    // drag max should be the opposive of the yV 
    this.drag_max = this.yV * -1;
    this.drag     = 0;

    this.gravity = 1; 

    // TODO -> this will be based on the power of the shot later..
    this.fly_max = stats[0].player0_power;
    this.fly_cur = 0; 
    this.fly = true;


    // we start out not exploded yet.
    this.explode = false;
    this.dig     = true; 
    this.visible = true; 

    // WHAT TYPE AMMO are we? 
    this.ammo_type = stats[0].player0_ammo;

    this.w_max = stats[0].norm_expl_max_w;
    this.h_max = stats[0].norm_expl_max_h;

    // minimums will be 4 by default 
    this.w_min = 4;
    this.h_min = 4; 

    // ammo should only appear
    this.target_state = "GAME";

    ammo_list.push(this);

  // end of the Ammo constructor 
  }

  // begin Ammo update 
  update () {

    // todo ... 

    // Only process the falling of objects in the correct state
    if( stats[0].game_state == this.target_state) {

      // make sure the ammo is flying.. 
      if (this.fly){


          // if this ammo belongs to player 0
          // player 0 gets to shoot again.. 
          if (this.id == 0 ){
            if (this.x < 4 || this.x > 512 || this.y > 700){
              stats[0].player0_firing = false; 

              // we automatically pop since 
              // there's no need to display an explosion
              // because the ammo left the combat area.. 
              ammo_list.pop();
            }
          }



        // move the ammo by it's velocity
        this.x += this.xV;
        this.y += this.yV + this.drag;

        // incorporate drag... 
        this.drag = (this.fly_cur / this.fly_max) * this.drag_max; 

        // increment your current flying timer.. 
        this.fly_cur++;

        // extra gravity stuff 
        if (this.fly_cur > this.fly_max){
          this.fly_cur += this.fly_cur / this.fly_max;
        }

      // end the if check for flying... 
      }
      
      // make sure we're falling or flying 
      if ( this.fly ){

        // check for collision with player0
        if (detectCol(this, turret_list[0])){
          turret_list[0].death_active = true; 
          
          // if this ammo belongs to player 0
          // player 0 gets to shoot again.. 
          if (this.id == 0){
            stats[0].player0_firing = false; 
          }
          
        }

        // create a for loop for collision detection... 
        for (let i = 0; i < dirt_list.length; i++){
        
        
          // detectCol against the other dirts.. :D
          if (detectCol( dirt_list[i],  this ) ) {
            
            this.fly_cur = 0;
            this.fly = false;
            this.explode = true; 

            // if this ammo belongs to player 0
            // player 0 gets to shoot again.. 
            if (this.id == 0){
              stats[0].player0_firing = false; 
              
            }

          // end the collision check against dirt 
          }

        // end the loop for dirt collision
        }
  
      // end of this sepecific check to see if we're falling or flying 
      }
      

      // handle explodey checks
      if( this.explode){
        
        // GROW 
        if (this.w < this.w_max){
          this.w += 0.5;
          this.h += 0.5;

          this.x -= 0.05
        } else {
          this.explode = false;
          this.visible = false; 

          // only pop the ammo if the explosion is complete..
          ammo_list.pop();

          // EXPERIMENTAL CHECK FOR DESTROYED DIRT...
          detectDestroyedDirt();
          
        }

        
      }
    
    // end of ammo state check 
    }

  // end of ammo update 
  }

  // begin Ammo draw method 
  draw() {

    // Only draw objects in the correct state
    if (stats[0].game_state == this.target_state){
      
      // make sure the ammo is visible 
      if (this.visible){
        // render the ammo
        ctxDATA.fillStyle = WHITE 
        ctxDATA.fillRect(this.x, this.y, this.w, this.h);

        ctxDATA.fillStyle = BLACK; 
        ctxDATA.fillRect(this.x + 2, this.y + 2, this.w - 4, this.h - 4);

        ctxDATA.fillStyle = YELLOW; 
        ctxDATA.fillRect(this.x + 3, this.y + 3, this.w - 6, this.h - 6); 
      }


    // end the target_state check
    }


  // end Ammo draw method ... 
  }


// end of the Ammo class 
}
