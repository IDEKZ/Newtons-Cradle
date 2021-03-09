const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ball1,ball2,ball3,ball4,ball5,ball6;
var rope1,rope2,rope3,rope4,rope5,rope6;




function setup(){
    var canvas = createCanvas(560,400);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Pendulum(100,100,80,80);
    ball2 = new Pendulum(180,200,80,80);
    ball3= new Pendulum(260,300,80,80);
    ball4= new Pendulum(340,400,80,80);
    ball5= new Pendulum(420,500,80,80);
    
    rope1 = new Rope(ball1.body,{x : 100, y : 50});
    rope2 = new Rope(ball2.body,{x : 180, y : 50});
    rope3 = new Rope(ball3.body,{x : 260, y : 50});
    rope4 = new Rope(ball4.body,{x : 340, y : 50});
    rope5 = new Rope(ball5.body,{x : 420, y : 50});

}
function draw(){

    background(0);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    //ball6.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    //rope6.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}