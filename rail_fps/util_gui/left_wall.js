var left_wall_list = [];

class LeftWall  {


  constructor (name, x, y, z){

    this.name = name; 

    // this is the index of the item...

    this.x = x; 
    this.y = y

    // the grounds now need a location in space 
    this.z_world = z;
    this.z_cur   = z;

    this.debug = false; 

    this.img = document.getElementById("wall_left"); 

    // the index will the size of the list... 
    this.index = left_wall_list.length; 

    // the first left wall  object 
    // is the entire width of the screen
    if ( this.index == 0){

      this.w = 128;
      this.h = 512;

      // it starts at the top left
      this.x_world = 0;
      this.x = 0;

      this.y = 0;

    } else {

      // every other wall  object looks at the previous ceiling object 
      // and is basically half the size of the previous 
      this.w = left_wall_list[this.index - 1].w / 2;
      this.h = left_wall_list[this.index - 1].h / 2;

      // their x and y are added based on the position of previous and its height
      this.x_world = left_wall_list[this.index - 1].x +  (left_wall_list[this.index - 1].w  );

      this.x = this.x_world;


      this.y = left_wall_list[this.index - 1].y +  (left_wall_list[this.index - 1].w );
    }


    // to be overriden automatically... 
    this.distance_to_center = 0;
    

    left_wall_list.push(this);

  // end of the left wall constructor
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

    // the relative z_depth in the stats (this relates to distoring the trapezoids etc.)
    if ( this.index == 0 ){
 
      // EXPERIMENTAL 2X DICE ROLL!!!! 
      this.x = this.x_world - (stats[0].z_depth * 2);

    } else {
      
    
      let prev = this.index - 1;

      // set the y position of this ceil trapezoid to be the position of the preivous one 
      // plus its own height  
      this.x = left_wall_list[prev].x + ( left_wall_list[prev].w);
     
    }

    this.distance_to_center = findLineDistToCenterV2(this );

    this.h = this.distance_to_center *  2;
    this.w = this.distance_to_center / 2 ; 

    this.y = 256 - (this.h / 2);


  // end of the update method.. 
  }

  draw() {

    // draw the ground 
    ctxDATA.drawImage(this.img, this.x, this.y, this.w, this.h);

    // begin debug data
    if (this.debug){
        // Render the label 
        ctxDATA.fillStyle = RED;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("DIST: " + this.distance_to_center, this.x + 4, this.y + 10);


        // Render the label 
        ctxDATA.fillStyle = BLUE;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("INDEX: " + this.index, this.x + 4, this.y + 20);

        console.log("The distance to center is: " + this.distance_to_center);

        ctxDATA.fillStyle = BLUE;
        ctxDATA.font = 10 + "px Arial";
        ctxDATA.fillText("z_world: " + this.z_world, this.x + 4, this.y + 30);

    }
  }

// end of the left wall class 
}


function generateLeftWalls() {

  for ( let i = 0; i < 100; i++){
    // build a hundred grounds from the player's position till the end of the hall... 
    let g0x = new LeftWall("WALL_LEFT", 0, 0, i );
  }
}

generateLeftWalls();