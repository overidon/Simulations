var ceiling_list = [];


class Ceiling {

  constructor (name, x, y, z){

    this.name = name; 
    // this is the index of the item...

    this.x = x; 
    this.y = y

    // the grounds now need a location in space 
    this.z_world = z;
    this.z_cur   = z;

    this.debug = false; 

    this.img = document.getElementById("ceil_a"); 

    // the index will the size of the list... 
    this.index = ceiling_list.length; 

    // the first ceiling object 
    // is the entire width of the screen
    if ( this.index == 0){

      this.w = 512;
      this.h = 128;

      // it starts at the top left
      this.x = 0;
      this.y_world = 0;
      this.y = 0;


    } else {

      // every other ceiling object looks at the previous ceiling object 
      // and is basically half the size of the previous 
      this.w = ceiling_list[this.index - 1].w / 2;
      this.h = ceiling_list[this.index - 1].h / 2;

      // their x and y are added based on the position of previous and its height
      this.x = ceiling_list[this.index - 1].x +  (ceiling_list[this.index - 1].h  );
      this.y_world  = ceiling_list[this.index - 1].y +  (ceiling_list[this.index - 1].h );

      this.y = this.y_world;
    }



    // to be overriden automatically... 
    this.distance_to_center = 0;
    

    ceiling_list.push(this);

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

    // the relative z_depth in the stats (this relates to distoring the trapezoids etc.)
    if ( this.index == 0 ){
      // the y position of this ground object is assigned its place in the world 
      // minus the distorted z_depth from stats times two -> this is 
      // NOTE -> the *2 is because needs to counter the speed of the player 2X since it 
      // is going in the "mirror" direction of the ground 
      // otherwise it would simply look like its going half the speed of the ground which wouldn't 
      // make sense... 
      this.y = this.y_world - (stats[0].z_depth * 2);

    } else {
      
    
      let prev = this.index - 1;

      // set the y position of this ceil trapezoid to be the position of the preivous one 
      // plus its own height  
      this.y = ceiling_list[prev].y + ( ceiling_list[prev].h);
     
    }
  
    this.distance_to_center = findLineDistToCenter(this );


    this.h = this.distance_to_center / 2;
    this.w = this.distance_to_center * 2; 

    this.x = 256 - (this.w / 2) 
    
  // end of update 
  }

  draw(){


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
 


  // end of the draw method 
  }

// end of the Ceil class ... 
}

function generateCeil() {

  for ( let i = 0; i < 100; i++){
    // build a hundred grounds from the player's position till the end of the hall... 
    let g0x = new Ceiling("ROOF", 0, 0, i );
  }


  

}




generateCeil();

