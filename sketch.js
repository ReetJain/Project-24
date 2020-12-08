const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, wall1, wall2, wall3;

function setup() {
	createCanvas(1360, 637);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(100, 620, 2700, 20);
	ball   = new Paper(100, 615, 50, 50);
	wall1  = new Dustbin(1298, 457, 25, 300);
	wall2  = new Dustbin(1110, 595, 400, 25);
	wall3  = new Dustbin(900, 457.6, 25, 300);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 150, y:-150})
	}
}