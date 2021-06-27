
function preload(){
  sea = loadImage("sea.png")  
  Ship = loadImage("ship-1.png")
}

var ship,sea,sea1,Ship
function setup(){
  createCanvas(400,400);
 sea1 = createSprite(200,200)
 ship =  createSprite(70,220)
 sea1.addImage(sea) 
 ship.addImage(Ship)
 ship.scale = 0.25
 sea1.scale = 0.15
  
}

function draw() {
  background("blue");
     
  drawSprites()
  keepSea()
}

function keepSea(){
  sea1.velocityX = -3
  if(sea1.x < 100){
    sea1.x = 200
  }
}