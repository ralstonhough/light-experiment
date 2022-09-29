let circularcursor = document.getElementById("circularcursor");
let canvas = document.getElementById("canvas");
let shadows = document.getElementById("shadows");

document.onmousemove = function(e){
  circularcursor.style.top = e.clientY + "px";
  circularcursor.style.left = e.clientX + "px";
  let shadowsPos = shadows.getBoundingClientRect();
  let sunPos = circularcursor.getBoundingClientRect();
  let distance = Math.sqrt((Math.abs(shadowsPos.top - sunPos.top)*Math.abs(shadowsPos.top - sunPos.top)) + (Math.abs(innerWidth/2 - sunPos.right)*Math.abs(innerWidth/2 - sunPos.right)));
  shadows.style.textShadow = ((innerWidth/2)-e.clientX-40) + "px " + ((innerHeight/2)-e.clientY-40) +"px " + map(distance, 0, innerHeight/2, 0, 40) + "px black";
};

document.onmousedown = function(){
  circularcursor.style.transform = "scale(1.2)";
};

document.onmouseup = function(){
  circularcursor.style.transform = "scale(0.8)";
};

function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};