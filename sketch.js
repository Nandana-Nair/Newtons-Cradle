var roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	roof= new Roof(350,100,300,30);
	World.add(world,roof)
	bob1=new Bob (250,100);
	bob2=new Bob(300,100);
	bob3=new Bob(350,100);
	bob4=new Bob(400,100);
	bob5=new Bob(450,100);
	rope1= new Rope(rope1.body,roof.body,-100,0);
	rope2= new Rope(rope2.body,roof.body,-50,0);
	rope3= new Rope(rope3.body,roof.body, 0,0);
	rope4= new Rope(rope4.body,roof.body,+50,0);
	rope5= new Rope(rope5.body,roof.body,+100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(bob1.body.position,{x:730,y:0})
}






}


