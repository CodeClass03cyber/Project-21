var box1,box2;
var box3,box4;
var movingBox;

var boundaryWall1,boundaryWall2,boundaryWall3,boundaryWall4;


function setup() {
  createCanvas(1200,600);

  box1=createSprite(150, 500, 200, 40);
  box1.shapeColor = "blue";

  box2 = createSprite(450,500,200,40);
  box2.shapeColor = "orange";

  box3  = createSprite(750,500,200,40);
  box3.shapeColor = "purple";

  box4=createSprite(1050,500, 200, 40);
  box4.shapeColor = "green";

 movingBox = createSprite(200,200,50,50);
 movingBox.shapeColor = "white";
 movingBox.setVelocity(10,10);

 boundaryWall1 = createSprite(10,300,10,600);
 boundaryWall1.shapeColor = "black";
 boundaryWall3 = createSprite(1190,300,10,600);
 boundaryWall3.shapeColor = "black";
 boundaryWall2 = createSprite(600,600,1190,10);
 boundaryWall2.shapeColor = "black";
 boundaryWall4 = createSprite(600,10,1190,10);
 boundaryWall4.shapeColor = "black";

}

function draw() 
{
  background("black");  
 
  createEdgeSprites();
  movingBox.bounceOff(boundaryWall1);
  movingBox.bounceOff(boundaryWall2);
  movingBox.bounceOff(boundaryWall3);
  movingBox.bounceOff(boundaryWall4);

  if(movingBox.isTouching(box1)){
    movingBox.shapeColor = "blue";
    movingBox.velocityX = 0;
    movingBox.velocityY = 0;
    //music.stop();
  }

  if(movingBox.isTouching(box2)){
    movingBox.shapeColor = "orange";
    movingBox.velocityX = 0;
    movingBox.velocityY = 0;
    //music.stop();
  }

  if(movingBox.isTouching(box3)){
    movingBox.shapeColor = "purple";
    movingBox.velocityX = 0;
    movingBox.velocityY = 0;
    //music.stop();
  }

  if(movingBox.isTouching(box4)){
    movingBox.shapeColor = "green";
    movingBox.velocityX = 0;
    movingBox.velocityY = 0;
    //music.stop();   

  }


  drawSprites();

}


