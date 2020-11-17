var wall;
var bullet,speed,weight;
var de,thickness;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,70,20);
  wall=createSprite(1500,200,thickness,height/2);
  thickness=random(22,83);
}

function draw() {
  background("black");  
  bullet.depth=bullet.depth+1;
  
  bullet.velocityX=speed;
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    de=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX=0;
    if(de>10)
{
  wall.shapeColor="red";
  
}  

if(de<10){
  wall.shapeColor="green";
  
}
  }
  drawSprites();
}