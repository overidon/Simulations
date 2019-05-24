function ezCircle ( x, y, r, border_thickness, border_color, fill_color){

  // attempt to draw a circle
  ctxDATA.beginPath();
  ctxDATA.arc(x, y, r, 0, 2 * Math.PI, false);
  ctxDATA.lineWidth = border_thickness;
  ctxDATA.strokeStyle = border_color;
  ctxDATA.stroke();
  ctxDATA.fillStyle = fill_color;
  ctxDATA.fill(); 

}

function ezTri( x1, y1, x2, y2, x3, y3, color ){



  ctxDATA.beginPath();
  ctxDATA.moveTo(256, 256);
  ctxDATA.lineTo(512, 512);
  ctxDATA.lineTo(0, 0);
  ctxDATA.fillStyle = BLACK;
  ctxDATA.closePath();
  ctxDATA.fill();
}


function ezLine (x1, y1, x2, y2, line_thickness, line_color ){

  // Draw a line quickly 
  ctxDATA.beginPath();
  ctxDATA.strokeStyle = line_color;
  ctxDATA.lineWidth   = line_thickness;
  ctxDATA.moveTo(x1, y1);
  ctxDATA.lineTo(x2, y2);
  ctxDATA.stroke();   

}

function ezRect(x, y, w, h, fill_color){

  ctxDATA.fillStyle = fill_color; 
  ctxDATA.fillRect(x, y, w, h);

}

function ezBorder (x, y, w, h, thickness, color) {

  ctxDATA.strokeStyle = color;
  ctxDATA.lineWidth   = thickness;
  ctxDATA.strokeRect(x, y, w, h);

}

function ezRectBorder(x, y, w, h, border_thickness, border_color, fill_color){



  ctxDATA.fillStyle = border_color; 
  ctxDATA.fillRect(x, y, w, h);

  ctxDATA.fillStyle = fill_color; 
  ctxDATA.fillRect(x + border_thickness, y + border_thickness, 
  w - ( 2 * border_thickness), h - (2 * border_thickness));

}