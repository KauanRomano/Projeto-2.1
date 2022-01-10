var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {

		isStatic: false,
		restutution: 0.3,
		friction: 0,
		density: 1.2
	}
    
	ball = Bodies.circle(200,580,20,ball_options);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  groundOBJ.display();

  drawSprites();
 
}



