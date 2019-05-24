// MARK: Canvas SETUP
var dataCanvas = document.getElementById("dataCanvas");
var ctxDATA = dataCanvas.getContext("2d");



// MARK: Process a single frame INCLUDING updates 
// and trigger the render function as well
function update() {

  // update the dirts
  for (let i = 0; i < dirt_list.length; i++) {

    dirt_list[i].update();
  }  

  // update the turrets 
  for (let i = 0; i  < turret_list.length; i++){
    turret_list[i].update();
  }

  // update the ammos 
  for (let i = 0; i < ammo_list.length; i++){
    ammo_list[i].update();
  }

  // update the fonts 
  for (let i = 0; i < font_list.length; i++){
    font_list[i].update();
  }
  
  // MARK: trigger render function call 
  render();

  // IMPORTANT: Primary callBack
  window.requestAnimationFrame(update);

// END of the global update() function ... 
}

// render will focus on drawing the game
function render(){

  //IMPORTANT: This is a canvas clear code for animation
  ctxDATA.clearRect(0, 0, dataCanvas.width, dataCanvas.height );


  // fill the sky with a randomly generated color 
  ctxDATA.fillStyle = skies[randomKey]; 
  ctxDATA.fillRect(0, 0, dataCanvas.width, dataCanvas.height);

  // draw the dirts via a loop that calls their draw methods 
  for (let i = 0; i < dirt_list.length; i++) {

    dirt_list[i].draw();
  }  

  // draw the turrets ... 
  for (let i = 0; i < turret_list.length; i++) {

    turret_list[i].draw();
  }  


 // draw the ammos 
  for (let i = 0; i < ammo_list.length; i++){
    ammo_list[i].draw();
  }
  

  // draw the fonts 
  for (let i = 0; i < font_list.length; i++){
    font_list[i].draw();
  }
  


// end of the global render function 
}



// IMPORTANT: Primary callBack trigger
window.requestAnimationFrame(update);