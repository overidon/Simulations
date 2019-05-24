var ground_list = [];


class Ground {

  constructor (name, x, y, z){

    this.name = name; 
    // this is the index of the item...

    // set the ground to have an index to be the length of the list
    this.index = ground_list.length;
    
    
    // setup the position of each item when they are constructed
    if ( this.index == 0){

      this.y_world = 384; 
      this.y = 384 
    } else {

      // each ground object looks at the previous one to determine its y position in the world...
      this.y_world = ground_list[this.index - 1].y_world - (ground_list[this.index - 1].h / 2 ); 

      // set the y to its y_world 
      this.y = this.y_world;
    }

    // 
    this.x    = x; 

    // the grounds now need a location in space 
    this.z_world = z;
    this.z_cur   = z;

    this.distance_to_center = 0;

    this.debug = false; 

    if (this.name == "GREEN_A"){

      let roll = Math.random(); 

      if ( roll > 0.3 ){
        this.img = document.getElementById("bricks_01"); 
      } else  if (roll > 0.1){
        this.img = document.getElementById("bricks_02"); 
      } else {
        this.img = document.getElementById("bricks_03"); 
      }


      this.w = 256;
      this.h = 64;

      ground_list.push(this);

    }

    // for later for alternate bricksss
    else {

      this.img = document.getElementById("bricks_01"); 
      this.w = 256;
      this.h = 62;

      ground_list.push(this);


    }

    //ground_list.push(this);
  // end of the Ground constructor 
  }



  update() {

    // make a local variable to compare the player's z position vs this ground's world position
    let test = player_list[0].z - this.z_world;

    // if the difference in positions is positive
    // the current z position of this specific ground is assigned....
    // the player's z subtracted from the ground's z world position
    if ( test > 0){
      this.z_cur =  player_list[0].z - this.z_world;
    } else {
      // ... this specific ground object is assigned the position of its world z position
      this.z_cur =  this.z_world;
    }
    

    if ( this.name == "GREEN_A"){

      // the relative z_depth in the stats (this relates to distoring the trapezoids etc.)
      if ( this.index == 0 ){
        // the y position of this ground object is assigned its place in the world 
        // plus the distorted z_depth from stats 
        this.y = this.y_world + stats[0].z_depth;

      } else {

        let prev = this.index - 1;

        // set the y position of this ground trapezoid to be the position of the preivous one 
        // minus its height divided by two 
        this.y = ground_list[prev].y - ( ground_list[prev].h / 2) ;

      }
    } 
    
    // find the line distance to center 
    this.distance_to_center = findLineDistToCenter(this );

    // the width must be 4 times its distance to the center
    this.w = this.distance_to_center * 4; 
    // the height is exactly the distance to the center 
    this.h = this.distance_to_center; 
    this.x = 256 - (this.w / 2) 


  
  // end of update 
  }

  draw(){

    // verify that the object hasn't passed the vanishing point... 
    if ( this.z_cur < 8){
      if (this.debug) ezRect(this.x, this.y, this.w, this.h, NUKE);
      
      
      // draw the ground 
      ctxDATA.drawImage(this.img, this.x, this.y, this.w, this.h);

      // begin debug data
      if (this.debug){


        // Render the label 
        ctxDATA.fillStyle = RED;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("DIST: " + this.distance_to_center, this.x + 4, this.y - 10);

        ctxDATA.fillStyle = BLUE;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("INDEX: " + this.index, this.x + 4, this.y - 20);

        ctxDATA.fillStyle = NUKE;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("z_cur: " + this.z_cur, this.x + 4, this.y - 30);

        ctxDATA.fillStyle = BLUE;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("z_world: " + this.z_world, this.x + 4, this.y - 40);


      }
    // end of z_cur check
    }


  // end of the draw method 
  }

// end of the Ground class ... 
}

function generateGround() {

  // build a hundred grounds from the player's position till the end of the hall...
  ///for (let i = 0; i < 100; i++){
  for (let i = 0; i < 100; i++){ 

    let g0x = new Ground("GREEN_A", 256, 256, i );
    //ground_list.push(g0x);
  }

}




generateGround();

