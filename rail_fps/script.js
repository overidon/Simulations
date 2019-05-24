// MARK: Canvas SETUP
var dataCanvas = document.getElementById("dataCanvas");
var ctxDATA = dataCanvas.getContext("2d");



// build our global update.. 
function update() {

  stats[0].update();

  // TODO -> update class lists etc..
  for(let g = 0; g < gui_list.length; g++){
      gui_list[g].update();
  }

  ground_list.forEach(function(element) {
    element.update();
  });


  ceiling_list.forEach(function(element) {
    element.update();
  });

  left_wall_list.forEach(function(element) {
    element.update();
  });

  right_wall_list.forEach(function(element) {
    element.update();
  });


  for(let g = 0; g < player_list.length; g++){
      player_list[g].update();
  }

 

    
  for(let g = 0; g < mob_list.length; g++){
      mob_list[g].update();
  }

  // only 1 stats so no loop

  


  // MARK: trigger render function call 
  render();
    
  // IMPORTANT: Call MAX Frame Nano Time...----> Callback...
  window.requestAnimationFrame(update);

// end of global update... 
}

// global render.. 
function render() {

  //IMPORTANT: This is a canvas clear code for animation
  ctxDATA.clearRect(0, 0, dataCanvas.width, dataCanvas.height );



  
  // TODO -> draw the items in each list...
  for(let g = 0; g < gui_list.length; g++){
      gui_list[g].draw();
  }

  

  // EXPERIMENTAL CODE 
  //ezTri(256, 256, 0, 0, 512, 512, RED);
  
  
  for(let g = 0; g < ground_list.length; g++){
      ground_list[g].draw();
  }

  for(let g = 0; g < ceiling_list.length; g++){
      ceiling_list[g].draw();
  }


  for(let g = 0; g < left_wall_list.length; g++){
      left_wall_list[g].draw();
  }

  for(let g = 0; g < right_wall_list.length; g++){
      right_wall_list[g].draw();
  }

  for(let g = 0; g < mob_list.length; g++){
    mob_list[g].draw();
  }
  
  stats[0].draw();


// end of the render method..
}

// Outside of the global render function 

// IMPORTANT: Call MAX Frame Nano Time...----> Callback...
window.requestAnimationFrame(update);
