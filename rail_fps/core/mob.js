var mob_list = [];


class Mob {

  constructor (name, x, y){

    this.name = name; 
    this.x    = x; 
    this.y    = y; 

    this.y_world = y;
    this.x_world = x; 

    this.size_ratio = 1;

    this.distance_to_center = 0;
    this.angle_to_center = 0;

    this.player_target = false; 

    this.target_off_color = YELLOW;
    this.target_on_color  = RED;  

    this.dead = false; 

    // TURN BACK ON AFTER FIXING GROUND!!! 
    this.debug = false;
    this.active = false; 

  

    if (this.name == "ENEMY_001C"){
      this.img = document.getElementById("ENEMY_001C"); 
      this.img_dead = document.getElementById("ENEMY_DEAD2"); 
      this.img_alive = document.getElementById("ENEMY_001C"); 

      this.w = 40;
      this.h = 32;

      this.w_actual = 40;
      this.h_actual = 32;

      this.x_hitbox = this.x + (2 * this.size_ratio) ;
      this.y_hitbox = this.y;
      this.w_hitbox = this.w_actual * ( 0.7 * this.size_ratio);
      this.h_hitbox = this.h_actual * ( 0.7 * this.size_ratio);
    }

    else {

      this.img = document.getElementById("ENEMY_001C"); 
      this.w = 40;
      this.h = 32;

      this.w_actual = 40;
      this.h_actual = 32;
    }


    mob_list.push(this);
  }

  update() {

 

    this.distance_to_center = findDistToCenter(this);

    this.angle_to_center = findAngleToCenter(this);


    this.size_ratio = (this.distance_to_center / 181) + 0.3;

  

    this.y = this.y_world + (stats[0].z_depth * this.size_ratio);
    this.x = this.x_world  - (stats[0].z_depth * this.size_ratio  );



    // repair the size ratio here... 
    this.x_hitbox = this.x + (7 * this.size_ratio) ;
    this.y_hitbox = this.y;
    this.w_hitbox = this.w_actual * ( 0.50 * this.size_ratio);
    this.h_hitbox = this.h_actual * ( 0.4 * this.size_ratio);

    // connect the crosshair to this mob 

    if ( detectCrossVsMob(stats[0], this)){
      this.player_target = true; 

      // the enemy is targetted now check to see if the player is firing or not
      if (stats[0].firing) {
        this.img = this.img_dead;
        this.dead = true; 
      }

    } else {
      this.player_target = false;
    }
  
    
  }

  draw(){

    if (this.name == "ENEMY_001C"){
     
      if (stats[0].debug && this.active){
        if (this.player_target){
          ctxDATA.fillStyle = this.target_on_color; 
          ctxDATA.fillRect( this.x_hitbox, this.y_hitbox, this.w_hitbox, this.h_hitbox);

        } else {
          ctxDATA.fillStyle = this.target_off_color; 
          ctxDATA.fillRect( this.x_hitbox, this.y_hitbox, this.w_hitbox, this.h_hitbox);
        }
      }
    }

    // TURN BACK ON AFTER FIXING GROUND!!! 
    if (this.active){
      ctxDATA.drawImage(this.img, this.x, this.y, this.w * this.size_ratio, this.h * this.size_ratio);

    }
  
    if (this.debug){

      // Render the label 
      ctxDATA.fillStyle = BLACK;
      ctxDATA.font = 10 + "px Arial";
      ctxDATA.fillText(this.distance_to_center, this.x, this.y - 10);

      // Render the  label 
      ctxDATA.fillStyle = GREEN;
      ctxDATA.font = 10 + "px Arial";
      ctxDATA.fillText("ANGLE: " + this.angle_to_center, this.x, this.y - 20);

    }

  // end of the draw method 
  }

// end of the mob class ... 
}

new Mob("ENEMY_001C", 242, 256, );
new Mob("ENEMY_001C", 194, 296, );
new Mob("ENEMY_001C", 130, 346, );

new Mob("ENEMY_001C", 0, 472 );
new Mob("ENEMY_001C", 232, 296 );
