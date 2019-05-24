

function getBaseLog(x, y){

  return Math.log(y) / Math.log(x);
}



function findDistToCenter( mob ){

  let distX = Math.abs(mob.x - 256);
  let distY = Math.abs(mob.y - 256);

  let c_squared = Math.pow(distX, 2) + Math.pow(distY, 2);

  let distance = Math.sqrt(c_squared);

  return distance;

}


function findSlope(x1, y1, x2, y2){

  return ( ( y2 - y1) / (x2 - x1) );

}

// experimental... 
function findLineDistToCenter( item ){

  let distY = Math.abs(item.y - 256);

  
  return distY;

}

// experimental... 
function findLineDistToCenterV2( item ){

  let distX =  Math.abs(256 - item.x);
  
  return distX;

}

// experimental... 
function findLineDistToCenterV3( item ){

  let distX =  Math.abs( item.x - 256);
  
  return distX;

}




// experimental... 
function findTrapDistToCenter( item ){

  let distY = Math.abs(item.centerY  - 256);
  
  return distY;

}

function findAngleToCenter(mob){

  let distX = Math.abs(mob.x - 256);
  let distY = Math.abs(mob.y - 256);

  return Math.atan( distY / distX) * 180 / Math.PI;

}

// this will work against the crosshair vs a mob's hitbox ... 
function detectCrossVsMob(m, o) {

  if ( m.cross_center_x > o.x_hitbox && m.cross_center_x <  o.x_hitbox + o.w_hitbox &&
       m.cross_center_y > o.y_hitbox && m.cross_center_y <  o.y_hitbox + o.h_hitbox ){
         console.log("Player has targetted the enemy");

         return true; 
  }

}

function findCenterX( x1A, x2A, x1B, x2B  ){

  let combo_x1 = x1A + x1B; 
  let combo_x2 = x2A + x2B; 

  console.log("The combo of x1 is: " + combo_x1)
  console.log("The combo of x2 is: " + combo_x2);

}

function findCenterSlope(slopeA, slopeB) {

  let comboSlope = slopeA + slopeB; 

  console.log( comboSlope ); 

  return comboSlope; 
}

function findCenterY( y1A, y2A, y1B, y2B ){


  let combo_y1 = y1A + y1B; 
  let combo_y2 = y2A + y2B; 

  console.log("The combo of y1 is: " + combo_y1 );
  console.log("The combo of y2 is: " + combo_y2 );
}