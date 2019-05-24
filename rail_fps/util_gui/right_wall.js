var right_wall_list = [];

class RightWall {

  constructor (name, x, y, z){

    this.name = name; 

    // this is the index of the item..
    this.x = x; 
    this.y = y

    // the grounds now need a location in space 
    this.z_world = z;
    this.z_cur   = z;

    this.debug = false; 

    this.img = document.getElementById("wall_right"); 

    // the index will the size of the list... 
    this.index = right_wall_list.length; 

    if ( this.index == 0 ){
      this.w = 128; 
      this.h = 512;

      this.x_world = 384;
      this.x = this.x_world; 
      this.y = 0;
    } else {
      
      this.w = right_wall_list[this.index - 1].w / 2;
      this.h = right_wall_list[this.index - 1].h / 2;

      // offset the next wall by the x position of this wall and this one's width divided by two 
      this.x_world = right_wall_list[this.index - 1].x - right_wall_list[this.index - 1].w / 2;

      this.x = this.x_world;

      this.y = right_wall_list[this.index - 1].y +  (right_wall_list[this.index - 1].w );

    }

    right_wall_list.push(this);

  // end of the RightWall construcotr 
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
      this.x = this.x_world + stats[0].z_depth ;

    } else {

      let prev = this.index - 1;

      // set the y position of this ceil trapezoid to be the position of the preivous one 
      // plus its own height  
      this.x = right_wall_list[prev].x - ( right_wall_list[prev].w / 2 );
    }

    this.distance_to_center = findLineDistToCenterV2(this );

    this.h = this.distance_to_center *  4;
    this.w = this.distance_to_center ; 

    this.y = 256 - (this.h / 2);

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
  // end of draw method 
  }
// end RightWall Class  
}



function generateRightWalls() {

  for ( let i = 0; i < 100; i++){
    // build a hundred grounds from the player's position till the end of the hall... 
    new RightWall("WALL_Right", 0, 0, i );
  }
}

generateRightWalls();