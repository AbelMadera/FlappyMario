const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');

// Get Modal when page loads
window.onload = () => {
    document.getElementById('close').onclick = function() {
      document.getElementById('modal').style.display = 'none'
    };
  };
  
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;


// Randomize hole placement
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

// If character hits pipes = game over
const gameTimer = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-4));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

// Jumping Function
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}