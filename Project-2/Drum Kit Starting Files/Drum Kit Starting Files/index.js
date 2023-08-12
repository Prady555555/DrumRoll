// to selcting the all the keys we use for loop;

var but = document.querySelectorAll(".drum").length;
for( var i = 0; i < but; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var click = this.innerHTML;
  // console.log(click);
  sound(click);
  animation(click);
 
})}

function sound(keys){
  switch (keys) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3"); 
      audio1.play();
      break;

      case "a":
      var audio2 = new Audio("sounds/tom-2.mp3"); 
      audio2.play();
      break;

      case "s":
      var audio3 = new Audio("sounds/tom-3.mp3"); 
      audio3.play();
      break;

      case "d":
      var audio4 = new Audio("sounds/tom-4.mp3"); 
      audio4.play();
      break;

      case "j":
      var snare = new Audio("sounds/snare.mp3"); 
      snare.play();
      break;

      case "k":
      var kick = new Audio("sounds/kick-bass.mp3"); 
      kick.play();
      break;

      case "l":
      var crash = new Audio("sounds/crash.mp3"); 
      crash.play();
      break;
  
    default:
      console.log(click);
      break;
  }
}


  document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
  })

  function animation (keyss){
    
    var press = document.querySelector("."+keyss)
    press.classList.add("pressed")
    setTimeout(function(){
      press.classList.remove("pressed")
    },100);
      
    
  }



