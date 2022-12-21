/* Declare variables below to save the different sections (divs) of your story*/
let storyopening = document.querySelector('.story-opening');
let optionone = document.querySelector('.option-one');
let optiontwo = document.querySelector('.option-two');
let optionthree = document.querySelector('.option-three');
let optionfour = document.querySelector('.option-four');
let optiononescreen = document.querySelector('.option-one-screen');
let optiontwoscreen = document.querySelector('.option-two-screen');
let optiononeend = document.querySelector('.option-one-end');
let optiontwoend = document.querySelector('.option-two-end');
let myAudio = document.querySelector(".myAudio");


optionone.onclick = function() {
  optiononescreen.style.display = 'block';
  storyopening.style.display = 'none';

}

 optiontwo.onclick = function() {
  optiontwoscreen.style.display = 'block';
  storyopening.style.display = 'none';

}
optionthree.onclick = function() {
  optiononeend.style.display = 'block';
  optiononescreen.style.display = 'none';
  storyopening.style.display = 'none';}

optionfour.onclick = function() {
  optiontwoend.style.display = 'block';
  optiontwoscreen.style.display = 'none';
  storyopening.style.display = 'none';
}
optiontwoend.onclick = function() {
  optiontwoend.innerHTML = "You are gone but never forgotten";
  optiontwoend.style.fontSize="40px";
  myAudio.style.display = 'block';
}

myAudio.onclick= function(){
  x.autoplay = true;
  x.load();
}
