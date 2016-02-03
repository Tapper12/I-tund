
//Ootame kuni leht on laetud

window.onload = function(){

  //Saan kätte väljad
  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  //lisan nuppudele kuularid

  document.getElementById('to_inch').addEventListener('click', convertToInch);
  document.getElementById('to_cm').addEventListener('click', convertToCm);

};

function convertToInch(){

  inch.value = cm.value/2.54;

}

function convertToCm(){

  cm.value = inch.value*2.54;

}
