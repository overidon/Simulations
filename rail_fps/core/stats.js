
var stats = [];


class Stats  {


  constructor() {

    this.x_mouse = 0; 
    this.y_mouse = 0; 


    this.x_cross = 0; 
    this.y_cross = 0;

    this.w_cross = 32;
    this.h_cross = 32;

    this.cross_center_x = 0;
    this.cross_center_y = 0; 

    this.img = document.getElementById("crosshair");

    this.debug = true; 

    this.game_state = "GAME";

    this.firing       = false; 
    this.reloading    = false; 
    this.rechambering = false; 

    this.fire_delay_cur = 0;
    this.fire_delay_max = 4;

    this.reload_delay_cur = 0; 
    this.reload_delay_max = 40;

    // start past logarithm ramp up problem...
    this.z_depth = 124;
    //this.z_depth = 2;

    stats.push(this);
  }

  // we might not use these .... 
  update () {

    if (this.debug){
      
      document.getElementById("mouse_x").innerHTML  = this.x_mouse.toString();
      document.getElementById("mouse_y").innerHTML  = this.y_mouse.toString();

      document.getElementById("z_depth").innerHTML  = this.z_depth.toFixed(2).toString();
      document.getElementById("dashUP").innerHTML   = player_list[0].dashUP.toString();
      document.getElementById("dashDOWN").innerHTML = player_list[0].dashDOWN.toString();
      document.getElementById("cross_center_x").innerHTML = this.cross_center_x.toString();
      document.getElementById("cross_center_y").innerHTML = this.cross_center_y.toString();

      document.getElementById("player.z").innerHTML = player_list[0].z.toFixed(2).toString();


    }

 

    // IMPORTANT 
    player_list[0].z = getBaseLog(2, this.z_depth);
  


    // CORE
    this.x_cross = this.x_mouse - ( this.w_cross / 2) - 12;
    this.y_cross = this.y_mouse - ( this.h_cross / 2) - 12;

    this.cross_center_x = this.x_cross + (this.w_cross / 2);
    this.cross_center_y = this.y_cross + (this.h_cross / 2); 

    if (this.firing){

      if (this.fire_delay_cur > this.fire_delay_max ){
        this.firing = false;

        this.rechambering = true; 
        this.firing = false; 
        this.fire_delay_cur = 0; 
      } else {

        this.fire_delay_cur++;

      }
    }

    if (this.rechambering){

      if (this.fire_delay_cur > this.fire_delay_max ){
        this.firing = false; 
        this.rechambering = false; 
        this.fire_delay_cur = 0; 
      } else {
        this.fire_delay_cur ++;
      }
    }

  }

  draw() {

    ctxDATA.drawImage(this.img, this.x_cross, this.y_cross, this.w_cross, this.h_cross);



  }

// end of Stats class 
}



new Stats();