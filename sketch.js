const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 
  //level one
  block1 = new Block(500,530,100,100);
  block2 = new Block(500,430,100,100);
  block3 = new Block(500,330,100,100);
  block4 = new Block(500,230,100,100);
  block5 = new Block(600,530,100,100);
  block6 = new Block(600,530,100,100);
  block7 = new Block(600,530,100,100);
  block8 = new Block(600,530,100,100);

  
  ball=new Ball(300,350,50)
  
  slingShot = new SlingShot(ball.body,{x:300,y:50});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  
  ground.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  ball.display();
 
  slingShot.display();

}
function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
