//the keycode sequence for the konami code
var konamiCode = "38,38,40,40,37,39,37,39,66,65";
//where we will store keypresses
var keylog = [0,0,0,0,0,0,0,0,0,0];

document.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
  //add keypress and delete oldest
  keylog.push(e.which);
  keylog.shift();
  //if konamicode and keycodes are the same
  if (keylog.toString() == konamiCode){
    konamiCodeEntered();
  }
};

//win function
function konamiCodeEntered(){
  alert("Victory");
}
