
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paperthrash;
var ground1;
var dustbin1;
var dustbinimage,paperimage;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new ground(width/2,700,width,20);

	dustbin1= new dustbin(1200,530);
	//dustbin1.addImage(dustbinimage);
	//dustbin1.scale=0.2;

	paperthrash= new paper(400,100,45);
	//paperthrash.addImage(paperimage);
	//paperthrash.scale=0.4

     var render = Render.create({
	 	element: document.body,
     	engine: engine,
	 	options: {
	 	  width: 1600,
	 	  height: 700,
	 	  wireframes: false
	 	}
	   });

	Engine.run(engine);
	Render.run(render);
  
	
}

function preload()
{
 
}

function draw() {
  rectMode(CENTER);
  background("gray");
  
 paperthrash.display();
  ground1.display();
  dustbin1.display();
// paperthrash.display();
 //keyPressed();
 

 // drawSprites();
 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperthrash.body, paperthrash.body.position,{x:90,y:-150});
	}
}



