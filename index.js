var arr={
  w:"crash.mp3",
  a:"kick-bass.mp3",
  s:"snare.mp3",
  d:"tom-1.mp3",
  j:"tom-2.mp3",
  k:"tom-3.mp3",
  l:"tom-4.mp3"};
  var btn=document.querySelectorAll(".drum");
  for(var i=0;i<btn.length;++i)
  {
    btn[i].addEventListener("click",function()
  {
    var aud=new Audio("sounds/"+arr[this.classList[0]]);
     var cc=document.querySelector("."+ this.classList[0]);
     cc.classList.toggle("cg");
     aud.play();
     setTimeout(function(){ cc.classList.toggle("cg"); }, 100);
  });
  }

  document.addEventListener("keypress", function(event)
  {
    var aud=new Audio("sounds/"+arr[event.key]);
    var cc=document.querySelector("."+ event.key);
    cc.classList.toggle("cg");
    aud.play();
    setTimeout(function(){ cc.classList.toggle("cg"); }, 100);
  });
