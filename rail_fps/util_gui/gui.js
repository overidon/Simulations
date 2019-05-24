// list for gui elements... 
var gui_list = [];



class DepthBuddy {

  constructor ( name ) {

    this.name = name; 

   
    gui_list.push(this);
  }

  update () {

  }

  draw() {

    if (this.name == "GROUND"){
      ctxDATA.beginPath();
      ctxDATA.moveTo(256, 256);
      ctxDATA.lineTo(512, 512);
      ctxDATA.lineTo(0, 512);
      ctxDATA.fillStyle = BLACK;
      ctxDATA.fill();
    }

    if (this.name == "LEFT"){
      ctxDATA.beginPath();
      ctxDATA.moveTo(256, 256);
      ctxDATA.lineTo(0, 512);
      ctxDATA.lineTo(0, 0);
      ctxDATA.fillStyle = RED;
      ctxDATA.fill();
    }

    if (this.name == "LEFT_INNER"){
      ctxDATA.beginPath();
      ctxDATA.moveTo(256, 256);
      ctxDATA.lineTo(0, 352);
      ctxDATA.lineTo(0, 160);
      ctxDATA.fillStyle = PUMPKIN;
      ctxDATA.fill();

      ezLine( 256, 256, 0, 352, 3, BLACK );
      ezLine( 256, 256, 0, 160, 3, BLACK );
    }


    if (this.name == "RIGHT"){
      ctxDATA.beginPath();
      ctxDATA.moveTo(256, 256);
      ctxDATA.lineTo(512, 512);
      ctxDATA.lineTo(512, 0);
      ctxDATA.fillStyle = RED;
      ctxDATA.fill();
    }

    if (this.name == "RIGHT_INNER"){

      ctxDATA.strokeStyle = BLACK;
      ctxDATA.lineWidth   = 4;

      ctxDATA.beginPath();
      ctxDATA.moveTo(256, 256);
 
      ctxDATA.lineTo(512, 352);
 
      ctxDATA.lineTo(512, 160);

      ctxDATA.fillStyle = PUMPKIN;

      ctxDATA.fill();

      ezLine( 256, 256, 512, 352, 3, BLACK );
      ezLine( 256, 256, 512, 160, 3, BLACK );
       
    }



    if (this.name == "DIAG"){

      if (stats[0].debug){

        // vertical and horizontal lines for debugging
        ezLine( dataCanvas.width / 2 , 0, dataCanvas.width / 2, dataCanvas.height, 2, 0, RED );
        ezLine( 0, dataCanvas.height / 2 , dataCanvas.width, dataCanvas.height / 2, 2, 0, RED );
      }

      // TEST -> draw the vanising point lines. 
      ezLine(0, 0, dataCanvas.width, dataCanvas.height, 4, HAZE );
      ezLine(0, dataCanvas.height, dataCanvas.width, 0, 4, HAZE );


    }

    else {
      
      /*
      for (let i = 0; i < 256 ; i ++  ) {
        i = i + i;
        ezBorder(256 - i , 256 - i, 2 * i, 2 * i, 2, BLACK);
      }
      */

      /*
      // 256 - 248 = 8 =>  16 * 1 = 16
      ezBorder(248, 248, 16, 16, 1, BLACK);
      // 256 - 232 = 16 => 16 * 3
      ezBorder(232, 232, 48, 48, 1, BLACK);

      // 256 - 192 = 64 => 128
      ezBorder(192, 192, 128, 128, 1, BLACK);
      */
    }

  }

// end of draw 
}

//new DepthBuddy("DIAG");

//new DepthBuddy("BOX");

//new DepthBuddy("GROUND");

new DepthBuddy("LEFT");
new DepthBuddy("LEFT_INNER");
new DepthBuddy("RIGHT");
new DepthBuddy("RIGHT_INNER");

console.log(gui_list);
