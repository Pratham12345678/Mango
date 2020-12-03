const  Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone, boy;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1010, 140, 30);
	mango3 = new Mango(1000, 70, 30);
	mango4 = new Mango(1100, 70, 30);
	mango5 = new Mango(900, 230, 40);
	mango6 = new Mango(1100, 230, 40);
	mango7 = new Mango(1200, 200, 40);
	mango8 = new Mango(1200, 50, 40);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //mouseDragged();
  //mouseReleased();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  drawSprites();
 
}

/*function mouseDragged() {
    Matter.Body.setPosition(boy.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    boy.fly();
}*/



