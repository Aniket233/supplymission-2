var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line,line1,line2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10,{isStatic:true});
	groundSprite.shapeColor=color(255);

	lineSprite=createSprite(width/2,height-50,200,20);
	line.shapeColor="red";
    line1Sprite=createSprite(510,610,20,100);
	line1.shapeColor="red";
	line2Sprite=createSprite(310,610,20,100);
    line2.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 );
 	World.add(world, ground);

	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  packageSprite.collide(line);
  packageSprite.collide(line1);
  packageSprite.collide(line2);
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     //Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

     Matter.Body.setStatic(packageBody, false);
 }
}



