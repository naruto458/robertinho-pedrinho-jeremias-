
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var jeremias ;
var pedrinho;
var robertinho;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var balloptions={
      restitution:0.5,
	  friction:0.02,
	  frictionAir:0
	}
	var jeremiasoptions={
		isStatic:true
	}
		var pedrinhooptions={
			restitution:0.7,
			 friction:0.01,
			 frictionAir:0.1
		}
        var robertinhooptions={
			restitution:0.01,
			 friction:1,
			 frictionAir:0.3
		}
	
	//Crie os Corpos Aqui.
    ball=Bodies.circle(200,200,100,balloptions);
     jeremias=Bodies.rectangle(200,380,400,5,jeremiasoptions);
      pedrinho=Bodies.rectangle(110,50,10,10,pedrinhooptions);
	  robertinho=Bodies.rectangle(350,50,10,10,robertinhooptions);
	   World.add(world,robertinho);
	World.add(world,jeremias);
	 World.add(world,ball);
      World.add(world,pedrinho);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155,17,30);
  rect(robertinho.position.x,robertinho.position.y,10,10);
 rect(pedrinho.position.x ,pedrinho.position.y,10,10);
  rect(jeremias.position.x,jeremias.position.y,400,5);
 ellipse(ball.position.x,ball.position.y,100);
  drawSprites();
 
}



