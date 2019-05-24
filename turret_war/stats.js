// setup stats object 
stats = [];

class PlayerStats {


  // there isn't much to the constructor 
  constructor () {

    // we will start in game right now... change to title later 
    this.game_state = "SETUP";

    // player 0 has normal ammo equipped? 
    this.player0_ammo = "NORM";

    // set properties for normal ammo 
    this.norm_expl_max_w = 12;
    this.norm_expl_max_h = 12; 

    // setup the player0 weapon parameters
    this.player0_angle = 0;

    this.player0_power = 10;

    this.player0_power_max = 100;

    this.turn = 0;


    // set to not fire... 
    this.player0_firing = false; 

    // turn of 0 -> player 
    // turn of 1 -> AI 

    // [player, ai, ai, ai_airplane, ] -> later.. todo 
    

    // push this specific object into the stats list 
    stats.push(this);
    
  // end of constructor 
  }

  
}


// now we make a specific item... 
player_stats_0 = new PlayerStats();