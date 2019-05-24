// MARK: Canvas SETUP
var dataCanvas = document.getElementById("dataCanvas");
var ctxDATA = dataCanvas.getContext("2d");
  
font_list = [];
  

class AdaptFont{
  
  
  constructor (name, label,  x , y, font_size, color, target_state) {
    
    this.name = name;
    
    this.label = label;
    this.x = x; 
    this.y = y; 
    this.color = color; 

    this.font_size = font_size;

    this.target_state = target_state;
    
    font_list.push(this);
  }
  
  update () {
  
    if (this.name == "PLAYER_0_ANGLE_VALUE"){
      this.label = (stats[0].player0_angle).toString();
    }

    if (this.name == "PLAYER_0_POWER_VALUE"){
      this.label = (stats[0].player0_power).toString();
    }


    if (this.name == "PLAYER_0_FIRING"){
      this.label = (stats[0].player0_firing).toString();
    }

    // we need to know how many ammos are in play... this will help 
    // destroy more dirt... 
    if (this.name == "AMMO_LIST_LENGTH"){
      this.label = ammo_list.length.toString();
    }

  } 
  
  draw(){
    
    if (this.target_state == stats[0].game_state){

      // Render the coins label 
      ctxDATA.fillStyle = this.color;
      ctxDATA.font = this.font_size + "px Arial";
      ctxDATA.fillText(this.label, this.x, this.y);


      // Render the coins label 
      ctxDATA.fillStyle = WHITE;
      ctxDATA.font = this.font_size + "px Arial";
      ctxDATA.fillText(this.label, this.x + 2, this.y + 2);
      
    }
  // end of draw method
  }
// end of the font buddy class 
}


// generate an instance of the font 
new AdaptFont("PLAYER_0_ANGLE", "ANGLE: ",  32, 32, 16, BLUE, "GAME");

new AdaptFont("PLAYER_0_ANGLE_VALUE", "***",  96, 32, 16, NUKE, "GAME");

new AdaptFont("PLAYER_0_POWER", "POWER: ",  128, 32, 16, BLUE, "GAME");

new AdaptFont("PLAYER_0_POWER_VALUE", "*** ",  216, 32, 16, NUKE, "GAME");

new AdaptFont("PLAYER_0_FIRING_LABEL", "PLAYER0_FIRING: ",  250, 32, 16, BLUE, "GAME");

new AdaptFont("PLAYER_0_FIRING", stats[0].player0_firing.toString(),  400, 32, 16, NUKE, "GAME");

new AdaptFont("AMMO_LIST_LENGTH_LABEL", "AMMO_LIST_LENGTH: ",  32, 64, 10, BLUE, "GAME");

new AdaptFont("AMMO_LIST_LENGTH", "",  148, 64, 10, NUKE, "GAME");