var helicopterIMG, helicopterSprite, packageSprite,packageIMG; 
var packageBody,ground;
var rZoneSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var packageBody_options={
		restitution: 0.6,
		isStatic: true
	};

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rZoneSprite=createSprite(400,650,200,20);
	rZoneSprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	zBox1 = new Redzone(400,635,200,PI/2);
	zBox2 = new Redzone(290,610,100,PI);
	zBox3 = new Redzone(510,610,100,PI);

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options );
	World.add(world, packageBody);	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //zBox1.display();
  zBox2.display();
  zBox3.display();
  drawSprites();
  
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 }
}



