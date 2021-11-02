var gameState, playerCount ;
var playButton ;
var cameraImg, carkeyImg;
var bgSound;
var camera, carkey;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}