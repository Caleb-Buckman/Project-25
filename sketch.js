var paper, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,450,40);
dustbin = new Dustbin(650,650);
ground = Bodies.rectangle(400,690,800,20,{isStatic:true});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rectMode(CENTER);
  fill("orange");
  rect(ground.position.x,ground.position.y,800,20);
  paper.display();
  dustbin.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}
}


