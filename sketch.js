var moving,fixed
function setup() {
  createCanvas(1200,800);
 fixed = createSprite(400, 200, 50, 50);
 moving = createSprite(300,400,50,50)
 fixed.shapeColor = "red";
 moving.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  console.log(moving.x-fixed.x);
  if(moving.x-fixed.x<fixed.width/2+moving.width/2&&fixed.x-moving.x<fixed.width/2+moving.width/2
    &&moving.y-fixed.y<fixed.height/2+moving.height/2&&moving.y-fixed.y<fixed.height/2+moving.height/2){
    fixed.shapeColor = "red";
    moving.shapeColor= "red";
  } 
  else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  
  drawSprites();
}