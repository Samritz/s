
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,balll4,ball5
var ground, chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	ground = new Ground(400,300,250,15);

	

	ball1 = new Ball(400,500,40);
	ball2 = new Ball(350,500,40);
	ball3 = new Ball(300,500,40);
	ball4 = new Ball(450,500,40);
	ball5 = new Ball(500,500,40);

	//Create the Bodies Here.


	Engine.run(engine);
	slingShot = new Rope(ball1.body,{x:400,y:300});
  slingShot1 = new Rope(ball2.body,{x:350,y:300});
  slingShot2 = new Rope(ball4.body,{x:450,y:300});
  slingShot3 = new Rope(ball3.body,{x:300,y:300});
  slingShot4 = new Rope(ball5.body,{x:500,y:300});
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 





  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
slingShot.display();
slingShot1.display(); 
slingShot2.display(); 
slingShot3.display();
slingShot4.display(); 
}

function mouseDragged(){
  Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY});
  
  }
  function mouseReleased(){
    slingShot.fly();
    }
    