var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(600,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200, 200, 50, 80);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red"; 

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "orange";

  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "orange";

  gameObject3 = createSprite(100,300,50,50);
  gameObject3.shapeColor = "blue";

  gameObject4 = createSprite(300,300,50,50);
  gameObject4.shapeColor = "orange";

  gameObject3.velocityX = 2;
  gameObject4.velocityX = -2;
}

function draw() {
  background(0); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(gameObject1, movingRect)){
    gameObject1.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  } 
  else{
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "red";
  }

  bounceOff(gameObject3, gameObject4);
  drawSprites();
}

