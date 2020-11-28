const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ball;
var ground;
var engine,world;
var object;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  var opt={
    isStatic:true
  }

  ground= Bodies.rectangle(200,380,400,20,opt);
  World.add(world,ground);
  console.log(ground);
  var jiyaopt={
    restitution:1.0
  }
 ball=Bodies.circle(200,100,20,jiyaopt);
 World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}