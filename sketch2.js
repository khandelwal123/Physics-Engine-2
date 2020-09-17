const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground2;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  block1 = new Blocks(300, 250, 50, 50);
  block2 = new Blocks(330, 0, 50, 100);

  ground2 = new Ground(400, 385, 800, 10);

console.log(block2.body.angle);
//   console.log(ground.position.y);
//   console.log(ground.position.x);


}

function draw() {
  background("yellow");

  Engine.update(engine);

  block1.display();
  block2.display();

  ground2.display();

  drawSprites();
}