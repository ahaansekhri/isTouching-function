var sprite2, sprite1;

function setup() {
  createCanvas(1600,800);
  sprite2 = createSprite(400, 100, 50, 80);
  sprite2.shapeColor = "green";
  sprite2.debug = true;
  sprite1 = createSprite(400, 800,80,30);
  sprite1.shapeColor = "green";
  sprite1.debug = true;

  sprite1.velocityY = -5;
  sprite2.velocityY = 0;
}


function draw() {
  background(0,0,0);  

  collide(sprite1,sprite2);

  if(istouching(sprite1,sprite2) === true){
    sprite1.shapeColor = "red";
    sprite2.shapeColor = "red";
  }

  drawSprites();
}