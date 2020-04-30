var bullet,bullet_weight,bullet_speed;
var wall_deformation,wall_thickness;
var wall;
var road;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(70,200,100,50);
  bullet.shapeColor = "white";
  bullet_weight = Math.round(random(30,52));
  
  bullet_speed = Math.round(random(223,331));
  wall_thickness = Math.round(random(22,83));
  wall = createSprite(1570,200,60,400)
  wall.shapeColor = "grey";
  wall_deformation = (bullet_speed*bullet_weight*bullet_speed*0.5)/wall_thickness**3
  road = createSprite(800,395,1600,20)
  road.shapeColor = "black";
  bullet.velocityX = 15
}

function draw() {
  background("blue");  
   if (isTouching(bullet,wall) === true){
    bullet.velocityX = 0;
    if (wall_deformation>10){
      wall.shapeColor = "red";
      console.log(wall_deformation);
    }
   
    if (wall_deformation<=10){
      wall.shapeColor ="green";
      console.log(wall_deformation);
    }  
  drawSprites();
}
}
