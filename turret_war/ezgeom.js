
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