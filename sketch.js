var bg,sleep,brush;
var gym,eat,drink;
var move,bath;
var astronaut;

function preload() {
  bg = loadImage('iss.png');
  sleep = loadAnimation('sleep.png');
  brush = loadAnimation('brush.png');
  gym = loadAnimation("gym11.png", "gym12.png", "gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(1000,600);
  astronaut = createSprite(500, 300, 50, 50);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);  
  fill("white");
  stroke("white");
  textSize(30);
  text("Instructions",130,100);
  fill("white");
  stroke("white");
  textSize(20);
  text("UP ARROW = BRUSHING",130,150);
  fill("white");
  stroke("white");
  textSize(20);
  text("DOWN ARROW = GYMING",130,200);
  fill("white");
  stroke("white");
  textSize(20);
  text("LEFT ARROW = EATING",130,250);
  fill("white");
  stroke("white");
  textSize(20);
  text("RIGHT ARROW = BATHING",130,300);
  fill("white");
  stroke("white");
  textSize(20);
  text("M KEY = MOVING",130,350);
  drawSprites();
}