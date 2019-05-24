// this utility will help us with our gameSize 
var gs = [512, 512];


// MARK: COLLISION DETECTION --> detectCol 
function detectCol(targetA, targetB){

  if ( (targetA.x < targetB.x + targetB.w) && 
       (targetA.x + targetA.w > targetB.x) &&
       (targetA.y < targetB.y + targetB.h) && 
       (targetA.h + targetA.y > targetB.y) ) {
         
        return true;
  } else {
        return false;
  } 

// end of detectCol function... 
}



// IMPORTANT: MARK: getXComponent and getYComponent

function getXComponent_0() {
  var xComp = Math.cos(stats[0].player0_angle * (Math.PI / 180)) * 30;
  turret_list[0].x_muz = turret_list[0].x_hinge + xComp;
}


function getYComponent_0() {
  var yComp = Math.sin(stats[0].player0_angle * (Math.PI / 180)  ) * 30;
  turret_list[0].y_muz = turret_list[0].y_hinge  - yComp;

}




function getXV() {
    return ( Math.cos(stats[0].player0_angle * (Math.PI / 180)) * 30);
}

function getYV() {
  return(Math.sin(stats[0].player0_angle * (Math.PI / 180)  ) * 30);
}


function detectDestroyedDirt() {

  for (let i = 0; i < dirt_list.length; i++){

    if ( !dirt_list[i].visible){

      dirt_list[i].color = GREEN;

      console.log("A destroyed dirt was found at the index of: " + i);

      // set it BACK to visible! :D
      dirt_list[i].visible = true; 
    // end of the if check... 
    }


  
  // end of the for loop
  }


  /* all the destroyed dirts are green now 

  so we make a new tempary variable to store a modified list.. 

  next we call the .filter method on our dirt_list 

  .filter is a built-in function in javascript for lists :D

  inside that filter method... we create a "call-back" function 

  which acesses a value of our dirt_list... 
  ...but since our dirt list is full of dirt objects... value isn't the best term 
  element is a better term

  the parameters of this callback are default of index and the arr itself

  as long as the element in the dirt_list has the color of MUD, it gets added 
  to our temporary dirt 

  Finally the dirt_list is completely replaced and mutated by the temp_dirt

  */ 

  // FILTER SYSTEM.. 
  var temp_dirt = dirt_list.filter(function(element, index, arr){

      return element.color == MUD;

  });

  // the dirt_list becomes the temproary dirt made of only mud 
  dirt_list = temp_dirt;

// end of the detectDestroyedDirt funciton 
}


