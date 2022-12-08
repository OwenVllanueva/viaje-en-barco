var barco, barcoImg
var agua, aguaImg

function preload(){

barcoImg=loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
aguaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  agua=createSprite(200,150)
agua.addImage(aguaImg);
barco=createSprite(200,300);
barco.addAnimation("barco" , barcoImg);
barco.scale=0.2



}


function draw() {
  background("blue");
  agua.velocityX=-2
  if (agua.x <0){
    agua.x=agua.width/2; 
   
    }
 drawSprites();
}


